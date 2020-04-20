function createBookList(books) {
    const listOfBooks = document.createElement('ul');
    
    for (let i = 0; i < books.length; i++) {
  
      
  
      const listItem = document.createElement('li');
      const listTitle = document.createElement('p');
      const listImg = document.createElement('img');
      listImg.setAttribute('src', books[i].img);
    
      listOfBooks.style.display = 'flex';
      listItem.style.listStyleType ='none';
      listItem.style.margin = '20px';
      listItem.style.padding = '15px';
      listImg.style.width ='300px';
      listImg.style.height ='425px';

      const BookIsRead = books[i].alreadyRead;
      if(BookIsRead === true){
          listItem.style.backgroundColor = 'green';
      }
      else{
          listItem.style.backgroundColor = 'red';
      }
      const bookTitle = books[i].title;
      const bookAutohr = books[i].author;
      const bookHeader = document.createTextNode(bookTitle + '-'  +bookAutohr);
       
      listTitle.appendChild(bookHeader);
      listItem.appendChild(listTitle);
      listItem.appendChild(listImg);
      listOfBooks.appendChild(listItem);

    }
    return listOfBooks;
}

const books  = [{

    title: 'The Design of Everyday Things',
    img:'https://www.dropbox.com/s/4us43o8f5ebdrwb/The%20Design%20of%20everyday%20things.jpg?raw=1',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    img:'https://www.dropbox.com/s/kavpsbj1ly5d05m/The%20most%20human.jpg?raw=1',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'The Pragmatic Programmer',
    img:'https://www.dropbox.com/s/gw59huxi57okmwr/The%20pragmatic%20programer.jpg?raw=1',
    author: 'Andrew Hunt',
    alreadyRead: true
  }
  ];
  let ulElement = createBookList(books);
  document.querySelector('#bookList').appendChild(ulElement);

