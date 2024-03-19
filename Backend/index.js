// Import required modules
const express = require('express');
const cors = require('cors');


// Create an Express application
const app = express();

app.use(cors());
// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/api/jokes',(req,res) => {
    const jokes = [
        {id:1, joke : 'joke 1'},
        {id:2, joke : 'joke 2'},
        {id:3, joke : 'joke 3'},
        {id:4, joke : 'joke 4'},
        {id:5, joke : 'joke 5'},
    ]
    res.status(200).json({
      jokes : jokes,
    })
})

// Set up the server to listen on a specific port
const port =  process.env.PORT ||3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
