import React, { useState, useEffect } from "react";
import { Input, Popover } from "antd";
import ColorPicker from "../ColorPicker";

function InputColor(props) {
  const [color, setColor] = useState(props.color);
  
  useEffect(() => {
    props.actions(color);
  }, [color]);

  return (
    <div className="icp__group">
      <Input className="icp__input" size="large" value={color.toUpperCase()} />
      <Popover
        content={<ColorPicker setColor={setColor} color={color} />}
        trigger="click"
        placement="right"
      >
        <div style={{ background: color }} className="icp__preview"></div>
      </Popover>
    </div>
  );
}

export default InputColor;
