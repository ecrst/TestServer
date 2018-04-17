const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const user = {
  userName: '1',
  firstName: 'Stepan',
  lastName: '',
  email: 'stepa@mail.ru',  
  password: ''
}
let newUser = {};

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/signin', (req, res) => {
  setTimeout(() => {
    console.log(req.body);

    if(req.body.login === '1' && req.body.password === '1') {
      res.send({
        success: true,
        description: user
      })
    } else if (
      req.body.login === newUser.username && req.body.password === newUser.password ) {
        res.send({
          success: true,
          description: newUser
        })
    } else {
      res.send({
        success: false,
        description: 'Wrong credentials'
      })
    }
    
  }, 1800);
})



app.post('/signup', (req, res) => {
  const description = {};
  setTimeout(() => {
    console.log(req.body);

    if (req.body.username === '1') {
      description.error = true;
      description.username = 'This username is already taken. Choose another'
    }
    if (req.body.email === 'stepa@mail.ru') {
      description.error = true;
      description.email = 'Email already in use.'
    }
    if (description.error) {
      res.send({
        success: false,
        description
      })
    } else {
      newUser = Object.assign({}, req.body);
      res.send({
        success: true,
        description: newUser
      })
    }
  }, 1800);
})

app.get('/signout', (req, res) => {
  setTimeout(() => {
    res.send({
      success: true
    })
  }, 999);
})

app.post('/logout', (req, res) => {
  setTimeout(() => {
    res.send({ok: 'success'})
  }, 1333);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
