import MainPage from './components/main/main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/messages/:id" component={MainPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
