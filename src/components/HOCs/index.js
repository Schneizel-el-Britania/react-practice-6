import { ThemeContext, UserContext, LangContext } from "../../context";

export const WithTheme = InnerComponent => {
  return (props) => {
    return (
      <ThemeContext.Consumer>{
        ([theme, setTheme]) => (<InnerComponent theme={theme} setTheme={setTheme} {...props} />)
      }</ThemeContext.Consumer>
    );
  }
}

export const WithUser = InnerComponent => (props) =>
  <UserContext.Consumer>{
    (user) => (<InnerComponent user={user} {...props} />)
  }</UserContext.Consumer>

export const WithLang = InnerComponent => (props) =>
  <LangContext.Consumer>{
    ([locale, setLang]) => (<InnerComponent locale={locale} setLang={setLang} {...props} />)
  }</LangContext.Consumer>
