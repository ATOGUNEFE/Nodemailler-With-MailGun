const express = require('express');
const path = require('path')


const app = express();

const PORT  = 8000;
// data parsing
//chunk 2
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());

app.post('/email', (req , res) => {
  //todo
  //send mail here
  console.log('Data:' , req.body)
  res.json({message:'message received'})
});


 app.get('/', (req, res) =>  {
   res.sendFile(path.join(__dirname, 'view','index.html'))
 })
 app.listen(PORT, () => {
   console.log('server runing')
 })