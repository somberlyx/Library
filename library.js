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

