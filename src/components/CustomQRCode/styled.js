import { Row } from "antd";
import styled from "styled-components";

export const CustomQRCodeStyled = styled(Row)`
  background: #fff;
  height: 730px;
  width: 1295px;
  border-radius: 15px;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  .ant-radio-group {
    flex-direction: column;
    height: 100%;
    padding: 30px;
    .ant-radio-button-wrapper {
      border: 0;
      border-radius: 10px;
      font-size: 16px;
      height: 40px;
      .anticon {
        margin-right: 7px;
      }
      &:hover,
      &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
        background: rgba(4, 105, 255, 0.1);
      }
      &::before {
        display: none;
      }
    }
  }

  /* Content */
  .cqrc__contents {
    border: 1px solid rgba(60, 60, 60, 0.09);
    border-width: 0px 1px 0px 1px;
    position: relative;

    &__tabs {
      .ant-tabs-tab {
        font-size: 18px;
        .ant-tabs-tab-btn {
          font-weight: 700;
        }
      }
      .ant-tabs-nav {
        margin-bottom: 0px;
      }
      &__content {
        padding: 30px;
      }
      .ant-tabs-content {
        height: 100%;
      }
      .ant-tabs-nav-list {
        margin-left: 30px;
      }
    }

    &__design-tabs {
      .ant-tabs-ink-bar {
        display: none;
      }
      .ant-tabs-tab {
        font-size: 14px;
      }
      .ant-tabs-content {
        padding: 15px 30px;
        overflow: scroll;
        max-height: 635px;
        /* width */
        ::-webkit-scrollbar {
          width: 3px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
          background: transparent;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #3c3c3c50;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      }

      &__color {
        .color__helper {
          position: absolute;
          right: 30px;
          bottom: 30px;
        }
      }
      &__logo {
        .btn__upload {
          border: 0;
          span {
            font-weight: bold;
            color: #0469ff;
          }
          .anticon {
            font-size: 20px;
          }
          &:hover,
          &:focus {
            border: 0;
            outline: none;
            box-shadow: 0;
          }
        }
      }
    }

    &__input {
      font-size: 32px;
      border: 0;
      color: #0469ff90;
      font-weight: 700;
      ::placeholder {
        font-weight: 700;
        transition: 0.25s ease;
      }

      &:focus,
      &:hover {
        border: 0;
        outline: none;
        box-shadow: 0;
        ::placeholder {
          color: #0469ff50;
        }
      }
    }

    &__subinput {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      color: rgba(60, 60, 60, 0.25);
      padding-left: 12px;
    }

    &__upload {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-top: 1px solid rgba(60, 60, 60, 0.09);
      height: 80px;
      padding: 30px;
      &__button {
        border: 0;
        font-size: 18px;

        color: rgba(60, 60, 60, 0.5);
      }

      .anticon {
        font-size: 24px;
        margin-right: 7px;
        font-weight: bold;
        color: #0469ff;
      }

      b {
        font-weight: bold;
        color: #0469ff;
        margin-right: 5px;
      }
    }
    &__preview {
      position: absolute;
      right: -25px;
      top: 210px;
      height: 50px;
      width: 50px;
      z-index: 2;
      /* Text Color / 25 */
      .anticon {
        font-size: 22px;
        height: 22px;
      }
    }
  }

  /* Preview */
  .cqrc__preview {
    position: relative;
    &__head {
      padding: 30px;

      button {
        background: rgba(60, 60, 60, 0.05);
        * {
          font-weight: 700;
        }

        &:hover {
          color: #05b641;
        }
      }
    }

    &__canvas {
      position: relative;
      .preview-container {
        height: 370px;
        width: 260px;
        position: relative;
        background-repeat: no-repeat;
        background-size: 100%;
        svg {
          height: 280px;
          width: 280px;
          top: -6px;
          position: absolute;
        }
      }
    }

    &__footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px;
      .ant-slider-track {
        display: none;
      }
      &__subslider {
        padding: 0px 10px;
        font-size: 16px;
        .slider__value {
          font-weight: bold;
        }
      }
      &__download {
        padding-top: 40px;
        button {
          width: 100%;
          height: 50px;
          span {
            font-weight: 700;
          }
          .anticon {
            font-size: 20px;
          }
        }
      }
    }
  }
`;
