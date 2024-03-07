const express = require('express');
const app = express();

app.use(express.static('.'));
app.use('/index', express.static('./index'));

app.listen(3000, () => {
  console.log('http://localhost:3000/index/index.html');
});