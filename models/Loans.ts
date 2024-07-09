import {DataTypes } from 'sequelize';
import sequelize from "../main";
import Books from "./Books";
import Members from "./Members";
const Loans= sequelize.define(
    'Loans',
{id:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
Book_id:{
    type:DataTypes.INTEGER,
    references: {
        model: 'Books',          
        key: 'id'            
   },
},
Member_id:{
    type:DataTypes.INTEGER,
    references:{
        model: 'Members',
        key: 'id'
    },
},
loan_date:{
    type:DataTypes.DATE,
    allowNull: false,
},
due_date:{
    type:DataTypes.DATE,
    allowNull: false,
},
    }
);
Books.hasMany(Loans,{ as: 'Loans', foreignKey: 'Book_id'});
Loans.belongsTo(Books, {foreignKey: 'Book_id'});

Members.hasOne(Loans, { as: 'Loans', foreignKey:'Member_id'});
Loans.belongsTo(Members,{foreignKey: 'Member_id'}); 

    const Insertloans = async()=>{
    try{
    const loansdata= await Loans.bulkCreate([
        {id: 4545, Book_id: 2, Member_id:2,loan_date: "2024-3-4", due_date:"2024-6-4" },
        {id:5666,Book_id:1,Member_id:1, loan_date:"2002-3-5",due_date: "2003-8-5"}
    ]);
    console.log("Loans table created successfully");
    return loansdata;
  } catch(err){
    console.error("error in inserting data in loans");
    return null;
  };
}
  Insertloans();

export default Loans;

