import React, { useState } from 'react'
export const StoreContext = React.createContext(null)

export default ({ children }) => {
  const [qrType, setQrType] = useState('url');
  const [qrBackground, setQrBackground] = useState();
  const [loading, setLoading] = useState(false);
  const [qrValue, setQrValue] = useState("Hello, World!");
  const [qrOtherColor, setQrOtherColor] = useState('#000000');
  const [qrDotType, setqrDotType] = useState("rect");
  const [qrFill, setQrFill] = useState('#FFFFFF');

  const stores = {
    qrType: qrType,
    setQrType: setQrType,
    qrBackground: qrBackground,
    setQrBackground: setQrBackground,
    loading: loading,
    setLoading: setLoading,
    qrValue: qrValue,
    setQrValue: setQrValue,
    qrOtherColor: qrOtherColor,
    setQrOtherColor: setQrOtherColor,
    qrDotType: qrDotType,
    setqrDotType: setqrDotType,
    qrFill: qrFill,
    setQrFill: setQrFill
  }

  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  )
}
