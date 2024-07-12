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
}},
//indexes
{
  modelName: 'Books',
  tableName: 'Books',
  indexes: [
    {
        name: 'idx_title',
        fields: ['title'],
        unique : true
    },
]
});
const InsertBooks = async()=>{
    try{
      const Booksdata = await Books.bulkCreate([
        {title: "gitanjali", authorId: 1, genre: 'poetry', isbn: '97806839349',publication_year:10 },
         {title:"kabir grantha valli", authorId:2, genre:'religion', isbn: ' 9789326354240', publication_year:28}
      ]);
      console.log("Books table created successfully");
      return Booksdata;
    }catch(err){
      console.error("error in inserting data into Books")
      return null;
    };
  }
    InsertBooks();
         
Authors.hasMany(Books, { as: 'Books', foreignKey: 'authorId' });
Books.belongsTo(Authors, { foreignKey: 'authorId' });
export default Books;
      