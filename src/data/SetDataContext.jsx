import axios from "axios";
import { createContext, useContext } from "react";
import DataContext from "./DataContext";

const SetDataContext = createContext();

export const SetDataProvider = ({ children }) => {
  const {
    profile,
    reservations,
    updateProfileContext,
    updateReservationContext,
  } = useContext(DataContext);

  const userId = 1;

  const HandleUpdateProfile = async (
    updatedProfile,
    callback = updateProfileContext
  ) => {
    try {
      await axios.put(
        `https://little-lemon-restaurant-database.onrender.com/login-profiles/${userId}`,
        updatedProfile
      );
      callback();
    } catch (error) {
      console.error(error);
    }
  };

  const HandleUpdateReservations = async (updatedReservation) => {
    try {
      await axios.put(
        `https://little-lemon-restaurant-database.onrender.com/reservations`,
        updatedReservation
      );
      updateReservationContext();
    } catch (error) {
      console.error(error);
    }
  };

  const HandleRemoveItemFormCartOrOrder = (idForItem, Option) => {
    const profileIndex = profile.findIndex((prof) => prof.id === userId);
    const current = { ...profile[profileIndex] };
    const filtered =
      current[Option]?.filter((item) => item.id !== idForItem) || [];
    const updated = { ...current, [Option]: filtered };

    HandleUpdateProfile(updated);
  };

  const ReturnedProfile = profile.find((prof) => prof.id === userId);

  const HandleRemoveEmptyDateFormReservations = () => {
    if (reservations.bookings) {
      const filtered = reservations.bookings.filter(
        (entry) => entry.timeSlots.length !== 0
      );
      HandleUpdateReservations({ ...reservations, bookings: filtered });
    }
  };

  return (
    <SetDataContext.Provider
      value={{
        HandleUpdateProfile,
        HandleUpdateReservations,
        HandleRemoveEmptyDateFormReservations,
        HandleRemoveItemFormCartOrOrder,
        ReturnedProfile,
      }}
    >
      {children}
    </SetDataContext.Provider>
  );
};

export default SetDataContext;
