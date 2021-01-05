import React from "react";
import { GroupOptionsStyled } from "./styled";
import { Space, Radio } from "antd";
import { StoreContext } from "../CustomQRCode/utils/stores";

function GroupOptions(props) {
  const { label, data, size } = props;

  const { setQrBackground } = React.useContext(StoreContext);

  const renderOptions = () => {
    if (data && data.length)
      return data.map((d) => (
        <Radio.Button
          className="flex__center__center go__items"
          value={d.value}
          key={d.id}
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <img src={d.image} />
        </Radio.Button>
      ));
  };
  return (
    <GroupOptionsStyled className="go">
      <label className="go__label">{label}</label>
      <Radio.Group defaultValue={data[0].value} onChange={val => props.actions(val.target.value)} className="go__radio-group">
        <Space size={12} >{renderOptions()}</Space>
      </Radio.Group>
    </GroupOptionsStyled>
  );
}

export default GroupOptions;
