// app.js

require('../css/app.scss');

// loads the jquery package from node_modules
require('webpack-jquery-ui');
require('jquery-dropdown-datepicker');

var $ = require('jquery');
var $2 = require('jquery');

global.$ = global.jQuery = $;

// loads the bootstrap package from node_modules
require('bootstrap');
require('popper.js');


//my personnal css
require('../css/home-index.css');
require('../css/navbar.css');
require('../css/register-login.css');
require('../css/social-media-icons.css');

//my personnal js
require('./register.js')
require('./login.js')
require('./labelFloat.js')