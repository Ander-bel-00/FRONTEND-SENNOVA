import { useEffect, createContext, useContext, useState } from "react";
import { Navigate } from 'react-router-dom';
import clienteAxios from "../config/axios";
import CryptoJS from 'crypto-js';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
}

// Función para cifrar los datos del userProfile
const encryptUserProfile = (userProfile) => {
    const encryptedProfile = CryptoJS.AES.encrypt(JSON.stringify(userProfile), 'secret_key').toString();
    return encryptedProfile;
}

// Función para descifrar los datos del userProfile
const decryptUserProfile = (encryptedProfile) => {
    const bytes = CryptoJS.AES.decrypt(encryptedProfile, 'secret_key');
    const decryptedProfile = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedProfile;
}

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [userProfile, setUserProfile] = useState(null)

    useEffect(() => {
        const isAuthenticatedLocalStorage = localStorage.getItem('isAuthenticated');
        const userRoleLocalStorage = localStorage.getItem('userRole');
        const userProfileLocalStorage = localStorage.getItem('userProfile');

        if (isAuthenticatedLocalStorage && userRoleLocalStorage && userProfileLocalStorage) {
            setIsAuthenticated(true);
            setUserRole(userRoleLocalStorage);
            const decryptedProfile = decryptUserProfile(userProfileLocalStorage);
            setUserProfile(decryptedProfile);
        }
    }, []);


    const handleLogin = async (navigate, formData) => {
        try {
            const res = await clienteAxios.post('/user-token/', formData);
            setIsAuthenticated(true);
            setUserRole(res.data.user_profile.rol);
            setUserProfile(res.data.user_profile);
            const token = res.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('isAuthenticated', true);
            localStorage.setItem('userRole', res.data.user_profile.rol);
            const encryptedProfile = encryptUserProfile(res.data.user_profile);
            localStorage.setItem('userProfile', encryptedProfile);
            navigate(`/${res.data.user_profile.rol}`);
        } catch (error) {
            console.error('Error al inciar Sesión: ', error);
            throw error;
        }
    }

    const handleLogout = async () => {
        try {
          setIsAuthenticated(false);
          setUserRole(null);
          setUserProfile(null);
          // Eliminar el token, el rol de usuario y el estado de autenticación del almacenamiento local
          localStorage.removeItem('isAuthenticated');
          localStorage.removeItem('userRole');
          localStorage.removeItem('userProfile');
          localStorage.removeItem('token');
          // Redirigir a la página de inicio
          Navigate('/login');
        } catch (error) {
          console.error('Error al cerrar sesión:', error);
          throw error;
        }
      };
      

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                userProfile,
                userRole,
                handleLogin,
                handleLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};
