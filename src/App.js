import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("editAndReload", { filename: "src/App.js" })}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("learnReact")}
        </a>
        <br />
        <select
          value={language}
          onChange={(event) => {
            i18n.changeLanguage(event.target.value);
            setLanguage(event.target.value);
          }}
        >
          <option value="en-EN">English</option>
          <option value="de-DE">Deutsch</option>
        </select>
        <div>
          {t("language")} {language}
        </div>
      </header>
    </div>
  );
}

export default App;
