import WordDefinition from "./WordDefinition";

const TechWordsList = ({wordList}) => {
    return (
        <div className="tech_words_list">
            {wordList.map(word => (
                <div className="words" key={word.id}>
                    <table>
                        <tr className="word_search">
                          <a href="" target="#searched_word"> <td>{word.name}</td></a> 
                          <a href="" ><td style={{fontSize:"16px", textAlign:"right"}}>{word.shortDefinition}</td></a>
                        </tr>
                    </table>
                </div>
            ))}
            {/* <WordDefinition/> */}
            <WordDefinition wordList={wordList}/>
        </div>
    );
}

export default TechWordsList;