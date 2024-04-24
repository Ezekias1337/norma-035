// Library Imports
import React, { FC, useEffect, useState } from "react";
// Functions, Helpers, Utils and Hooks
import { handleFormChange } from "../../functions/handleFormChange";
import { camelCasifyString } from "../../../../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../../../../shared/utils/strings/kebabCasifyString";
// Interfaces and Types
import { FormUpdateEvent } from "../../constants/formTypes";
import { InputFieldProps } from "../../constants/formProps";

export const SwitchInput: FC<InputFieldProps> = ({
  name,
  label,
  additionalClassNames = "",
  defaultValue = false,
  setStateHook,
  setErrorHook,
  handleInputChange = (e: FormUpdateEvent) => {
    handleFormChange(e, setStateHook, setErrorHook);
  },
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (defaultValue === "true") {
      setIsChecked(true);
    }
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    handleInputChange(e);
  };

  return (
    <div className={`switch-wrapper display-flex`} key={name}>
      <input
        type="checkbox"
        id={kebabCasifyString(name)}
        name={camelCasifyString(name)}
        checked={isChecked}
        onChange={handleChange}
        className={`switch-input ${additionalClassNames}`}
      />
      <label htmlFor={kebabCasifyString(name)} className={`switch-label`}>
        {label}
      </label>
    </div>
  );
};
