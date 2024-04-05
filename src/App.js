import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Application</h1>
        <Weather/>
        <footer>
          This project was coded by Nyawira Gitaka and is{" "}
          <a
            href="https://github.com/NyawiraGitaka/react-weather-appIication"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
