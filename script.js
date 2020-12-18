function Book(title, author, pages, isRead, id){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead,
    this.id = id
}

Book.prototype.info = function(){
    return this.title + " by " + this.author + ", has " + this.pages + " pages and " + (this.isRead?"is read.":"not read yet.");
}

Book.prototype.changeStatus = function(){
    this.isRead ? this.isRead = false: this.isRead = true;
}

let modal = document.querySelector(".modal");
const bookArr = [];
const library = document.querySelector(".library");
let globalId = 0;

function showModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 

function addNewBook(){
    let title = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let isRead = document.getElementById("isRead").checked;
    

    let newBook = new Book(title, author, pages, isRead, globalId++);
    bookArr.push(newBook);

    let bookDiv = createElement(newBook);
    bookDiv.setAttribute("id", newBook.id);
    
    library.appendChild(bookDiv);

    closeModal();

}

function createElement(book){
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.setAttribute("id", book)
    let titleDiv = document.createElement("div");
    titleDiv.innerText = book.title;
    titleDiv.classList.add("title");
    let authorDiv = document.createElement("div");
    authorDiv.innerText = book.author;
    authorDiv.classList.add("author");
    let pagesDiv = document.createElement("div");
    pagesDiv.innerText = book.pages;
    pagesDiv.classList.add("pages");
    let isReadDiv = document.createElement("div");
    isReadDiv.innerText = (book.isRead ? "Is read." : "Not read yet.");
    isReadDiv.classList.add("read");

    let statusBtn = document.createElement("button");
    statusBtn.innerText = "Change Status";
    statusBtn.classList.add("btn-add", "btn-status");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn-add", "btn-delete");

    let btnContainer = document.createElement("div");
    btnContainer.classList.add("control-btns");
    btnContainer.appendChild(statusBtn);
    btnContainer.appendChild(deleteBtn);

    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(isReadDiv);
    bookDiv.appendChild(btnContainer);

    return bookDiv;
}

