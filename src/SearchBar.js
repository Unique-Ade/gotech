import search_icon from './Assets/search.svg';
const SearchBar = () => {
    return ( 
        <div className="search_bar">
            <input type="search" name="search-box" id="search" placeholder="Search e.g C#, Js, PHP, JavaScript..." />
            <img src={search_icon} alt=""/>
        </div>
     );
}
 
export default SearchBar;