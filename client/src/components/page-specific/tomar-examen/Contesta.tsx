// Library Imports
import { useState, Fragment } from "react";
// Interfaces and Types
import { SetStateHookForm } from "../../../components/form/dependents/constants/formProps";
// Components
import { Checkbox } from "../../form/dependents/components/input-fields/Checkbox";
import { SwitchInput } from "../../form/dependents/components/input-fields/SwitchInput";

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
      <SwitchInput
        name="yes"
        label="No"
        secondaryLabel="Sí"
        setStateHook={setStateHook}
        setErrorHook={setErrorHook}
        required
      />
    </Fragment>
  );
};

export default Contesta;
