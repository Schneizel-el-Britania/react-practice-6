import React, { Component } from 'react';
import cx from 'classnames';
import styles from './Footer.module.scss';
import CONSTANTS from '../../constants';
import { WithLang, WithTheme } from '../HOCs';
import { getContent, getLangList } from '../../locale';
const { THEMES } = CONSTANTS;

class Footer extends Component {
  render() {
    const { theme, setTheme, locale, setLang } = this.props;

    const isLightTheme = theme === THEMES.LIGHT;

    const classNames = cx(styles.container, {
      [styles.light]: isLightTheme,
      [styles.dark]: theme === THEMES.DARK,
    });

    const changeLang = (event) => {
      setLang(event.target.value)
    }

    return (
      <footer className={classNames}>
        <label>
          {getContent(locale, 'LangList')}
          <select onChange={changeLang}>
            {getLangList().map(lang => <option value={lang}>{lang}</option>)}
          </select>
        </label>
      </footer>
    );
  }
}

const FooterWithTheme = WithTheme(Footer);
const FooterWithLang = WithLang(FooterWithTheme);

export default FooterWithLang;
