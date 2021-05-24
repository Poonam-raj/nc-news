import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import ArticlesList from './components/ArticlesList';
import Nav from './components/Nav';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Switch>
        <Route exact path='/:author_id/:article_id'>
          <Article />
        </Route>
        <Route exact path='/'>
          <ArticlesList />
        </Route>
        <Route exact path='/topics/:topic'>
          <ArticlesList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
