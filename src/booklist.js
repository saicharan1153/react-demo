import React from "react";

function booklist() {
  return (
    <div className="container">
      <div className="row ">
        <Book></Book>
        <Book></Book>
        <Book></Book>
      </div>
    </div>
  );
}

const Book = () => {
  return (
    <div
      style={{ padding: "1rem" }}
      className="d-flex flex-column col-md-6 col-lg-4"
    >
      <div
        style={{
          background: "#618d98",
          borderRadius: "0.5rem",
          padding: "1rem",
        }}
      >
        <img
          className="img-fluid"
          src="https://m.media-amazon.com/images/I/91n7e4ULsKL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <h4 className="text-center text-md-start">Art of concentration</h4>
        <p className="text-center text-md-start">Amal M das</p>
      </div>
    </div>
    // </div>
  );
};

//class d-flex determines display type as flex
//flex-column sets the flex direction as column
//justify-content-center makes the contents in the specified flex
//     direction center
//justify-content-md-start after medium size makes the contents
//     in the specified flex direction left(start-left , end-right)
//inorder col-md-6, col-4-lg should work, the parent class should be row
//      and the parent to the row class should be container
//for inline CSS mention as style={{}} outer curly brace indicates to use
//    that is in javascript innner curly brace is to indicate the object
export default booklist;
