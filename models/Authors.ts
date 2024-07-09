import {DataTypes } from 'sequelize';
import sequelize from "../main";
const Authors = sequelize.define('Authors',
{
    id:{
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type : DataTypes.STRING(255),
        allowNull: false,
    },
    birthyear:{
        type : DataTypes.INTEGER,
    },
    nationality:{
        type:DataTypes.STRING(100),
    },
}
);
const InsertAuthors = async()=>{
  try{
    const Authorsdata = await Authors.bulkCreate([
      {name: 'Ravindhranath',birth_year: 1861, Nationality: 'India'},
      {name: 'Kabirdas',birth_year:1398,Nationality: 'India' }
    ]);
    console.log("Authors table created successfully");
    return Authorsdata;
  }catch(err){
    console.error("error in inserting data")
    return null;
  };
}
  InsertAuthors();
export default Authors;