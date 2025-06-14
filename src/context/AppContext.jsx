import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {


  const currency = '₹'

  const calculateAge = (dob) => {
    const today = new Date()
    const birthday = new Date(dob)

    let age = today.getFullYear() - birthday.getFullYear()
    return age
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep", "Oct", "Nov", "Dec"]


  const slotDateFormet = (slotDate) => {

    const dateArray = slotDate.split('_');
    const monthIndex = Number(dateArray[1]);


    return `${dateArray[0]} ${months[monthIndex]} ${dateArray[2]}`;
  };

  const value = {
    calculateAge, slotDateFormet,currency
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
