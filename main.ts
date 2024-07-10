import {Sequelize} from 'sequelize';
import Books from "./models/Books"
import Authors from './models/Authors';
import Members from "./models/Members"
const express=require('express');
const router = express.Router();
const app=express();


const sequelize = new Sequelize ("database24", "keerthana", "Keerthana1",{
    host: 'localhost',
    dialect:'postgres'
});

const test = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
      } catch (error) {
        console.error('Unable to connect to the database', error);
      }
    };
    test();
    const synctables = async()=>{
      try {
          await sequelize.sync({force:true});
          console.log('Tables sync done successfully.');
        } catch (error) {
          console.error('error in sync tables:', error);
        }
      };
      synctables();
    async function synctables1() {
      
    await Authors.sync({ force: true });
    console.log('Author model is created');
  

    await Books.sync({ force: true });
    console.log('Book model is created');
  


    await Members.sync({ force: true });
    console.log('Member model is created');
  }
    synctables1();

    export default sequelize;
const authorRoutes=require('./Routes/author.routes');
const bodyParser = require('body-parser');
const bookRoutes=require('./Routes/Books.routes')
const memberRoutes=require('./Routes/Members.routes')
const loanRoutes=require('./Routes/Loans.routes');
const reservationRoutes=require('./Routes/Reservations.routes')


    
    app.use('/api/ping', ((req, res) => {  
      res.json({ message: 'pong' });
  }));
  app.use(bodyParser.json());
  app.use('/api/authors',authorRoutes);
  app.use('/api/books',bookRoutes);
  app.use('/api/members',memberRoutes);
  app.use('/api/loans',loanRoutes);
  app.use('/api/reservations',reservationRoutes)
  app.listen(3000,()=>console.log('Server is running the port no 3000'));
  
