import MainPage from './components/main/main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
