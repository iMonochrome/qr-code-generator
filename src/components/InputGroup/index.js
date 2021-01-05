import React, { useState } from "react";
import { Input, Popover } from "antd";
import { InputGroupStyled } from "./styled";

function InputColorPicker(props) {
  const { label, value } = props;
  const [color, setColor] = useState(value);
  return (
    <InputGroupStyled className="icp" iColor={color}>
      <label className="icp__label">{label}</label>
      <div className="icp__group">
        <Input className="icp__input" size="large"  defaultValue={color} />
      </div>
    </InputGroupStyled>
  );
}

export default InputColorPicker;
