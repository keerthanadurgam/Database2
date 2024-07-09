import Reservations from "../models/Reservation"
const createReservation = async (
    Book_id: number,
    Member_id: number,
    reservation_date: Date
  ): Promise<Reservations | null> => {
    try {
      const newReservation = await Reservations.create({
        Book_id,
        Member_id,
        reservation_date,
      });
      console.log('Reservation created successfully');
      return newReservation;
    } catch (err) {
      console.error('Error creating reservation:', err);
      return null;
    }
  };
  
  // Get a reservation by ID
  const getReservationById = async (id: number): Promise<Reservations | null> => {
    try {
      const reservation = await Reservations.findByPk(id);
      if (!reservation) {
        throw new Error('Reservation not found');
      }
      return reservation;
    } catch (err) {
      console.error(`Error retrieving reservation with ID ${id}:`, err);
      return null;
    }
  };
  
  // Get all reservations
  const getAllReservations = async (): Promise<Reservations[] | null> => {
    try {
      const reservations = await Reservations.findAll();
      return reservations;
    } catch (err) {
      console.error('Error retrieving reservations:', err);
      return null;
    }
  };
  
  // Update a reservation by ID
  const updateReservation = async (
    id: number,
    newData: Partial<Reservations>
  ): Promise<Reservations | null> => {
    try {
      const reservation = await Reservations.findByPk(id);
      if (!reservation) {
        throw new Error('Reservation not found');
      }
      await reservation.update(newData);
      console.log(`Reservation with ID ${id} updated successfully`);
      return reservation;
    } catch (err) {
      console.error('Error updating reservation:', err);
      return null;
    }
  };
  
  // Delete a reservation by ID
  const deleteReservation = async (id: number): Promise<boolean> => {
    try {
      const reservation = await Reservations.findByPk(id);
      if (!reservation) {
        throw new Error('Reservation not found');
      }
      await reservation.destroy();
      console.log(`Reservation with ID ${id} deleted successfully`);
      return true;
    } catch (err) {
      console.error('Error deleting reservation:', err);
      return false;
    }
  };
  
  // Example usage
  (async () => {
    // Create a new reservation
    const newReservation = await createReservation(2, 2, new Date('2024-03-04'));
    console.log('Created Reservation:', newReservation);
  
    // Get a reservation by ID
    const reservationById = await getReservationById(1);
    console.log('Reservation by ID:', reservationById);
  
    // Get all reservations
    const allReservations = await getAllReservations();
    console.log('All Reservations:', allReservations);
  
    // Update a reservation
    const updatedReservation = await updateReservation(1, { reservation_date: new Date('2024-06-30') });
    console.log('Updated Reservation:', updatedReservation);
  
    // Delete a reservation
    const isDeleted = await deleteReservation(1);
    console.log('Reservation Deleted:', isDeleted);
  })();
  
  export default Reservations;