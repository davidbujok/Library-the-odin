const webBody = document.querySelector('body');
const shelf = document.querySelector('.shelf');
const addBook = document.querySelector('.newBook');
addBook.addEventListener('click', addNewBook);
let myLibrary = [];

function Book(title, author, genre, pages, read) {
    this.title = title,
    this.author = author,
    this.genre = genre,
    this.pages = pages, 
    this.read = read
}

Book.prototype.createCard = function () {
    const card = document.createElement('div');
    shelf.appendChild(card);
    card.classList.add('book');
    const indexOfBook = myLibrary.findIndex(item => item.title === this.title);
    card.setAttribute("data-attribute", indexOfBook);
    card.setAttribute("book-title", this.title);
}

Book.prototype.displayOnCard = function(newTitle, newAuthor, newGenre, newPages, readStatement) {
    let bookCard = document.querySelector('[book-title="' + this.title + '"]');
// -------------------------------------

    let titleText = document.createElement('p');
    bookCard.appendChild(titleText);
    titleText.classList.add('title-text');
    titleText.textContent = "Title: ";
        
    let actualTitle = document.createElement('p');
    bookCard.appendChild(actualTitle);
    actualTitle.classList.add('actual-title');
    actualTitle.textContent = newTitle;
// -------------------------------------

    let authorText = document.createElement('p');
    bookCard.appendChild(authorText);
    authorText.classList.add('additional-text');
    authorText.textContent = "Author: ";

    let actualAuthor = document.createElement('p');
    bookCard.appendChild(actualAuthor);
    actualAuthor.classList.add('other-cells-records');
    actualAuthor.textContent = newAuthor;
// -------------------------------------

    let genreText = document.createElement('p');
    bookCard.appendChild(genreText);
    genreText.classList.add('additional-text');
    genreText.textContent = "Genre: ";

    let actualGenre = document.createElement('p');
    bookCard.appendChild(actualGenre);
    actualGenre.classList.add('other-cells-records');
    actualGenre.textContent = newGenre;
// --------------------------------------

    let pagesText = document.createElement('p');
    bookCard.appendChild(pagesText);
    pagesText.classList.add('additional-text');
    pagesText.textContent = "Pages: ";

    let actualPages = document.createElement('p');
    bookCard.appendChild(actualPages);
    actualPages.classList.add('other-cells-records');
    actualPages.textContent = newPages;

//---------------------------------------------------
    let readText = document.createElement('p');
    bookCard.appendChild(readText);
    readText.classList.add('additional-text', 'read-it');
    readText.textContent = "Have you read it? ";


    let toggleButtonLabel = document.createElement('label');
    bookCard.appendChild(toggleButtonLabel);
    toggleButtonLabel.classList.add('switch');

    let toggleButtonContainer = document.createElement('input');
    toggleButtonLabel.appendChild(toggleButtonContainer);
    toggleButtonContainer.setAttribute("type", "checkbox");

    let toggleButtonElement = document.createElement('span');
    toggleButtonLabel.appendChild(toggleButtonElement);
    toggleButtonElement.classList.add('slider', 'off');
    toggleAdjustment(readStatement);
    toggleButtonElement.addEventListener('click', (e) => { 
        if (this.read) {
             this.read = false
         } else {
             toggleButtonElement.classList.add('on');
             this.read = true;
         }    
    }); 
    function toggleAdjustment(boolOfRead) {
        if (boolOfRead) { 
            toggleButtonElement.classList.add('on');
            toggleButtonContainer.checked = true;
        }
    }

    let removeBook = document.createElement('button')
    bookCard.appendChild(removeBook)
    removeBook.classList.add('remove-button');
    removeBook.innerText = 'Remove'

    removeBook.addEventListener('click', (e) => {
        const indexOfBook = myLibrary.findIndex(item => item.title === this.title);
        myLibrary.splice(indexOfBook, 1);
        bookCard.remove();
    })
};

