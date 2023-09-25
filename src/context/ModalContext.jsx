import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const value = { isActive, setIsActive };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

ModalContextProvider.propTypes = {
  children: PropTypes.node,
};
