import {DataTypes } from 'sequelize';
import sequelize from "../main";
import Books from "./Books";
import Members from "./Members";
const Reservations = sequelize.define(
    'Reservations',
    {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        },
        Book_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'Books',
                key: 'id'
            }
        },
        Member_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'Members',
                key:'id'
            }
        },
        reservation_date:{
            type: DataTypes.DATE,
            allowNull: false,
        }
    }
);

export default Reservations;

Books.hasMany(Reservations,{as:'Reservations', foreignKey:'Book_id'}) ;
Reservations.belongsTo(Books,{foreignKey:'Book_id'});         

Members.hasMany(Reservations,{as:'Reservations', foreignKey:'Member_id'});
Reservations.belongsTo(Members,{ foreignKey:'Member_id'});
