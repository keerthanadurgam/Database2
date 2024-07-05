import {Sequelize} from 'sequelize';
const sequelize = new Sequelize ("database24", "keerthana", "Keerthana1",{
    host: 'localhost',
    dialect:'postgres'
});

const test = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    };
    test();
    
    
    sequelize.sync()
    .then(() => {
      console.log('Database & tables synced!');
    })
    .catch(err => {
      console.error('Error syncing database:', err);
    });

    export default sequelize;
    


