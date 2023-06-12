import React from "react";
import ReactDOM from "react-dom/client";
import Author from "./components/Author";
import Message from "./components/Message";
import Person from "./components/Person";
import Title from "./components/Title";
import Image from "./components/Image";
import Book from "./components/Book";
import "./style.css";

const Bookstore = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Bookstore />);

export default Bookstore;
