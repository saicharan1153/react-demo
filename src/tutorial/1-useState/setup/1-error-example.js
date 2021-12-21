import React, { useState } from 'react';

//the words like useState,useEffect,useContext.. are react hooks
//use of these hooks is to add dynamic nature like change something by clicking etc.
//useState is a React inbuilt function
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally
//useState returns an array of 2 elements
//first one is a varible,2nd is function

const ErrorExample = () => {
  const [text, setText] = useState('Default Text');
  //now text = "default Text"
  function changetext() {
    if (text == 'Default Text') {
      setText('changed Text');
    } else {
      setText('Default Text');
    }
  }

  return (
    <>
      <h2>{text}</h2>
      <button type="button" onClick={changetext}>
        change text
      </button>
    </>
  );
  //when button is clicked changetext function is executed and in changetext
  //    function setText("changed Text") changes the text to "changed Text";
};

export default ErrorExample;
