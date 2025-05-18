import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const getData = async (type, setType) => {
  try {
    const response = await axios.get(
      `https://little-lemon-restaurant-database.onrender.com/${type}`
    );
    setType(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const DataProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [profile, setProfile] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getData("menu", setMenu);
    getData("testimonials", setTestimonials);
    getData("login-profiles", setProfile);
    getData("reservations", setReservations);
  }, []);

  const updateProfileContext = () => getData("login-profiles", setProfile);
  const updateReservationContext = () =>
    getData("reservations", setReservations);

  return (
    <DataContext.Provider
      value={{
        menu,
        testimonials,
        profile,
        reservations,
        updateProfileContext,
        updateReservationContext,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
