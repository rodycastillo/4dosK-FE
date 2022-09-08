import React from "react";

const FormInitialValues = {
  nombres: "",
  apellidos: "",
  email: "",
  mayor_edad: 1,
  uso_informacion: 0,
  terminos_politicas: 0,
  foto: "",
  comentario: "",
};

export const FormContext = React.createContext({});

export const FormProvider = ({ children }) => {
  const [form, setForm] = React.useState(FormInitialValues);
  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
};
