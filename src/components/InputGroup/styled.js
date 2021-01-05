import styled from "styled-components";

export const InputGroupStyled = styled.div`
  margin-bottom: 30px;
  .icp__label {
    margin-bottom: 10px;
    display: block;
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      /* Text Color / 50 */
      color: rgba(60, 60, 60, 0.5);
    }
  }

  .icp__group {
    background: #ffffff;
    /* Text Color / 5 */
    transition: 0.3s ease;
    border: 1px solid rgba(60, 60, 60, 0.05);
    box-sizing: border-box;
    border-radius: 3px;
    width: 180px;
    height: 50px;
    position: relative;
    cursor: pointer;

    &:hover {
      border-color: #000;
    }
    .icp__input {
      border: 0;
      height: 100%;
      &:hover,
      &:focus {
        border: 0;
        box-shadow: none;
        outline: 0;
      }
    }
  }
`;
