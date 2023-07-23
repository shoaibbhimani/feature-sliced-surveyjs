import { QuestionEditorForm } from "@/widgets/question-editor";
import { SectionEditorForm } from "@/widgets/section-editor";
import { SurveyEditorForm } from "@/widgets/survey-editor";

type PropertiesEditorComponentProps = {
  selectedSurveyEntity: "survey" | "section" | "question";
};

export const PropertiesEditorComponent = ({
  selectedSurveyEntity,
}: PropertiesEditorComponentProps) => {
  if (selectedSurveyEntity === "question") {
    return <QuestionEditorForm />;
  } else if (selectedSurveyEntity === "section") {
    return <SectionEditorForm />;
  }

  return <SurveyEditorForm />;
};
