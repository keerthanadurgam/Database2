import {Sequelize} from 'sequelize';
import Authors from './models/Authors';

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

    export default sequelize;

    

  
