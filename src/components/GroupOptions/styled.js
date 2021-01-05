import styled from "styled-components";

export const GroupOptionsStyled = styled.div`
margin-bottom: 30px;
  .go__label {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    /* Text Color / 50 */
    color: rgba(60, 60, 60, 0.5);
    margin-bottom: 10px;
    display: block;
    span {
      font-weight: bold;
    }
  }

  .go__radio-group {
    width: 100%;
    padding: 0;
    .go__items {
      background: #ffffff;
      border: 2px solid rgba(60, 60, 60, 0.1);
      box-sizing: border-box;
      border-radius: 5px;
      width: 100px;
      height: 100px;
      transition: all 0.25s ease;
      margin-bottom: 12px;
      &:hover,
      &:active {
        border: 2px solid #0469ff;
      }
    }
    .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child{
      border: 2px solid #0469ff !important;
    }
    .ant-space {
      flex-wrap: wrap;
    }
  }
`;
