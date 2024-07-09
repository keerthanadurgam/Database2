import Loans from "../models/Loans"
// Create a new loan
const createLoan = async (
    Book_id: number,
    Member_id: number,
    loan_date: Date,
    due_date: Date
  ): Promise<Loans | null> => {
    try {
      const newLoan = await Loans.create({
        Book_id,
        Member_id,
        loan_date,
        due_date,
      });
      console.log('Loan created successfully');
      return newLoan;
    } catch (err) {
      console.error('Error creating loan:', err);
      return null;
    }
  };
  
  // Get a loan by ID
  const getLoanById = async (id: number): Promise<Loans | null> => {
    try {
      const loan = await Loans.findByPk(id);
      if (!loan) {
        throw new Error('Loan not found');
      }
      return loan;
    } catch (err) {
      console.error(`Error retrieving loan with ID ${id}:`, err);
      return null;
    }
  };
  
  // Get all loans
  const getAllLoans = async (): Promise<Loans[] | null> => {
    try {
      const loans = await Loans.findAll();
      return loans;
    } catch (err) {
      console.error('Error retrieving loans:', err);
      return null;
    }
  };
  
  // Update a loan by ID
  const updateLoan = async (id: number, newData: Partial<Loans>): Promise<Loans | null> => {
    try {
      const loan = await Loans.findByPk(id);
      if (!loan) {
        throw new Error('Loan not found');
      }
      await loan.update(newData);
      console.log(`Loan with ID ${id} updated successfully`);
      return loan;
    } catch (err) {
      console.error('Error updating loan:', err);
      return null;
    }
  };
  
  // Delete a loan by ID
  const deleteLoan = async (id: number): Promise<boolean> => {
    try {
      const loan = await Loans.findByPk(id);
      if (!loan) {
        throw new Error('Loan not found');
      }
      await loan.destroy();
      console.log(`Loan with ID ${id} deleted successfully`);
      return true;
    } catch (err) {
      console.error('Error deleting loan:', err);
      return false;
    }
  };
  
  // Example usage
  (async () => {
    // Create a new loan
    const newLoan = await createLoan(2, 2, new Date('2024-03-04'), new Date('2024-06-04'));
    console.log('Created Loan:', newLoan);
  
    // Get a loan by ID
    const loanById = await getLoanById(1);
    console.log('Loan by ID:', loanById);
  
    // Get all loans
    const allLoans = await getAllLoans();
    console.log('All Loans:', allLoans);
  
    // Update a loan
    const updatedLoan = await updateLoan(1, { due_date: new Date('2024-06-30') });
    console.log('Updated Loan:', updatedLoan);
  
    // Delete a loan
    const isDeleted = await deleteLoan(1);
    console.log('Loan Deleted:', isDeleted);
  })();
  
  export default Loans;