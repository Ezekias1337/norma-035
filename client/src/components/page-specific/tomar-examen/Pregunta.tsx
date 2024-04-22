// Library Imports
import { Fragment } from "react";
// Interfaces and Types
import { SetStateHookForm } from "../../../components/form/dependents/constants/formProps";
// Components
import { Checkbox } from "../../form/dependents/components/input-fields/Checkbox";

const Pregunta = ({
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
  return (
    <div className="pregunta-wrapper">
      <h3 className="pregunta-header">{headerText}</h3>

      <div className="pregunta-row">
        <div className="pregunta-body-wrapper">
          {bodyText.map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
              <br />
            </Fragment>
          ))}
        </div>
        <div className="contesta-wrapper full-flex">
          <Checkbox
            name={headerText}
            label="Sí"
            defaultValue="false"
            required
            setStateHook={setStateHook}
            setErrorHook={setErrorHook}
          />
        </div>
      </div>
    </div>
  );
};

export default Pregunta;
