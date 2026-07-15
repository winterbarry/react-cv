// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/general";
import EducationInfo from "./components/education";
import ExperienceInfo from "./components/experience";

function App() {
  return (
    <>
      <h1>CV Builder</h1>

      <GeneralInfo />
      <EducationInfo />
      <ExperienceInfo />
    </>
  );
}

export default App;
