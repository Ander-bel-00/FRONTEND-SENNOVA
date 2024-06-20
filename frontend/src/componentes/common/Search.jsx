// Search.jsx
import { Fragment, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import './css/Search.css';

const Search = ({ text, data, onFilter  }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onFilter(value);  // Llama a la función de filtrado cuando el input cambia
    };

    return (
        <Fragment>
            <div className="search">
                <IoIosSearch className="inline-block" />
                <input 
                    type="search" 
                    placeholder={text} 
                    value={query}
                    onChange={handleInputChange} 
                />
            </div>
        </Fragment>
    );
};

export default Search;
