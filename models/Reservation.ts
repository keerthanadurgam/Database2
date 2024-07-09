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
const InsertReservations = async()=>{
    try{
    const Reservationsdata= await Reservations.bulkCreate([
        {id: 1, Book_id: 2, Member_id:2,reservation_date: "2024-3-4" },
        {id:2,Book_id:1,Member_id:1, reservation_date:"2002-3-5"}
    ]);
    console.log("Reservations table created successfully");
    return Reservationsdata;
  } catch(err){
    console.error("error in inserting data in reservations");
    return null;
  };
}
  InsertReservations();

Books.hasMany(Reservations,{as:'Reservations', foreignKey:'Book_id'}) ;
Reservations.belongsTo(Books,{foreignKey:'Book_id'});         

Members.hasMany(Reservations,{as:'Reservations', foreignKey:'Member_id'});
Reservations.belongsTo(Members,{ foreignKey:'Member_id'});

export default Reservations;