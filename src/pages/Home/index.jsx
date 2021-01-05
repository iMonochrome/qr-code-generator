import React from "react";
import { Layout } from "antd";
import { HomeStyled } from "./styled";

import Header from "../../components/Header";
import HomeIntroduce from "./components/HomeIntroduce";

const { Content } = Layout;

function HomePage(props) {
  return (
    <HomeStyled>
      {/* Header */}
      <Header></Header>

      <Content>
        <HomeIntroduce />
      </Content>
    </HomeStyled>
  );
}

export default HomePage;
