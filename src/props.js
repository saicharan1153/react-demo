import React from 'react';
import { books } from './bookdata';

//to import js variables,place variables in curly braces
//while importing from a js file path is necessary but file type
//    is not necessary to mention,
//while importing from non-js files both path,file type is must
const photo =
  'https://www.studentthinkbox.com/wp-content/uploads/2017/05/our-philosophy.jpg';
const title = 'art of concentration';
const author = 'Amal M Das';

//for multiple books we create array of objects and apply map() to display each book

function openpage(pageurl) {
  // let linkurl = pageurl;
  let newlink = '';
  for (let i = 0; i < pageurl.length; i++) {
    if (pageurl[i] == ' ') {
      newlink += '-';
    } else {
      newlink += pageurl[i];
    }
  }
  let totallink = 'https://www.google.com/search?q=';
  totallink += newlink;
  console.log(totallink);
  window.open(totallink, '_blank');
}

function List() {
  return (
    <>
      <h3 style={{ marginTop: '2rem' }} className="text-center">
        Must read books
      </h3>
      <div style={{ marginTop: '2rem' }}>
        <div className="container">
          <div className="row">
            {books.map((book) => {
              console.log(book);
              return <NewBook key={book.id} {...book}></NewBook>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

//{...book} shaortcut way to pass all the attributes,also known as spread operator
//key should be mentioned in the attribute while using map method
//onClick,onMouseover are react events
//onClick={some function} syntax similarly onMouseover same syntax
const NewBook = (book) => {
  return (
    <div
      onClick={() => {
        openpage(book.title);
      }}
      style={{ padding: '1rem', cursor: 'pointer' }}
      className="d-inline-flex flex-column col-md-6 col-lg-4 "
    >
      <div
        className="flex-fill align-items-center"
        style={{
          background: 'white',
          borderRadius: '0.5rem',
          padding: '1rem',
        }}
      >
        <img className="img-fluid mx-auto d-block" src={book.img} />
        <h4 className="text-center">{book.title}</h4>
        <p className="text-center">{book.author}</p>
      </div>
    </div>
    // </div>
  );
};

//Props are passed like attributes in html tags again to access vars use {}

function Propsbasics(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <h3>{props.bname}</h3>
      <p>{props.writer}</p>
    </div>
  );
}

function PropsBasics(props) {
  const { img, bname, writer } = props;
  return (
    <div>
      <img src={img} alt="" />
      <h3>{bname}</h3>
      <p>{writer}</p>
    </div>
  );
}

//here props is a object whose keys are img,name,writer
//when passing props in the component the attributes are turned
//      into keys of an props object
//put {} inorder to access a value of particular js variable in JSX
export default List;