function newForm () {
    let formWindow = document.createElement('div');
    shelf.appendChild(formWindow);
    formWindow.classList.add('form-window');

    let formStructure = document.createElement('form');
    formStructure.classList.add('bookForm');
    formWindow.appendChild(formStructure);
    formStructure.setAttribute("action", "");
    formStructure.setAttribute("method", "get");

    let formTitle = document.createElement('legend')
    formStructure.appendChild(formTitle);
    formTitle.innerText = 'Add new book.'
//----------------------------------------------------------------
    let formRowTitle = document.createElement('div')
    formStructure.appendChild(formRowTitle);
    formRowTitle.classList.add('form-row');

    let labelTitle = document.createElement('label')
    formRowTitle.appendChild(labelTitle);
    labelTitle.classList.add('text-styling');
    labelTitle.setAttribute("for", "title")
    labelTitle.innerText = 'Title';

    let inputTitle = document.createElement('input');
    formRowTitle.appendChild(inputTitle);
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("id", "title");
    inputTitle.setAttribute("name", "title");

// -----------------------------------------------------------------
    let formRowAuthor = document.createElement('div')
    formStructure.appendChild(formRowAuthor);
    formRowAuthor.classList.add('form-row');

    let labelAuthor = document.createElement('label')
    formRowAuthor.appendChild(labelAuthor);
    labelAuthor.classList.add('text-styling');
    labelAuthor.setAttribute("for", "author")
    labelAuthor.innerText = 'Author';

    let inputAuthor = document.createElement('input');
    formRowAuthor.appendChild(inputAuthor);
    inputAuthor.setAttribute("type", "text");
    inputAuthor.setAttribute("id", "author");
    inputAuthor.setAttribute("name", "author");

// //--------------------------------------------------------------------
    let formRowGenre = document.createElement('div')
    formStructure.appendChild(formRowGenre);
    formRowGenre.classList.add('form-row');

    let labelGenre = document.createElement('label')
    formRowGenre.appendChild(labelGenre);
    labelGenre.classList.add('text-styling');
    labelGenre.setAttribute("for", "genre")
    labelGenre.innerText = 'Genre';

    let inputGenre = document.createElement('input');
    formRowGenre.appendChild(inputGenre);
    inputGenre.setAttribute("type", "text");
    inputGenre.setAttribute("id", "genre");
    inputGenre.setAttribute("name", "genre");
// //--------------------------------------------------------------------
    let formRowPages = document.createElement('div')
    formStructure.appendChild(formRowPages);
    formRowPages.classList.add('form-row');

    let labelPages = document.createElement('label')
    formRowPages.appendChild(labelPages);
    labelPages.classList.add('text-styling');
    labelPages.setAttribute("for", "pages")
    labelPages.innerText = 'Pages';

    let inputPages = document.createElement('input');
    formRowPages.appendChild(inputPages);
    inputPages.setAttribute("type", "number");
    inputPages.setAttribute("id", "pages");
    inputPages.setAttribute("name", "pages");
// //---------------------------------------------------------------------
    let formRowReadCheckbox = document.createElement('div')
    formStructure.appendChild(formRowReadCheckbox);
    formRowReadCheckbox.classList.add('form-row', 'checkbox-row');    

    let labelReadButton = document.createElement('label');
    formRowReadCheckbox.appendChild(labelReadButton);
    labelReadButton.classList.add('checkbox-read', 'text-styling');
    labelReadButton.setAttribute("for", "readbutton");
    labelReadButton.innerText = 'Have you read the book?'

    let readButton = document.createElement('input');
    formRowReadCheckbox.appendChild(readButton);
    readButton.setAttribute("type", "checkbox");
    readButton.setAttribute("class", "checkbox-styling");
    readButton.setAttribute("id", "read-button");
    readButton.setAttribute("name", "read-button");
    readButton.setAttribute("value", "Yes!");
    
//-------------------------------------------------------------
    let formRowSubmit = document.createElement('div')
    formStructure.appendChild(formRowSubmit);
    formRowSubmit.classList.add('form-row');    

    let submit = document.createElement('button');
    formRowSubmit.appendChild(submit);
    submit.classList.add('submit-button');
    submit.setAttribute("type", "submit");
    submit.textContent = "Submit";
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        let title = document.getElementById('title').value
        let author = document.getElementById('author').value
        let genre = document.getElementById('genre').value
        let pages = document.getElementById('pages').value
        let read = document.getElementById('read-button').checked

        userInput = new Book(title, author, genre, pages, read);
        myLibrary.push(userInput);
        userInput.createCard();
        userInput.displayOnCard(title, author, genre, pages, read);
        formWindow.remove();
    });
}

function addNewBook () {
    newForm();  
}







