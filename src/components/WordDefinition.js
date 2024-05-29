const WordDefinition = ({ wordList, handleSelect }) => {
  return (
    <div className="word_definition" id="searched_word">
      {wordList.map((selected) => (
        <div>
          <div className="word_def_nav">
            <h1>{selected.name}</h1>
            <img src="" alt="" className="speaker" />
          </div>

          <div className="definition">
            <p class>
              {selected.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WordDefinition;
