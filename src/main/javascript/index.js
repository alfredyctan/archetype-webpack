import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';
import Button from './components/Button';

var welcome = new Welcome();
welcome.hello();

// bootstrap of the whoel app
ReactDOM.render(
  <Button name='try me'/>,
  document.getElementById('button')
);

