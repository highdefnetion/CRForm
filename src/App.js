import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CRForm from './components/CRForm';
import ConsultationService from './components/ConsultationService';
import Home from './components/Home';
import { MsalProvider } from './MsalProvider';

function App() {
  return (
    <MsalProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/CRForm" component={CRForm} />
            <Route path="/ConsultationService" component={ConsultationService} />
          </Switch>
        </div>
      </Router>
    </MsalProvider>
  );
}

export default App;
