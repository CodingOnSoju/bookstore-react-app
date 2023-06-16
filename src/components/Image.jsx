import React from 'react';
import {book1, book2, book3, book4} from '../../public/images'


//create an array of objects, where each object represents an image element.
const Images = [
  {
    id: 1,
    src: book1,
    alt: "book 1",
  },
  {
    id: 2,
    src: book2,
    alt: "book2",
  },
  {
    id: 3,
    src: book3,
    alt: "book3",
  },
  {
    id: 4,
    src: book4,
    alt: "book4"
  },
];

//use the map() function to loop through the images array and render each image element as a


export default Images;