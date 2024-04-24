// Library Imports
import { useState, useEffect } from "react";
// Interfaces and Types
import { FormState } from "../../../components/form/dependents/constants/formProps";
// Components
import Pregunta from "./Pregunta";
import { Button } from "../../button/Button";

const Examen = () => {
  const [formInputData, setFormInputData] = useState<FormState>({});
  const [formErrorData, setFormErrorData] = useState<FormState>({});
  
  const [firstQuestionAnswers, setFirstQuestionAnswers] = useState<FormState>({});
  const [secondQuestionAnswers, setSecondQuestionAnswers] = useState<FormState>({});
  const [thirdQuestionAnswers, setThirdQuestionAnswers] = useState<FormState>({});
  const [fourthQuestionAnswers, setFourthQuestionAnswers] = useState<FormState>({});
  
  /* const [submissionSuccessful, setSubmissionSuccessful] =
    useState<boolean>(false);
  const [submissionInProgress, setSubmissionInProgress] =
    useState<boolean>(false); */

  return (
    <div className="examen-wrapper">
      <div className="examen-headers-wrapper display-grid">
        <h2 className="examen-header text-align-center">Pregunta</h2>
        <h2 className="examen-header text-align-center">Contesta</h2>
      </div>
      
      <Pregunta
        headerText="1.- Acontecimiento traumático severo"
        setStateHook={setFormInputData}
        setErrorHook={setFormErrorData}
        bodyText={[
          "¿Ha presenciado o sufrido alguna vez, durante o con motivo del trabajo un acontecimiento como los siguientes:",
          "Accidente que tenga como consecuencia la muerte, la pérdida de un miembro o una lesión grave?",
          "Asaltos?",
          "Actos violentos que derivaron en lesiones graves?",
          "Secuestro?",
          "Amenazas?",
          "Cualquier otro que ponga en riesgo su vida o salud, y/o la de otras personas?",
        ]}
      />
      <Pregunta
        headerText="II.- Recuerdos persistentes sobre el acontecimiento (durante el último mes)"
        setStateHook={setFormInputData}
        setErrorHook={setFormErrorData}
        bodyText={[
          "¿Ha tenido recuerdos recurrentes sobre el acontecimiento que le provocan malestares?",
          "¿Ha tenido sueños de carácter recurrente sobre el acontecimiento, que le producen malestar?",
        ]}
      />
      <Pregunta
        headerText="III.- Esfuerzo por evitar circunstancias parecidas o asociadas al acontecimiento (durante el último mes):"
        setStateHook={setFormInputData}
        setErrorHook={setFormErrorData}
        bodyText={[
          "¿Se ha esforzado por evitar todo tipo de sentimientos, conversaciones o situaciones que le puedan recordar el acontecimiento?",
          "¿Se ha esforzado por evitar todo tipo de actividades, lugares o personas que motivan recuerdos del acontecimiento?",
          "¿Ha tenido dificultad para recordar alguna parte importante del evento?",
          "¿Ha disminuido su interés en sus actividades cotidianas?",
          "¿Ha sentido usted alejado o distante de los demás?",
          "¿Ha notado que tiene dificultad para expresar sus sentimientos?",
          "¿Ha tenido la impresión de que su vida se va a acortar, que va a morir antes que otras personas o que tiene un futuro limitado?",
        ]}
      />
      <Pregunta
        headerText="IV Afectación (durante el último mes):"
        setStateHook={setFormInputData}
        setErrorHook={setFormErrorData}
        bodyText={[
          "¿Ha tenido usted dificultades para dormir?",
          "¿Ha estado particularmente irritable o le han dado arranques de coraje?",
          "¿Ha tenido dificultades para concentrarse?",
          "¿Ha estado nervioso o constantemente en alerta?",
          "¿Se ha sobresaltado fácilmente por cualquier cosa?",
        ]}
      />
      <div className="button-wrapper">
        <Button variant="primary" buttonSize="large" text="Entregar" />
      </div>
    </div>
  );
};

export default Examen;
