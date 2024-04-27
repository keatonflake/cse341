
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes/index'));

app.listen(process.env.PORT || port, () => {
  console.log(`Web Server is listening at port ${port}`);
});