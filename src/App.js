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

//This is my main app file where I have my light/dark theme for the app and 
//the app routing as well using React Router

function App() {
  //First hook for changing the theme
  const [theme, setTheme] = useState('light');
  //function to toggle the theme for my components
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    //ThemeProvider works the same as Provider in where you can wrap you components so they have access
    //to global themes
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeButton onClick={toggleTheme}>
        <SunIcon theme={theme}/>
        <MoonIcon theme={theme}/>
      </ThemeButton>  
      
      {/* passing in the global styles here so my app has a reference to it */}
      <GlobalStyles />
      
      <div className="App">
        {/* React router provides route handling (just for search and saved articles pages) */}
        <Router>
          {/* This nav is a sticky header */}
          <StyledNav>
            <Link to="/">Search</Link>
            <Link to="/saved">Saved</Link>
          </StyledNav>
          {/* This switch statement tells react router which pages to render for each path */}
          <Switch>
            <Route exact path="/">
              <WikiSearchPage />
            </Route>
            <Route path="/saved">
              <SavedArticles />
            </Route>
          </Switch>
        </Router>
        {/* I created a random page button that takes you to a random wikipedia page */}
        <RandomPage>
                <a target="_blank" href={`http://en.wikipedia.org/wiki/Special:Random`}>Discover...</a>
        </RandomPage>
      </div>
    </ThemeProvider>
  );
}

export default App;
