const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

const db = mysql.createPool({
    host: 'mysql_db',
    user: 'MYSQL_USER',
    password: 'MYSQL_PASSWORD',
    database: 'books'
});

const fakeTasks = [{
    data: 'Learn about React Ecosystems',
    isCompleted: false,
}, {
    data: 'Get together with friends',
    isCompleted: false,
}, {
    data: 'Buy groceries',
    isCompleted: true,
}];

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('hi')
});

app.get('/get' , (req, res) => {
    const SELECT_QUERY = " SELECT * FROM books_reviews";
    db.query(SELECT_QUERY, (err, result) => {
        res.send(result);
    })
});

app.get('/getTasks', (req, res) => {
    res.send(fakeTasks);
})

app.post("/insert", (req, res) => {
    const bookName = req.body.setBookName;
    const bookReview = req.body.setReview;
    const INSERT_QUERY = "INSERT INTO books_reviews (book_name, book_review) VALUES (?, ?)";
    db.query(INSERT_QUERY, [bookName, bookReview], (err, result) => {
        console.log(result);
    })
});

app.listen('3001', () => { });