console.log('May node be with you')
const express = require('express');
const app = express();
const bodyParser= require('body-parser');


// Make sure you place body-parser before your CRUD handlers!




  

  
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://eddymo:<bangarang3738!>@cluster0.rwuje07.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("star-wars-quotes").collection("devices");
  // perform actions on the collection object
  app.use(bodyParser.urlencoded({ extended: true }))
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    console.log(__dirname)
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  })
  app.post('/quotes', (req, res) => {
    console.log(req.body)
  })
  app.listen(3000, function() {
    console.log('listening on 3000')
  })
  
  client.close();
});


