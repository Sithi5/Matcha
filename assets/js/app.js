// app.js

require('../css/app.scss');

// loads the jquery package from node_modules
require('webpack-jquery-ui')
var $ = require('jquery');
global.$ = global.jQuery = $;

// loads the bootstrap package from node_modules
require('bootstrap');
require('popper.js');


require('../css/home-index.css');
require('../css/navbar.css');
require('../css/register.css');




$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});