import styled from "styled-components";

export const InputColorPickerStyled = styled.div`
  margin-bottom: 30px;
  .icp__label {
    margin-bottom: 10px;
    display: block;
    .ant-radio-group {
      padding: 0 30px;
    }
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      /* Text Color / 50 */
      color: rgba(60, 60, 60, 0.5);
    }
  }

  .group_sublabel {
    margin-bottom: 10px;
  }

  .group_sublabel:nth-child(even) {
    width: 70%;
  }
  .icp__sublabel {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: rgba(60, 60, 60, 0.5);
    margin-bottom: 10px;
  }

  .icp__group {
    background: #ffffff;
    /* Text Color / 5 */
    transition: 0.3s ease;
    border: 1px solid rgba(60, 60, 60, 0.1);
    box-sizing: border-box;
    border-radius: 3px;
    width: 180px;
    height: 50px;
    position: relative;
    display: inline-block;
    margin-right: 25px;
    cursor: pointer;

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

    .icp__preview {
      position: absolute;
      width: 30px;
      height: 30px;
      border: 1px solid rgba(60, 60, 60, 0.25);
      border-radius: 3px;
      top: 10px;
      right: 10px;
    }

    &:hover {
      border-color: #0469ff70;
    }
  }
`;
