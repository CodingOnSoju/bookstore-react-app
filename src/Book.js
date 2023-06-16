const Book = (props) => {
  const { img, title, author, number } = props;

  //removing getBook logic
  // const getSingleBook = () => {
  //   getBook(id);
  // };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* <button onClick={getSingleBook}>click me</button> */}
      {/* alternatively, you can also use an anonymous function <button onClick={()=> getBook(id)}>click me</button> */}
      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;
