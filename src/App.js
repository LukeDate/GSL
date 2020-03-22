import React, { useState } from 'react';
import './App.css';
import WikiSearchPage from './components/wikiSearchPage';
import SavedArticles from './components/savedArticles';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globals';
import { lightTheme, darkTheme, ThemeButton, StyledNav, RandomPage } from './styles/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ReactComponent as MoonIcon } from './moon.svg';
import { ReactComponent as SunIcon } from './sun.svg';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeButton onClick={toggleTheme}>
        <SunIcon theme={theme}/>
        <MoonIcon theme={theme}/>
      </ThemeButton>
      
      <GlobalStyles />
      
      <div className="App">
        <Router>
          <StyledNav>
            <Link to="/">Search</Link>
            <Link to="/saved">Saved</Link>
          </StyledNav>
          <Switch>
            <Route exact path="/">
              <WikiSearchPage />
            </Route>
            <Route path="/saved">
              <SavedArticles />
            </Route>
          </Switch>
        </Router>
        <RandomPage>
                <a target="_blank" href={`http://en.wikipedia.org/wiki/Special:Random`}>Discover...</a>
        </RandomPage>
      </div>
    </ThemeProvider>
  );
}

export default App;
