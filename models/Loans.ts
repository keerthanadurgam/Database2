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
export default Loans;
Books.hasMany(Loans,{ as: 'Loans', foreignKey: 'Book_id'});
Loans.belongsTo(Books, {foreignKey: 'Book_id'});

Members.hasOne(Loans, { as: 'Loans', foreignKey:'Member_id'});
Loans.belongsTo(Members,{foreignKey: 'Member_id'});