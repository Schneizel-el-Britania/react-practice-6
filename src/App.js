import './App.css';
import React, { Component } from 'react';
import { UserContext, ThemeContext, LangContext } from './context';
import CONSTANTS from './constants';
import TreeWithTheme from './components/Tree';
import HeaderWithTheme from './components/Header';
import Footer from './components/Footer'
const { THEMES } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES.LIGHT,
      user: {
        id: 1,
        fname: 'Elon',
        sname: 'Musk',
        imgSrc: 'https://i.insider.com/6171279833f4b300189ad407?width=700'
      },
      locale: 'en',
    }
  }

  setTheme = (theme) => { this.setState({ theme }) }
  setLang = (locale) => { this.setState({ locale }) }

  render() {
    const { user, theme, locale } = this.state;
    return <LangContext.Provider value={[locale, this.setLang]}>
      <ThemeContext.Provider value={[theme, this.setTheme]}>
        <UserContext.Provider value={user}>
          <HeaderWithTheme />
          <TreeWithTheme />
          <Footer />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </LangContext.Provider>

  }

}

export default App;