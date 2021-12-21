import React from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "ksc",
    age: "20",
    message: "default msg",
  });
  const p = {
    name: "ksc",
    age: "20",
    message: "default msg",
  };
  const changemsg = () => {
    setPerson({ ...person, message: "changed msg" });
  };

  // here in setPerson the only changing value can be mentioned if rest
  //    everything is as it is then use spread operator as shown above

  return (
    <>
      <h3>{person.name}</h3>
      <h4>{person.age}</h4>
      <h5>{person.message}</h5>
      <button className="btn" onClick={changemsg}>
        change Msg
      </button>
      <button className="btn" onClick={() => setPerson(p)}>
        reset
      </button>
    </>
  );
};

export default UseStateObject;
