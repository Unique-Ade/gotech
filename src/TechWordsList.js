const TechWordsList = ({wordList}) => {
    return (
        <div className="tech_words_list">
            {wordList.map(word => (
                <div className="words" key={word.id}>
                    <table>
                        <tr>
                            <td>{word.name}</td>
                        </tr>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default TechWordsList;