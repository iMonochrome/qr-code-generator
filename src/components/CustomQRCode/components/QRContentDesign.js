import React, { useState, Fragment } from "react";
import { Space, Tabs, Radio, Popover, Alert, Button } from "antd";
import InputColorPicker from "../../InputColorPicker";
import GroupOptions from "../../GroupOptions";
import InputGroup from "../../InputGroup";
import { framestyle } from "../../../configs/framestyle";
import { bodyshape } from "../../../configs/bodyshape";
import { eyeframeshape } from "../../../configs/eyeframeshape";
import { eyeballshape } from "../../../configs/eyeballshape";
import { logos } from "../../../configs/logos";
import { InfoOutlined, UploadOutlined } from "@ant-design/icons";
import { StoreContext } from "../utils/stores";

const { TabPane } = Tabs;

function QRContentDesign(props) {
  const [bgColor, setBgColor] = useState("solid");
  const [shapeColor, setShapeColor] = useState("solid");
  const [eyesColor, setEyesColor] = useState("all");

  const {
    setQrOtherColor,
    qrOtherColor,
    setqrDotType,
    setQrBackground,
    setQrFill
  } = React.useContext(StoreContext);

  const callback = (key) => {
    console.log(key);
  };

  return (
    <Tabs
      className="cqrc__contents__design-tabs"
      defaultActiveKey="1"
      onChange={callback}
    >
      <TabPane tab="FRAME" key="1">
        <Space size="large">
          <InputColorPicker
            actions={setQrOtherColor}
            label="Shape Color"
            value={[qrOtherColor]}
          />
          <InputGroup label="Shape Text" value="SCAN ME" />
        </Space>
        <GroupOptions
          actions={setQrBackground}
          label="Frame Style"
          data={framestyle}
        />
      </TabPane>
      <TabPane tab="SHAPE" key="2">
        <GroupOptions
          actions={setqrDotType}
          size={70}
          label="Body Shape"
          data={bodyshape}
        />
        <GroupOptions
          actions={setqrDotType}
          size={70}
          label="Eye Frame Shape"
          data={eyeframeshape}
        />
        <GroupOptions
          actions={setqrDotType}
          size={70}
          label="Eye Ball Shape"
          data={eyeballshape}
        />
      </TabPane>
      <TabPane
        className="cqrc__contents__design-tabs__color"
        tab="COLOR"
        key="3"
      >
        <InputColorPicker
          actions={setQrFill}
          label={
            <div className="flex__between__center">
              <span>Background Color</span>
              <Radio.Group
                onChange={(e) => setBgColor(e.target.value)}
                value={bgColor}
              >
                <Radio value={"solid"}>Solid Color</Radio>
                <Radio value={"gradient"}>Gradient Color</Radio>
              </Radio.Group>
            </div>
          }
          value={bgColor === "solid" ? ["#FFFFFF"] : ["#FFFFFF", "#000000"]}
        />
        <InputColorPicker
          actions={setQrOtherColor}
          label={
            <div className="flex__between__center">
              <span>Shape Color</span>
              <Radio.Group
                onChange={(e) => setShapeColor(e.target.value)}
                value={shapeColor}
              >
                <Radio value={"solid"}>Solid Color</Radio>
                <Radio value={"gradient"}>Gradient Color</Radio>
              </Radio.Group>
            </div>
          }
          value={shapeColor === "solid" ? ["#FFFFFF"] : ["#FFFFFF", "#000000"]}
        />
        <InputColorPicker
          actions={setQrOtherColor}
          label={
            <div className="flex__between__center">
              <span>Eyes Color</span>
              <Radio.Group
                onChange={(e) => setEyesColor(e.target.value)}
                value={eyesColor}
              >
                <Radio value={"all"}>All</Radio>
                <Radio value={"custom"}>Custom</Radio>
              </Radio.Group>
            </div>
          }
          value={
            eyesColor === "all"
              ? ["#FFFFFF"]
              : [
                  "#FFFFFF",
                  "#000000",
                  "#FFFFFF",
                  "#000000",
                  "#FFFFFF",
                  "#000000",
                ]
          }
          subLabel={
            eyesColor === "all"
              ? []
              : [
                  "TOP LEFT FRAME",
                  "TOP LEFT BALL",
                  "TOP RIGHT FRAME",
                  "TOP RIGHT BALL",
                  "BOTTOM LEFT FRAME",
                  "BOTTOM LEFT BALL",
                ]
          }
        />
        <Popover
          className="color__helper"
          placement="topRight"
          content={
            <Alert
              message={
                <Fragment>
                  <b>Warning:</b> We recommend to give your colors more contrast
                  between background <br />
                  and other color to work with all QR code readers.
                </Fragment>
              }
              description={null}
              type="warning"
              showIcon
            />
          }
          title={null}
        >
          <Button
            type="primary"
            shape="circle"
            size="small"
            icon={<InfoOutlined />}
          />
        </Popover>
      </TabPane>
      <TabPane className="cqrc__contents__design-tabs__logo" tab="LOGO" key="4">
        <GroupOptions
          label={
            <div className="flex__between__center">
              <span>LOGO</span>
              <Button className="btn__upload" icon={<UploadOutlined />}>
                Upload
              </Button>
            </div>
          }
          data={logos}
          hasCheckbox={true}
          size={60}
        />
      </TabPane>
    </Tabs>
  );
}

export default QRContentDesign;
