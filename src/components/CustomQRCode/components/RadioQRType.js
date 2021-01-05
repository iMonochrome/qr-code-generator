import React from "react";
import { Col, Radio } from "antd";
import { OptionsCustom } from "../utils";
import { StoreContext } from "../utils/stores";

function RadioQRType(props) {
  const { setQrType } = React.useContext(StoreContext);

  const renderOptionsCustom = () => {
    let res;
    if (OptionsCustom) {
      res = OptionsCustom.map((o) => (
        <Radio.Button className="flex__start__center" key={o.key} value={o.key}>
          {o.icon}
          {o.title.toUpperCase()}
        </Radio.Button>
      ));
    }
    return res;
  };

  return (
    <Col span={4}>
      <Radio.Group
        className="flex__between__start"
        defaultValue="url"
        buttonStyle="outline"
        onChange={val => {
          setQrType(val.target.value)
        }}
      >
        {renderOptionsCustom()}
      </Radio.Group>
    </Col>
  );
}

export default RadioQRType;
