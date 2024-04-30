import { useEffect, createContext, useContext, useState } from "react";
import { Navigate } from 'react-router-dom';
import clienteAxios from "../config/axios";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
}

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const isAuthenticatedLocalStorage = localStorage.getItem('isAuthenticated');
        const userRoleLocalStorage = localStorage.getItem('userRole');

        if (isAuthenticatedLocalStorage && userRoleLocalStorage) {
            setIsAuthenticated(true);
            setUserRole(userRoleLocalStorage);
        }
    }, []);


    const handleLogin = async (navigate, formData) => {
        try {
            const res = await clienteAxios.post('/user-token/', formData);
            setIsAuthenticated(true);
            setUserRole(res.data.user_profile.rol);
            const token = res.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('isAuthenticated', true);
            localStorage.setItem('userRole', res.data.user_profile.rol);
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
          // Eliminar el token, el rol de usuario y el estado de autenticación del almacenamiento local
          localStorage.removeItem('isAuthenticated');
          localStorage.removeItem('userRole');
          localStorage.removeItem('token');
          // Redirigir a la página de inicio
          Navigate('/');
        } catch (error) {
          console.error('Error al cerrar sesión:', error);
          throw error;
        }
      };
      

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                userRole,
                handleLogin,
                handleLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};