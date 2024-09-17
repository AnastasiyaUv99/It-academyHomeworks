import { HomePage } from './pages/homePage.js'
import { SearchResultPage } from './pages/searchResultPage.js'
import { Search } from './components/search'
import { LoginPage } from './pages/loginPage'


class PageFactory {
  static 'Home Page' = new HomePage();
  static 'Search' = new Search();
  static 'Search Result Page' = new SearchResultPage();
  static 'Login Page' = new LoginPage();
}

export { PageFactory };