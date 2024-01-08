import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from "./page/register.tsx";
import Countries from "./page/countries.tsx";
import './App.css';

let App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/register`} component={Register} />
        <Route exact path={`/countries`} component={Countries} />

      </Switch>
    </BrowserRouter>
  );
};
export default App;
