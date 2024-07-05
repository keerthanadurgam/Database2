import {DataTypes} from 'sequelize';
import sequelize from "../main";
import Authors from "./Authors";
const Books = sequelize.define('Books',
{ id:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
title:{
    type:DataTypes.STRING(255),
    allowNull: false,
},
authorId: {
    type: DataTypes.INTEGER,
    references: {
         model: 'Authors',          
         key: 'id'             
    },
},
genre: {
    type: DataTypes.STRING(100),
},
isbn: {
    type: DataTypes.STRING(13),
    unique: true,
},
publication_year: {
    type: DataTypes.INTEGER,
}
});

export default Books;

Authors.hasMany(Books, { as: 'Books', foreignKey: 'authorId' });
Books.belongsTo(Authors, { foreignKey: 'authorId' });

