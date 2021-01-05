import { Layout } from "antd";
import styled from "styled-components";
import homebg from '../../assets/images/backgrounds/homebg.svg'

export const HomeStyled = styled(Layout)`
  #home__introduce {
    background-color: #fff;
    height: calc(100vh - 100px);
    background-image: url(${homebg});
    background-position: bottom center;
    background-repeat: no-repeat;
  }
`;
