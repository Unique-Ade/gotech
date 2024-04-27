
import { useState } from 'react';
import search_icon from './Assets/search.svg';
import UseFetch from './useFetch';

const SearchBar = () => {
    const [input, setInput] = useState("");
    const {data: words, error} = UseFetch('http://localhost:5000/words');
    // const search=()=>{
    //     // setData();
    // }
    return ( 
        <div className="search_bar">
            <input type="search" name="search-box" id="search" placeholder="Search e.g C#, Js, PHP, JavaScript..." />
            <img src={search_icon} alt="" value={input} onChange={e=>setInput(e.target.value)} />
        </div>
     );
}
 
export default SearchBar;