

import React from 'react';
import ReactDOM from 'react-dom';
import baseTheme from '../node_modules/material-ui/styles/baseThemes/lightBaseTheme.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './Routes.js'
import './styles/main.css'
import '../node_modules/highlight.js/styles/darcula.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'




render(<Routes />,document.getElementById('app'));
