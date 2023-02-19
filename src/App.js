import "./App.css";
import CitySearch from "./CitySearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <CitySearch />
        <p className="footer">
          <a href="https://github.com/vi-chesnova/weather-react">
            Open-sourse code
          </a>{" "}
          by Victoria Chesnova
        </p>
      </header>
    </div>
  );
}

export default App;
