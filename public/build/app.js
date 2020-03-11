(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/admin-index.css":
/*!************************************!*\
  !*** ./assets/css/admin-index.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/admin-user.css":
/*!***********************************!*\
  !*** ./assets/css/admin-user.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/home-index.css":
/*!***********************************!*\
  !*** ./assets/css/home-index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/navbar.css":
/*!*******************************!*\
  !*** ./assets/css/navbar.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/profil.css":
/*!*******************************!*\
  !*** ./assets/css/profil.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/register-login.css":
/*!***************************************!*\
  !*** ./assets/css/register-login.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/social-media-icons.css":
/*!*******************************************!*\
  !*** ./assets/css/social-media-icons.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/adminUser.js":
/*!********************************!*\
  !*** ./assets/js/adminUser.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// app.js
__webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss"); // loads the jquery package from node_modules


__webpack_require__(/*! webpack-jquery-ui */ "./node_modules/webpack-jquery-ui/index.js");

__webpack_require__(/*! jquery-dropdown-datepicker */ "./node_modules/jquery-dropdown-datepicker/dist/jquery-dropdown-datepicker.min.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var $2 = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

global.$ = global.jQuery = $; // loads the bootstrap package from node_modules

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js"); //my personnal css


__webpack_require__(/*! ../css/home-index.css */ "./assets/css/home-index.css");

__webpack_require__(/*! ../css/navbar.css */ "./assets/css/navbar.css");

__webpack_require__(/*! ../css/register-login.css */ "./assets/css/register-login.css");

__webpack_require__(/*! ../css/social-media-icons.css */ "./assets/css/social-media-icons.css");

__webpack_require__(/*! ../css/admin-index.css */ "./assets/css/admin-index.css");

__webpack_require__(/*! ../css/admin-user.css */ "./assets/css/admin-user.css");

__webpack_require__(/*! ../css/profil.css */ "./assets/css/profil.css"); //my personnal js


__webpack_require__(/*! ./register.js */ "./assets/js/register.js");

__webpack_require__(/*! ./login.js */ "./assets/js/login.js");

__webpack_require__(/*! ./labelFloat.js */ "./assets/js/labelFloat.js");

__webpack_require__(/*! ./adminUser.js */ "./assets/js/adminUser.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/js/labelFloat.js":
/*!*********************************!*\
  !*** ./assets/js/labelFloat.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//script setting label top of field when something inside field and label down if nothing inside field
$('.label-float :input').blur(function () {
  if ($(this).val()) {
    $(this).labels().addClass('force-label-top');
  } else if (!$(this).val()) {
    $(this).labels().removeClass('force-label-top');
  }
}); //script setting label top of field when something inside field when reload of page

$(".label-float :input").each(function () {
  if ($(this).val().length != 0) {
    $(this).labels().addClass('force-label-top');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/login.js":
/*!****************************!*\
  !*** ./assets/js/login.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//ajax form login
$('#modal_form_login').submit(function () {
  $.ajax({
    url: $('#modal_form_login').attr('action'),
    type: 'POST',
    data: $('#modal_form_login').serialize(),
    success: function success(data) {
      if (data.data === 'success') {
        $('#modal-register').modal('hide');
        location.reload();
      }

      $('#modal-content-register').html(data);
    }
  });
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/register.js":
/*!*******************************!*\
  !*** ./assets/js/register.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

//script for datepicker for birthdate register
$(document).ready(function () {
  $('.birthdate-dropdown').dropdownDatepicker({
    submitFormat: 'yyyy-mm-dd',
    minAge: 18,
    maxAge: 100
  });
}); //set birthday select class to required after datepicker is loaded (1s)

setTimeout(function () {
  $('.date-dropdowns select').each(function () {
    $(this).attr('required', true);
  });
}, 1000); //ajax form register

$('#modal_form_register').submit(function () {
  $.ajax({
    url: $('#modal_form_register').attr('action'),
    type: 'POST',
    data: $('#modal_form_register').serialize(),
    success: function success(data) {
      if (data.data === 'success') {
        $('#modal-register').modal('hide');
        location.reload();
      }

      $('#modal-content-register').html(data);
    }
  });
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FkbWluLWluZGV4LmNzcz9jZGRlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvYWRtaW4tdXNlci5jc3M/ZTUzMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzP2FlY2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9ob21lLWluZGV4LmNzcz9mZDM4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvbmF2YmFyLmNzcz8zYzI5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcHJvZmlsLmNzcz8yMDVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcmVnaXN0ZXItbG9naW4uY3NzPzMwMDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9zb2NpYWwtbWVkaWEtaWNvbnMuY3NzP2YxMWMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFiZWxGbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwiJDIiLCJnbG9iYWwiLCJqUXVlcnkiLCJibHVyIiwidmFsIiwibGFiZWxzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImVhY2giLCJsZW5ndGgiLCJzdWJtaXQiLCJhamF4IiwidXJsIiwiYXR0ciIsInR5cGUiLCJkYXRhIiwic2VyaWFsaXplIiwic3VjY2VzcyIsIm1vZGFsIiwibG9jYXRpb24iLCJyZWxvYWQiLCJodG1sIiwiZG9jdW1lbnQiLCJyZWFkeSIsImRyb3Bkb3duRGF0ZXBpY2tlciIsInN1Ym1pdEZvcm1hdCIsIm1pbkFnZSIsIm1heEFnZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7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c0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gYXBwLmpzXHJcblxyXG5yZXF1aXJlKCcuLi9jc3MvYXBwLnNjc3MnKTtcclxuXHJcbi8vIGxvYWRzIHRoZSBqcXVlcnkgcGFja2FnZSBmcm9tIG5vZGVfbW9kdWxlc1xyXG5yZXF1aXJlKCd3ZWJwYWNrLWpxdWVyeS11aScpO1xyXG5yZXF1aXJlKCdqcXVlcnktZHJvcGRvd24tZGF0ZXBpY2tlcicpO1xyXG5cclxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyICQyID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xyXG5cclxuLy8gbG9hZHMgdGhlIGJvb3RzdHJhcCBwYWNrYWdlIGZyb20gbm9kZV9tb2R1bGVzXHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG5yZXF1aXJlKCdwb3BwZXIuanMnKTtcclxuXHJcblxyXG4vL215IHBlcnNvbm5hbCBjc3NcclxucmVxdWlyZSgnLi4vY3NzL2hvbWUtaW5kZXguY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9uYXZiYXIuY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9yZWdpc3Rlci1sb2dpbi5jc3MnKTtcclxucmVxdWlyZSgnLi4vY3NzL3NvY2lhbC1tZWRpYS1pY29ucy5jc3MnKTtcclxucmVxdWlyZSgnLi4vY3NzL2FkbWluLWluZGV4LmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvYWRtaW4tdXNlci5jc3MnKTtcclxucmVxdWlyZSgnLi4vY3NzL3Byb2ZpbC5jc3MnKTtcclxuXHJcbi8vbXkgcGVyc29ubmFsIGpzXHJcbnJlcXVpcmUoJy4vcmVnaXN0ZXIuanMnKVxyXG5yZXF1aXJlKCcuL2xvZ2luLmpzJylcclxucmVxdWlyZSgnLi9sYWJlbEZsb2F0LmpzJylcclxucmVxdWlyZSgnLi9hZG1pblVzZXIuanMnKSIsIiAgICAvL3NjcmlwdCBzZXR0aW5nIGxhYmVsIHRvcCBvZiBmaWVsZCB3aGVuIHNvbWV0aGluZyBpbnNpZGUgZmllbGQgYW5kIGxhYmVsIGRvd24gaWYgbm90aGluZyBpbnNpZGUgZmllbGRcclxuICAgICQoJy5sYWJlbC1mbG9hdCA6aW5wdXQnKS5ibHVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykubGFiZWxzKCkuYWRkQ2xhc3MoJ2ZvcmNlLWxhYmVsLXRvcCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoISQodGhpcykudmFsKCkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5sYWJlbHMoKS5yZW1vdmVDbGFzcygnZm9yY2UtbGFiZWwtdG9wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvL3NjcmlwdCBzZXR0aW5nIGxhYmVsIHRvcCBvZiBmaWVsZCB3aGVuIHNvbWV0aGluZyBpbnNpZGUgZmllbGQgd2hlbiByZWxvYWQgb2YgcGFnZVxyXG4gICAgJChcIi5sYWJlbC1mbG9hdCA6aW5wdXRcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmxhYmVscygpLmFkZENsYXNzKCdmb3JjZS1sYWJlbC10b3AnKTtcclxuICAgICAgICB9XHJcbiAgICB9KSIsIi8vYWpheCBmb3JtIGxvZ2luXHJcbiQoJyNtb2RhbF9mb3JtX2xvZ2luJykuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICQoJyNtb2RhbF9mb3JtX2xvZ2luJykuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6ICQoJyNtb2RhbF9mb3JtX2xvZ2luJykuc2VyaWFsaXplKCksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1yZWdpc3RlcicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1yZWdpc3RlcicpLmh0bWwoZGF0YSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KTsiLCIvL3NjcmlwdCBmb3IgZGF0ZXBpY2tlciBmb3IgYmlydGhkYXRlIHJlZ2lzdGVyXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmJpcnRoZGF0ZS1kcm9wZG93bicpLmRyb3Bkb3duRGF0ZXBpY2tlcih7XHJcbiAgICAgICAgc3VibWl0Rm9ybWF0OiAneXl5eS1tbS1kZCcsXHJcbiAgICAgICAgbWluQWdlOiAxOCxcclxuICAgICAgICBtYXhBZ2U6IDEwMCxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vc2V0IGJpcnRoZGF5IHNlbGVjdCBjbGFzcyB0byByZXF1aXJlZCBhZnRlciBkYXRlcGlja2VyIGlzIGxvYWRlZCAoMXMpXHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuZGF0ZS1kcm9wZG93bnMgc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlcXVpcmVkJywgdHJ1ZSk7XHJcbiAgICB9KVxyXG59LCAxMDAwKTtcclxuXHJcbi8vYWpheCBmb3JtIHJlZ2lzdGVyXHJcbiQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6ICQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuc2VyaWFsaXplKCksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1yZWdpc3RlcicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1yZWdpc3RlcicpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=