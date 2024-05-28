import { useState } from "react";
import WordDefinition from "./WordDefinition";

const TechWordsList = ({ wordList }) => {
    const [words, setWords] = useState(wordList)
    const handleSelect = (id) => {

        const newWord = wordList.filter((word) => (word.id == id));
        setWords(newWord);
    }



    return (
        <div className="tech_words_list">
            {wordList.map((word) => (
                <div className="words" key={word.id}>
                    <table>
                        {/* <tr className="word_search" onClick={() => { handleSelect(word.id) }}>
                            <a href="#searched_word">
                                <td>{word.name}</td>
                            </a>
                            <a href="#searched_word">
                                <td
                                    style={{
                                        fontSize: "16px",
                                        textAlign: "right",
                                        padding: "6px 0px",
                                    }}
                                >
                                    {word.shortDefinition}
                                </td>
                            </a>
                        </tr> */}
                    </table>
                </div>
            ))}
            {/* <WordDefinition/> */}
            <WordDefinition wordList={wordList} handleSelect={handleSelect} />
        </div>
    );
};

export default TechWordsList;
