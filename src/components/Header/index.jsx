import React from "react";
import { Layout, Button } from "antd";
import { HeaderStyled } from "./styled";
import logo from "../../assets/images/logo/logo.svg";

const { Content } = Layout;

function Header(props) {
  return (
    <HeaderStyled className="flex__between__center">
      <Content>
        <img className="header__logo" src={logo} />
      </Content>
      <Content className="flex__end__center">
        <Button
          className="header__button"
          type="link"
          shape="round"
          size="large"
        >
          QR STUDIO PRO
        </Button>
        <Button
          className="header__button"
          type="text"
          shape="round"
          size="large"
        >
          LOGIN
        </Button>
        <Button
          className="header__button"
          type="text"
          shape="round"
          size="large"
        >
          SIGN UP
        </Button>
      </Content>
    </HeaderStyled>
  );
}

export default Header;
