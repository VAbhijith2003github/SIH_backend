const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    if (email) {
      res.json({ message: `email ==> ${email} and password is ==> ${password}` });
      console.log(`email ==> ${email} and password is ==> ${password}`);    // for local host testing only
    } else {
      res.json({ message: "no email entered" });
      console.log("no email entered");                // for local host testing only
    }
  } catch (err) {
    // res.status(500).json({ message: "Internal server error" });
    console.log(err);
  }
});