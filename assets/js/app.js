// app.js

require('../css/app.scss');

// loads the jquery package from node_modules
require('webpack-jquery-ui');
require('jquery-dropdown-datepicker');

var $ = require('jquery');
global.$ = global.jQuery = $;

// loads the bootstrap package from node_modules
require('bootstrap');
require('popper.js');


//my personnal css
require('../css/home-index.css');
require('../css/navbar.css');
require('../css/register.css');

//my personnal js
require('./register.js')


$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});