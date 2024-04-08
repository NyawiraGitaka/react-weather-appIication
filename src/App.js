import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Application</h1>
        <Weather defaultCity="Melbourne" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nyawiragitaka/"
            target="_blank"
            rel="noreferrer"
          >
            Nyawira Gitaka{" "}
          </a>
          and is open sourced on{" "}
          <a
            href="https://github.com/NyawiraGitaka/react-weather-appIication"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
