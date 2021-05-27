import './styles/App.css';
import { useState } from 'react';
import { UserContext } from './contexts/User';
import Header from './components/Header';
import Article from './components/Article';
import ArticlesList from './components/ArticlesList';
import Nav from './components/Nav';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  TODO

  - dropdowns need to close when clicked
  - tidy components so states are shared more concisely
  

*/
function App() {
  const [user, setUser] = useState('cooljmessy');
  const [queryString, setQueryString] = useState({});
  const [comments, setComments] = useState([]);
  return (
    <div className='App'>
      <UserContext.Provider value={{ user, setUser }}>
        <Header setQueryString={setQueryString} />
        <Nav setQueryString={setQueryString} />
        <Switch>
          <Route exact path='/topics/:topic'>
            <ArticlesList
              queryString={queryString}
              setQueryString={setQueryString}
            />
          </Route>
          <Route exact path='/:author_id/:article_id'>
            <Article comments={comments} setComments={setComments} />
          </Route>{' '}
          <Route exact path='/'>
            <ArticlesList
              queryString={queryString}
              setQueryString={setQueryString}
            />{' '}
          </Route>{' '}
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
