import { createContext, useState, useContext } from "react";

const BgImageContext = createContext();

export const BgImageProvider = ({ children }) => {
  const [bgImage, setBgImage] = useState(null);

  return (
    <BgImageContext.Provider value={{ bgImage, setBgImage }}>
      {children}
    </BgImageContext.Provider>
  );
};

export const useBgImage = () => useContext(BgImageContext);
