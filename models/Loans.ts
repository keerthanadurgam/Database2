import {DataTypes } from 'sequelize';
import sequelize from "../main";
const Loans= sequelize.define(
    'Loans',
{id:{
    type:DataTypes.INTEGER,
},
Book_id:{
    type:DataTypes.INTEGER,
    references: {
        model: 'Books',          
        key: 'id'            
   },
},
member_id:{
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