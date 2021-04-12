const chalk = require('chalk');
const fs = require('fs');

const addBook = (title) => {
  const books = loadBooks();

  books.push({
    title: title
  });

  console.log(`adding the book ${title}`);
  saveBooks(books);
}


const removeBook = (title) => {
 
  const books = loadBooks();
  const bookFound = books.find(book => book.title === title);
  
  if (!bookFound){
    console.log("The book title was not found")
  }

  const filteredBooks = books.filter(book => book.title !== title);
  saveBooks(filteredBooks)
  console.log(chalk.green.inverse(`${title} has been removed`));

}

const loadBooks = () => {

  try {
    const buffer = fs.readFileSync('data.json');
    const dataJSON = buffer.toString();
    const data = JSON.parse(dataJSON);
    return data;

  } catch (error){
    return [];
  }

}

const saveBooks = (books) => {

  try{
    fs.writeFileSync('data.json', JSON.stringify(books))
  }catch(error){
    console.log("Issue when writing file" + error);
  }

}


module.exports = {
  addBook,
  removeBook
}