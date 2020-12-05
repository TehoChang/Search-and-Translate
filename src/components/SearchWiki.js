import React, { useState, useEffect } from 'react';
import wiki from '../apis/wiki'

const SearchWiki = () => {
  const [term, setTerm] = useState('Programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);
  
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);
  //鉤子函數，每當term改變的時候就執行


  useEffect(() => {
    //因為useEffect的參數函數不能是async function，所以多一層

    const search = async () => {

      if (!debouncedTerm) {
        setResults([])
      } else {
        const { data } = await wiki.get('', {
          params: {
            srsearch: debouncedTerm
          }
        });

        setResults(data.query.search);
      };
    }
    search();
    //相比上面的setTimeout，箭頭函數的表達式似乎不會直接調用，所以我們要手動調用它
  }, [debouncedTerm]);
  //鉤子函數，每當debouncedTerm改變的時候就執行



  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });


  return (
    <div style={{ padding: '0px 20px' }}>
      <div className="ui form">
        <div className=" four wide field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default SearchWiki;
