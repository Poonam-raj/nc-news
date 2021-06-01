import './styles/App.css';
import { useState } from 'react';
import { UserContext } from './contexts/User';
import Header from './components/Header';
import Article from './components/Article';
import ArticlesList from './components/ArticlesList';
import Nav from './components/Nav';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './components/Error';

/*
  TODO
  - dropdowns need to close when clicked
  - tidy components so states are shared more concisely
  - Add footer with link to github repo
*/
function App() {
  const [user, setUser] = useState('cooljmessy');
  const [queryString, setQueryString] = useState({});
  const [voteTally, setVoteTally] = useState(0);

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
              voteTally={voteTally}
              setVoteTally={setVoteTally}
            />
          </Route>
          <Route exact path='/articles/:article_id'>
            <Article voteTally={voteTally} setVoteTally={setVoteTally} />
          </Route>{' '}
          <Route exact path='/'>
            <ArticlesList
              queryString={queryString}
              setQueryString={setQueryString}
              voteTally={voteTally}
              setVoteTally={setVoteTally}
            />{' '}
          </Route>{' '}
          <Route path='/404'>
            <Error />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
