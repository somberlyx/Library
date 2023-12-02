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

function Book(bookTitle, author, date, pages, description, read) {
  this.bookTitle = bookTitle;
  this.author = author;
  this.date = date;
  this.pages = pages;
  this.description = description;
  this.read = read;
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

function addCard(){
  for(i=(library.length - 1); i < library.length; i++){
    const container = document.querySelector(".container");
    let card = document.createElement("div");
    card.classList.add('card')
    card.innerHTML = `
    <h1 class="book-title">${library[i].title}</h1>
    <h2 class="author">${library[i].author}</h2>
    <p><span class="date-published">${library[i].date}</span> <span class="pages">pages ${library[i].pages}</span></p>
    <p class="description">${library[i].description}</p>
    `
    container.appendChild(card);
  }
}

function Book2(){
}

function addBookToLibrary2(){
  const bookTitle = document.querySelector("dialog .title");
  const author = document.querySelector("dialog .writtenBy");
  const date = document.querySelector("dialog .published");
  const pages = document.querySelector("dialog .pages");
  const description = document.querySelector("dialog .description")
  const read = document.querySelector("dialog input[name='Reading']:checked");
  let book = new Book();
  book.title = bookTitle.value; 
  book.author = author.value; 
  book.date = date.value;
  book.pages = pages.value; 
  book.description = description.value;
  book.read = read.value;
  console.log(book)
  library.push(book);
  console.log(library);
  
}