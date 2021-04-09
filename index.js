const yargs = require("yargs");
const chalk = require("chalk");
const books = require("./book.js");

//adding a book with add command

yargs.command({
  command: "add",
  describe: "Add a book",
  builder: {
    title: { 
      describe: "title of book", 
      demandOption: true, type: 
      "string" 
    },
  },
  handler: function (argv) {
    books.addBook(argv.title);
  },
});

console.log(yargs.argv);
