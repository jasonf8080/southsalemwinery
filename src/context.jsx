import React, { createContext, useState, useContext, useEffect, useLayoutEffect } from 'react';

const MyContext = createContext();

const ContextProvider = ({ children }) => {

  const [showMenu, setShowMenu] = useState(false);

useLayoutEffect(() => {
  if (showMenu) {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
  } else {
    const scrollY = document.body.style.top;

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
}, [showMenu]);
  return (
    <MyContext.Provider value={{
       showMenu, setShowMenu
       }}>
      {children}
    </MyContext.Provider>
  );
};



// Create a custom hook for using the context
const useGlobalContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export { ContextProvider, useGlobalContext };


