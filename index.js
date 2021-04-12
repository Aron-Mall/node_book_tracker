const yargs = require("yargs");
const chalk = require("chalk");
const books = require("./book.js");
const fs = require('fs');


//adding a book with add command

yargs.command({
  command: "add",
  describe: "Add a book",
  builder: {
    title: {
      describe: "Title of book",
      demandOption: true,
      type: "string"
    },
  },
  handler: function (argv) {
    books.addBook(argv.title);

  },
});


yargs.command({
  command: "remove",
  describe: "delete a book",
  builder: {
    title: {
      describe: "Title of book to remove",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv){
    books.removeBook(argv.title)
  }
})

console.log(yargs.argv);
