import React, { useState } from 'react';
import Dropdown from './utility/Dropdown';
import Convert from './utility/Convert';

const options = [
  {
    label:'English',
    value:'en'
  },
  {
    label:'Japan',
    value:'ja'

  },
  {
    label: 'Thai',
    value: 'th',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  
  
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div style={{padding:'0px 20px', }}>
      <div className="ui form ">
        <div className=" field">
          <label>Please Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      
      <h3 className="ui header">Translated Result:</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
