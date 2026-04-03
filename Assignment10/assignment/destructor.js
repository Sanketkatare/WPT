let book = {
    bookId:1,
    bookName:"java"
}

console.log(book.bookId); // it will give you the book id :1
let {id,name1} = book;
console.log(id + "  " + name1);
let { bookId: id1 } = book;
let { bookName: name2 } = book;
console.log(id1);
let s = [1, 2, 3]
console.log(s[0]);  //  oth 
let [q, w, e] = s;
console.log(q);