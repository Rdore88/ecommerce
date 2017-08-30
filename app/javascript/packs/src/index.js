import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import Boots from './components/Boots';
import Tents from './components/Tents';
import Pfgs from './components/Pfgs';
import Home from './components/Home'

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
