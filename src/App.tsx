import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Chest } from './pages/Chest';

import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Smh } from './pages/Smh';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chest" component={Chest} />   
        <Route path="/profile" component={Profile} />   
        <Route path="/smh" component={Smh} />   
        <Route path="/" component={Home} />   
      </Switch>
    </BrowserRouter>
  )
}

export default App
