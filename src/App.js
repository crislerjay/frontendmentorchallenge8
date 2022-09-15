
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import AllCountries from './components/AllCountries';
import SingleCountry from './components/SingleCountry';
import useLocalStorage from 'use-local-storage'


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ?  'dark' : 'light';
    setTheme(newTheme)
    console.log(theme);
  }

  return (
    <div className="App" data-theme={theme}>
      <Header switchTheme={switchTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/name/:id" element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
