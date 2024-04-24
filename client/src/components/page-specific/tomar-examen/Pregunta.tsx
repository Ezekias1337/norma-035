// Library Imports
import { Fragment } from "react";
// Interfaces and Types
import { SetStateHookForm } from "../../../components/form/dependents/constants/formProps";
// Components
import { Checkbox } from "../../form/dependents/components/input-fields/Checkbox";
import Contesta from "./Contesta";

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

      <div className="pregunta-container">
        {bodyText.map((line, index) => (
          <div className="pregunta-row" key={index}>
            <h4>{line}</h4>
            <Contesta
              headerText="Si"
              bodyText={["Sí"]}
              setStateHook={setStateHook}
              setErrorHook={setErrorHook}
            />

            <br />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pregunta;
