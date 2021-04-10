const fs = require('fs');

const addBook = (title) => {
  console.log(`adding the book ${title}`);
  saveBook(title);
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

const saveBook = (title) => {

  const books = loadBooks();

  books.push({
    title: title
  });

  try{
    fs.writeFileSync('data.json', JSON.stringify(books))
  }catch(error){
    console.log("Issue when writing file" + error);
  }

}


module.exports = {
  addBook: addBook
}