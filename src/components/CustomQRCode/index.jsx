import { Col, Radio } from "antd";
import React from "react";
import { CustomQRCodeStyled } from "./styled";
import { Tabs } from "antd";
import StoreProvider from "./utils/stores";
import RadioQRType from "./components/RadioQRType";
import QRContent from "./components/QRContent";
import QRPreview from "./components/QRPreview";
const { TabPane } = Tabs;

function CustomQRCode(props) {
  return (
    <StoreProvider>
      <CustomQRCodeStyled className="flex__between__stretch">
        <RadioQRType />
        <QRContent />
        <QRPreview />
      </CustomQRCodeStyled>
    </StoreProvider>
  );
}

export default CustomQRCode;
