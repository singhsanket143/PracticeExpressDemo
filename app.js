const express = require('express');
var bodyParser = require('body-parser')
const apiRouter = require('./routes/api/v1/index');
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/v1', apiRouter);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});