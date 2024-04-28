import TechWordsList from './TechWordsList';
import { useState } from 'react';
import search_icon from './Assets/search.svg';
import UseFetch from './useFetch';
import WordDefinition from './WordDefinition';


const Home = () => {
    const [input, setInput] = useState("");
    const { data: words, error } = UseFetch('http://localhost:5000/words');
    const [wordList, setWordList] = useState([]);
    const searchFilter = (e) => {
        setWordList(words.filter((word) =>
             word.name.toLowerCase().includes(e.target.value)
            || word.name.toUpperCase().includes(e.target.value)));
    }
    return (
        <div className="search_bar_main">
            <div className="search_bar">
                <input type="search" name="search-box" id="search" placeholder="Search e.g C#, Js, PHP, JavaScript..."
                    onChange={searchFilter} />
                <img src={search_icon} alt="" onClick={searchFilter} />
            </div>
            <TechWordsList wordList={wordList} />
           
        </div>


    );
}

export default Home;