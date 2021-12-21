import React from "react";
import { data } from "../../../data";

// so in place of value we can pass array,objects etc in useState as parameter

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeperson = (id) => {
    const newpeople = people.filter((person) => person.id !== id);
    setPeople(newpeople);
  };
  return (
    <>
      {people.map((person) => {
        return (
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "1rem",
            }}
          >
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", margin: "1rem" }}
            >
              <p
                style={{ color: "#000000", textAlign: "left", padding: "1rem" }}
              >
                {person.name}
              </p>
              <button
                onClick={() => removeperson(person.id)}
                style={{
                  marginRight: "2rem",
                  padding: "1rem",
                  border: "none",
                  backgroundColor: "#ffffff",
                  color: "#1010f0",
                }}
              >
                remove
              </button>
            </div>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople(data)}>
        reset
      </button>
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
