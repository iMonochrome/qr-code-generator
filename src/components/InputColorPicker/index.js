import React, { Fragment } from "react";
import { InputColorPickerStyled } from "./styled";
import InputColor from "./InputColor";

function InputColorPicker(props) {
  const { label, value, subLabel } = props;

  const renderInputGroup = () => {
    return value.map((v, i) => (
      <div
        className={`flex__start__start flex__column ${
          subLabel && 'group_sublabel'
        }`}
        key={i}
      >
        {subLabel && (
          <span className="icp__sublabel">{subLabel && subLabel[i]}</span>
        )}
        <InputColor actions={props.actions} color={v} subLabel={subLabel} />
      </div>
    ));
  };

  return (
    <InputColorPickerStyled className="icp">
      <label className="icp__label">{label}</label>
      <div className="flex__start__start flex__wrap">{renderInputGroup()}</div>
    </InputColorPickerStyled>
  );
}

export default InputColorPicker;
