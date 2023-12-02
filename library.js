const dialog = document.querySelector("dialog");
const newBook = document.querySelector("button");
const closeBtn = document.querySelector("dialog button");
const confirmBtn = document.querySelector("dialog .confirm");

let library = [];

newBook.addEventListener("click", ()=>{
  dialog.showModal();
})

closeBtn.addEventListener("click", () => {
  dialog.close();
});

confirmBtn.addEventListener("click", (event) => {
  addBookToLibrary();
  addCard();
  event.preventDefault();
  dialog.close();
})

function Book() {
}

function addBookToLibrary(){
  const bookTitle = document.querySelector("dialog .title");
  const author = document.querySelector("dialog .writtenBy");
  const date = document.querySelector("dialog .published");
  const pages = document.querySelector("dialog .pages");
  const description = document.querySelector("dialog .description")
  const read = document.querySelector("dialog input[name='Reading']:checked");
  let book = new Book(bookTitle.value, author.value, date.value, pages.value, description.value, read.value)
  console.log(book)
  library.push(book);
  console.log(library);
}
