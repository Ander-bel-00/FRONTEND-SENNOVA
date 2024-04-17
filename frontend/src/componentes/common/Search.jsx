import { Fragment } from "react"
import { IoIosSearch } from "react-icons/io"
import './css/Search.css'

const Search = ({text}) => {
    return (
        <Fragment>
            <div className="search">
                <IoIosSearch className="inline-block" />
                <input type="search" placeholder={text} />
            </div>
        </Fragment>
    )
}
export default Search;