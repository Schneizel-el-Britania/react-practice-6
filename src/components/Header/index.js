import React, { Component } from 'react';
import cx from 'classnames';
import { WbSunny, NightsStayRounded } from '@material-ui/icons';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import { WithTheme, WithUser } from '../HOCs';
const { THEMES } = CONSTANTS;

class Header extends Component {
  render() {
    const { theme, setTheme, user } = this.props;
    const isLightTheme = theme === THEMES.LIGHT;
    const classNames = cx(styles.container, {
      [styles.light]: isLightTheme,
      [styles.dark]: theme === THEMES.DARK,
    });
    return (
      <header className={classNames}>
        <p>{user.fname} {user.sname} </p>
        <div onClick={() => {
          const nextTheme = isLightTheme ? THEMES.DARK : THEMES.LIGHT;
          setTheme(nextTheme);
        }}>
          {isLightTheme ? <WbSunny /> : <NightsStayRounded />}
        </div>
      </header>
    );
  }
}

const HeaderWithUser = WithUser(Header);
const HeaderWithTheme = WithTheme(HeaderWithUser);

export default HeaderWithTheme;
