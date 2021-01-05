import React from "react";
import { Tabs} from "antd";

const { TabPane } = Tabs;

function QRContentTemplates(props) {

  const callback = (key) => {
    console.log(key);
  };

  return (
    <Tabs
      className="cqrc__contents__design-tabs"
      defaultActiveKey="1"
      onChange={callback}
    >
      <TabPane tab="NEW" key="1">
        NEW
      </TabPane>
      <TabPane tab="HOT" key="2">
        HOT
      </TabPane>
    </Tabs>
  );
}

export default QRContentTemplates;
