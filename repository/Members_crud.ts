import Members from "../models/Members";
const createMember = async (name, address, phone_number, email) => {
    try {
      const newMember = await Members.create({
        name,
        address,
        phone_number,
        email
      });
  
      console.log('Member created successfully');
      return newMember;
    } catch (err) {
      console.error('Error creating member:', err);
      return null;
    }
  };

  createMember('John Doe', '123 Main St', '123-456-7890', 'john.doe@example.com');

  const getAllMembers = async () => {
    try {
      const members = await Members.findAll();
      return members;
    } catch (err) {
      console.error('Error retrieving members:', err);
      return null;
    }
  };
  
  getAllMembers().then(members => console.log(members));

  const getMemberById = async (id) => {
    try {
      const member = await Members.findByPk(id);
      return member;
    } catch (err) {
      console.error(`Error retrieving member with ID ${id}:`, err);
      return null;
    }
  };
  getMemberById(1).then(member => console.log(member));

  const updateMember = async (id, newData) => {
    try {
      const member = await Members.findByPk(id);
      if (!member) {
        throw new Error('Member not found');
      }
  
    
      await member.update(newData);
  
      console.log(`Member with ID ${id} updated successfully`);
      return member;
    } catch (err) {
      console.error('Error updating member:', err);
      return null;
    }
  };
  
  updateMember(1, { address: '456 Elm St', phone_number: '987-654-3210' });

  const deleteMember = async (id) => {
    try {
      const member = await Members.findByPk(id);
      if (!member) {
        throw new Error('Member not found');
      }

      await member.destroy();
  
      console.log(`Member with ID ${id} deleted successfully`);
      return true;
    } catch (err) {
      console.error('Error deleting member:', err);
      return false;
    }
  };
  deleteMember(1);