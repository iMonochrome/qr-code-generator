import { Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;

export const HeaderStyled = styled(Header)`
  background: #fff;
  height: 100px;
  border: 1px solid rgba(60, 60, 60, 0.1);
  .header__logo {
    height: 65px;
    width: auto;
  }

  .header__button:hover {
    background-color: #3c3c3c;
    color: #fff;
  }

  .header__button:not(:last-child) {
    margin-right: 60px
  }
`;
