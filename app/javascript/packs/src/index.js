import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from "./components/Test"
console.log("This worked");

ReactDOM.render(<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contactform" component={ContactForm} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/boots" component={Boots} />
      <Route path="/tents" component={Tents} />
      <Route path="/pfgs" component={Pfgs} />
    </Switch>
  </BaseLayout>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
