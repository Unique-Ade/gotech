import WordDefinition from "./WordDefinition";

const TechWordsList = ({wordList}) => {
    return (
        <div className="tech_words_list">
            {wordList.map(word => (
                <div className="words" key={word.id}>
                    <table>
                        <tr>
                          <a href="" target="#searched_word"> <td>{word.name}</td></a> 
                        </tr>
                    </table>
                </div>
            ))}
            <WordDefinition/>
        </div>
    );
}

export default TechWordsList;