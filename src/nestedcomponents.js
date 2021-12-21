import React from "react";

function Nestedcomponents() {
  return (
    <>
      <Name />
      <Message />
    </>
  );
}

//just include the name of component as tag to use
//  a component in another function or component

const Name = () => <h3>KSC</h3>;
const Message = () => {
  return (
    <>
      <p>using nested components</p>
    </>
  );
};

//in returning we need to return as one bundle if
//  there are multiple statements use <></>(fragments)
//  or <React.Fragment></React.Fragment> to return

export default Nestedcomponents;
