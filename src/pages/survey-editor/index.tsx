/*
All Logic related to page will be here 
*/

import { PropertiesEditorComponent } from "./components/properties-editor-component";
import { QuestionList } from "@/widgets/question-list";
import { SurveyEditorForm } from "@/widgets/survey-editor";

import { useCreateSurvey } from "@/features/survey/create"

export const SurveyEditor = () => {
  const { onMutate } = useCreateSurvey();
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <section>
        <QuestionList />
      </section>

      <section>
        <SurveyEditorForm createSurvey={onMutate} />
      </section>

      <section>
        <PropertiesEditorComponent selectedSurveyEntity="question" />
      </section>
    </main>
  );
};
