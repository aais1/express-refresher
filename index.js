const express=require('express');
const cors=require('cors');
const logger=require('./middlewares/logger');
const router=require('./routes/router');
const app = express();

app.use(cors());

app.use('/router',router)

app.get('/', logger, (req, res) => {
    console.log('route controller called');
    res.json({ message: "route in index.js controller called" });
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})