import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import styles from './Tree.module.scss';
import CONSTANTS from '../../constants';
import { WithLang, WithTheme } from '../HOCs';
import { getContent } from '../../locale';
const { THEMES } = CONSTANTS;

const Tree = (props) => {
  const { theme, setTheme, locale } = props;
  const classNames = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });



  return (
    <div className={classNames}>
      <h2>{getContent(locale, 'Tree')}</h2>
      <Parent />
    </div>
  );
}



const TreeWithTheme = WithTheme(Tree);
const TreeWithLang = WithLang(TreeWithTheme);

export default TreeWithLang;
