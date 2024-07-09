import {DataTypes } from 'sequelize';
import sequelize from "../main";
const Members=sequelize.define(
    'Members',
    {
     id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
        },
        name:{
            type:DataTypes.STRING(255),
            allowNull: false
        },
        adress:{
            type:DataTypes.STRING(255),
        },
        phone_number:{
            type:DataTypes.STRING(20),
        },
        email:{
            type:DataTypes.STRING(255),
            unique: true
        },

    }
);
const InsertMembers = async()=>{
    try{ 
      const Membersdata = await Members.bulkCreate([
        {id: 1, name:'Keerthana',adress:'Karimnagar', phone_number: '9876543210', email:'hello@gmail.com'},
        {id: 2, name:'Shailaja',adress:'Sangareddy', phone_number:'9123912391', email:'shailaja@gmail.com' }
      ]);
      console.log("Members table created successfully");
      return Membersdata;
    }catch(err){
      console.error("error in inserting data into members")
      return null;
    };
  }
    InsertMembers();

export default Members;