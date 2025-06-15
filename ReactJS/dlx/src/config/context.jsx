import { createContext, useContext ,useState} from "react";

export const FormValues=createContext({})
export const EditValues=createContext({})

export const EditValuesProvider = ({ children }) => {
  const [editObject, setEditObject] = useState({});

  return (
    <EditValues.Provider value={{ editObject, setEditObject }}>
      {children}
    </EditValues.Provider>
  );
};

