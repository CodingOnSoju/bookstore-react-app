import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style.css";

import { books } from "./books";
import Book from "./Book";

//can't render object directly - Error message: Objects are not valid as a React child
const Bookstore = () => {
  //find book by id
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id);
  //   console.log(book);
  // };

  //removing getBook logic to make the code scalable

  return (
    <>
      <h1>Top 6 Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          //destructing
          // const { img, title, author, id } = book;
          //spread operator
          return <Book {...book} key={book.id} number={index} />;
          //key should only be mentioned in places that are iterating over the attributes
        })}
      </section>
    </>
  );
};

//Event Examples - event will be set up in the book component
// const EventExamples = () => {
//   return (
//     <section>
//       {/* To respond to form submissions, we'd need to set up an event */}
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={(e) => console.log(e.target.value)}
//           style={{ margin: "1rem 0" }}
//         />
//         <button type="submit">submit</button>
//         <button onClick={() => console.log("click me")} type="button">
//           click me
//         </button>
//       </form>
//     </section>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Bookstore />);

export default Bookstore;
//you can only have one default export per React file

//write a function to fliter according to genre + side-bar with a list of genres
// Create a header component
//button - each click brings to the amazon website that sells the book
