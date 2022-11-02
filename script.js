class Users {
    #books;
    #fName;
    #lName;
    constructor(fName,lName,city) {
        this.#fName = fName;
        this.#lName = lName;
        this.city = city;
        this.#books = [];
    }
    lendBook(bookObject,bookName) {
        let i = 0;
        bookObject.booksArray.forEach(element => {
            if (element[0]==bookName && element[1]) {
                this.#books.push(bookName);
                bookObject.booksArray[i][1]=false;
                return console.log( bookName +' has been lended')
            } else if (element[0] == bookName && element[1]==false) { 
                return console.log('book is not available')
            } else {
                i++
            }
        });
    }
}

class books {
    constructor() {
        this.booksArray=[];
    }
    addBook(name,status) {
        this.booksArray.push([name,status])
    }
}

// class report {
//     constructor()
// }

let user1 = new Users('moshe','caustill','bat-yam');
console.log(user1);
let batYamSifriya = new books();
console.log(batYamSifriya);
batYamSifriya.addBook('book1',false)
console.log(batYamSifriya);
batYamSifriya.addBook('book2',true);
batYamSifriya.addBook('book3',true);
console.log(batYamSifriya);
user1.lendBook(batYamSifriya,'book3');
console.log(batYamSifriya);