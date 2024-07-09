import Authors from "../models/Authors";

async function insertAuthors(): Promise<void> {
    try {
      const authorsData = await Authors.bulkCreate([
        { name: 'Ravindhranath', birthyear: 1861, nationality: 'India' },
        { name: 'Kabirdas', birthyear: 1398, nationality: 'India' },
      ]);
      console.log('Authors inserted successfully:', authorsData.map(author => author.toJSON()));
    } catch (err) {
      console.error('Error inserting authors:', err);
    }
  }
  async function getAuthors(): Promise<void> {
    try {
      const authors = await Authors.findAll();
      console.log('All authors:', authors.map(author => author.toJSON()));
    } catch (err) {
      console.error('Error retrieving authors:', err);
    }
  }
  
  async function updateAuthor(id: number, newData: any): Promise<void> {
    try {
      const author = await Authors.findByPk(id);
      if (author) {
        await author.update(newData);
        console.log('Author updated successfully.');
      } else {
        console.log('Author not found.');
      }
    } catch (err) {
      console.error('Error updating author:', err);
    }
  }
  
  async function deleteAuthor(id: number): Promise<void> {
    try {
      const deletedCount = await Authors.destroy({ where: { id } });
      if (deletedCount === 1) {
        console.log('Author deleted successfully.');
      } else {
        console.log('Author not found or not deleted.');
      }
    } catch (err) {
      console.error('Error deleting author:', err);
    }
  }
  
  // Example usage
  insertAuthors();
  getAuthors();
  updateAuthor(1, { name: 'tagore' });
  deleteAuthor(1);
