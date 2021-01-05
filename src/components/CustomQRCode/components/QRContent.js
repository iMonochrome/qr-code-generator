import React from "react";
import {
  Col,
  Input,
  Tabs,
  Typography,
  Upload,
  message,
  Button,
  Switch,
  Space,
} from "antd";
import { UploadOutlined, RightOutlined } from "@ant-design/icons";
import QRContentDesign from "./QRContentDesign";
import QRContentTemplates from "./QRContentTemplates";
import { StoreContext } from "../utils/stores";

const { Text } = Typography;
const { TabPane } = Tabs;

function QRContent(props) {
  const callback = (key) => {
    console.log(key);
  };

  const { setQrValue, setLoading } = React.useContext(StoreContext);

  const propsActions = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Col className="cqrc__contents" span={14}>
      <Tabs
        className="cqrc__contents__tabs"
        defaultActiveKey="content"
        onChange={callback}
      >
        <TabPane
          className="cqrc__contents__tabs__content"
          tab="Content"
          key="content"
        >
          <Input
            placeholder="Enter your website"
            className="cqrc__contents__input"
            size="large"
            onChange={e => {
              setLoading(true)
              setQrValue(e.target.value)
              setLoading(false)
            }}
          />
          <Text className="cqrc__contents__subinput">
            (Your QR Code will be generated automatically)
          </Text>
          {/* Upload file */}
          <div className="flex__between__center cqrc__contents__upload">
            <Upload {...propsActions}>
              <Button
                className="cqrc__contents__upload__button"
                icon={<UploadOutlined />}
              >
                <b>Upload any file</b> (.jpg, .pdf, .mp3, .docx, .pptx)
              </Button>
            </Upload>
            <Space>
              <Switch
                defaultChecked
                onChange={(checked) => {
                  console.log(checked);
                }}
              />
              Scan tracking
            </Space>
          </div>
        </TabPane>
        <TabPane tab="Design" key="design">
          <QRContentDesign />
        </TabPane>
        <TabPane tab="Templates" key="templates">
          <QRContentTemplates />
        </TabPane>
      </Tabs>
      <Button
        className="flex__center__center cqrc__contents__preview"
        size="large"
        shape="circle"
        type="primary"
        icon={<RightOutlined />}
      />
    </Col>
  );
}

export default QRContent;
