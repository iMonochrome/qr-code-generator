import React, { useState, useEffect } from "react";
import { Row, Col, Button, Slider, Typography } from "antd";
import { EyeFilled, DownloadOutlined } from "@ant-design/icons";
import { QRNormal } from "react-qrbtf";
import { StoreContext } from "../utils/stores";
import Loading from "../../Loading";
var QRCode = require('qrcode.react');

const { Text } = Typography;

function QRPreview(props) {
  const [size, setSize] = useState(500);
  const {
    qrBackground,
    loading,
    qrValue,
    qrOtherColor,
    qrDotType,
    qrFill,
  } = React.useContext(StoreContext);

  const [type, setType] = useState("rect");

  useEffect(() => {
    switch (qrDotType) {
      case "qr__rotate":
        {
          setType("rect");
          const qr = document
            .getElementsByClassName("my-qrcode")[0]
            .getElementsByTagName("rect");
          for (let i = 0; i < qr.length; i++) {
            if (qr[i].getAttribute("opacity")) {
              qr[i].classList.remove();
              qr[i].classList.add("qr__rotate");
            }else {
              console.log(qr[i], i);
            }
          }
        }
        break;
      case "qr__dots-small":
        {
          setType("round");
          const qr = document
            .getElementsByClassName("my-qrcode")[0]
            .getElementsByTagName("circle");
          for (let i = 0; i < qr.length; i++) {
            if (qr[i].getAttribute("opacity")) {
              qr[i].classList.remove();
              qr[i].classList.add("qr__dots-small");
            }else {
              console.log(qr[i]);
            }
          }
        }
        break;
      case "qr__dots":
        {
          setType("round");
          const qr = document
            .getElementsByClassName("my-qrcode")[0]
            .getElementsByTagName("circle");
          for (let i = 0; i < qr.length; i++) {
            if (qr[i].getAttribute("opacity")) {
              qr[i].classList.remove("qr__dots-small");
            } else {
              console.log(qr[i]);
            }
          }
        }
        break;
    }
  }, [qrDotType, type]);

  // useEffect(() => {
  //   const qr = document
  //     .getElementsByClassName("my-qrcode")[0]
  //     .getElementsByTagName("circle");
  //   for (let i = 0; i < qr.length; i++) {
  //     if (!qr[i].getAttribute("opacity")) {
  //       console.log(qr[i]);
  //     }
  //   }
  // }, []);

  return (
    <Col className="cqrc__preview" span={6}>
      <div className="flex__between__center cqrc__preview__head">
        <Button size="large" type="text">
          {"</>"}
        </Button>
        <Button size="large" type="text" icon={<EyeFilled />}>
          Preview
        </Button>
      </div>
      <div className="flex__center__start cqrc__preview__canvas">
        <div
          style={{
            backgroundImage: `url(${qrBackground})`,
          }}
          className="preview-container flex__center__start"
        >
          <QRCode
            otherColor={qrOtherColor}
            value={qrValue}
            className="my-qrcode"
            id="my-qrcode"
            type={type}
            level="M"
            size={210}
            // posColor={"red"}
            // posType="round"  
            renderAs={"svg"}

            styles={{
              svg: {
                background: qrFill,
              },
            }}
          />
        </div>
        {loading && <Loading />}
      </div>
      <div className="cqrc__preview__footer">
        <Slider
          className="cqrc__preview__footer__slider"
          value={typeof size === "number" ? size : 500}
          onChange={(val) => setSize(val)}
          step={50}
          max={1000}
          defaultValue={500}
          min={50}
        />
        <div className="flex__between__center cqrc__preview__footer__subslider">
          <Text type="secondary">Low</Text>
          <Text className="slider__value">
            {size} x {size} px
          </Text>
          <Text type="secondary">High</Text>
        </div>
        <Row gutter={[8, 8]} className="cqrc__preview__footer__download">
          <Col span={24}>
            <Button type="primary" size="large" icon={<DownloadOutlined />}>
              DOWNLOAD PNG
            </Button>
          </Col>
          <Col span={6}>
            <Button size="large">.JPG</Button>
          </Col>
          <Col span={6}>
            <Button size="large">.SVG</Button>
          </Col>
          <Col span={6}>
            <Button size="large">.ESP</Button>
          </Col>
          <Col span={6}>
            <Button size="large" disabled>
              .GIF
            </Button>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default QRPreview;
