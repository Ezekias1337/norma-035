// Library Imports
import { useState, Fragment } from "react";
// Interfaces and Types
import { SetStateHookForm } from "../../../components/form/dependents/constants/formProps";
// Components
import { Checkbox } from "../../form/dependents/components/input-fields/Checkbox";

const Contesta = ({
  headerText,
  bodyText,
  setStateHook,
  setErrorHook,
}: {
  headerText: string;
  bodyText: string[];
  setStateHook: SetStateHookForm;
  setErrorHook: SetStateHookForm;
}) => {
  const [checkedBoxId, setCheckedBoxId] = useState<number>(0);

  return (
    <Fragment>
      <Checkbox
        name={headerText}
        label="Sí"
        defaultValue="false"
        required
        setStateHook={setStateHook}
        setErrorHook={setErrorHook}
      />
      <Checkbox
        name={headerText}
        label="No"
        defaultValue="false"
        required
        setStateHook={setStateHook}
        setErrorHook={setErrorHook}
      />
    </Fragment>
  );
};

export default Contesta;
