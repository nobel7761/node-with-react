const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

const users = [
    { id: 1, name: "Jamal", phone: "0195321789" },
    { id: 2, name: "Kamal", phone: "0195321789" },
    { id: 3, name: "Ramal", phone: "0195321789" },
    { id: 4, name: "Bamal", phone: "0195321789" },
];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Node Practice with React");
});

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const user = users.filter(u => u.name.toLowerCase().includes(search));
        res.send(user);
    }
    else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.filter(u => u.id === id)
    res.send(user);
});

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log("Listening on port", port);
})