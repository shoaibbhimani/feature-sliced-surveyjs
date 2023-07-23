import { Route } from "react-router-dom";
import { SurveyEditor } from "@/pages/survey-editor";

import "./App.css";
import { Provider } from "./provider";

function App() {
  return (
    <Provider>
      <Route path="/" element={<SurveyEditor />} />
    </Provider>
  );
}

export default App;
