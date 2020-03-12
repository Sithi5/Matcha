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

/***/ "./assets/css/modal-image.css":
/*!************************************!*\
  !*** ./assets/css/modal-image.css ***!
  \************************************/
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

__webpack_require__(/*! ../css/profil.css */ "./assets/css/profil.css");

__webpack_require__(/*! ../css/modal-image.css */ "./assets/css/modal-image.css"); //my personnal js


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FkbWluLWluZGV4LmNzcz9jZGRlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvYWRtaW4tdXNlci5jc3M/ZTUzMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzP2FlY2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9ob21lLWluZGV4LmNzcz9mZDM4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvbW9kYWwtaW1hZ2UuY3NzP2Q0MjUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9uYXZiYXIuY3NzPzNjMjkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9wcm9maWwuY3NzPzIwNWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9yZWdpc3Rlci1sb2dpbi5jc3M/MzAwMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NvY2lhbC1tZWRpYS1pY29ucy5jc3M/ZjExYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sYWJlbEZsb2F0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIiQiLCIkMiIsImdsb2JhbCIsImpRdWVyeSIsImJsdXIiLCJ2YWwiLCJsYWJlbHMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZWFjaCIsImxlbmd0aCIsInN1Ym1pdCIsImFqYXgiLCJ1cmwiLCJhdHRyIiwidHlwZSIsImRhdGEiLCJzZXJpYWxpemUiLCJzdWNjZXNzIiwibW9kYWwiLCJsb2NhdGlvbiIsInJlbG9hZCIsImh0bWwiLCJkb2N1bWVudCIsInJlYWR5IiwiZHJvcGRvd25EYXRlcGlja2VyIiwic3VibWl0Rm9ybWF0IiwibWluQWdlIiwibWF4QWdlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FB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LENBQTZCc0IsSUFBN0IsQ0FBa0NOLElBQWxDO0FBQ0g7QUFWRSxHQUFQO0FBWUEsU0FBTyxLQUFQO0FBQ0gsQ0FkRCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGFwcC5qc1xyXG5cclxucmVxdWlyZSgnLi4vY3NzL2FwcC5zY3NzJyk7XHJcblxyXG4vLyBsb2FkcyB0aGUganF1ZXJ5IHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcclxucmVxdWlyZSgnd2VicGFjay1qcXVlcnktdWknKTtcclxucmVxdWlyZSgnanF1ZXJ5LWRyb3Bkb3duLWRhdGVwaWNrZXInKTtcclxuXHJcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciAkMiA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcclxuXHJcbi8vIGxvYWRzIHRoZSBib290c3RyYXAgcGFja2FnZSBmcm9tIG5vZGVfbW9kdWxlc1xyXG5yZXF1aXJlKCdib290c3RyYXAnKTtcclxucmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcblxyXG5cclxuLy9teSBwZXJzb25uYWwgY3NzXHJcbnJlcXVpcmUoJy4uL2Nzcy9ob21lLWluZGV4LmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvbmF2YmFyLmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvcmVnaXN0ZXItbG9naW4uY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9zb2NpYWwtbWVkaWEtaWNvbnMuY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9hZG1pbi1pbmRleC5jc3MnKTtcclxucmVxdWlyZSgnLi4vY3NzL2FkbWluLXVzZXIuY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9wcm9maWwuY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9tb2RhbC1pbWFnZS5jc3MnKTtcclxuXHJcbi8vbXkgcGVyc29ubmFsIGpzXHJcbnJlcXVpcmUoJy4vcmVnaXN0ZXIuanMnKVxyXG5yZXF1aXJlKCcuL2xvZ2luLmpzJylcclxucmVxdWlyZSgnLi9sYWJlbEZsb2F0LmpzJylcclxucmVxdWlyZSgnLi9hZG1pblVzZXIuanMnKSIsIiAgICAvL3NjcmlwdCBzZXR0aW5nIGxhYmVsIHRvcCBvZiBmaWVsZCB3aGVuIHNvbWV0aGluZyBpbnNpZGUgZmllbGQgYW5kIGxhYmVsIGRvd24gaWYgbm90aGluZyBpbnNpZGUgZmllbGRcclxuICAgICQoJy5sYWJlbC1mbG9hdCA6aW5wdXQnKS5ibHVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykubGFiZWxzKCkuYWRkQ2xhc3MoJ2ZvcmNlLWxhYmVsLXRvcCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoISQodGhpcykudmFsKCkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5sYWJlbHMoKS5yZW1vdmVDbGFzcygnZm9yY2UtbGFiZWwtdG9wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvL3NjcmlwdCBzZXR0aW5nIGxhYmVsIHRvcCBvZiBmaWVsZCB3aGVuIHNvbWV0aGluZyBpbnNpZGUgZmllbGQgd2hlbiByZWxvYWQgb2YgcGFnZVxyXG4gICAgJChcIi5sYWJlbC1mbG9hdCA6aW5wdXRcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmxhYmVscygpLmFkZENsYXNzKCdmb3JjZS1sYWJlbC10b3AnKTtcclxuICAgICAgICB9XHJcbiAgICB9KSIsIi8vYWpheCBmb3JtIGxvZ2luXHJcbiQoJyNtb2RhbF9mb3JtX2xvZ2luJykuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICQoJyNtb2RhbF9mb3JtX2xvZ2luJykuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6ICQoJyNtb2RhbF9mb3JtX2xvZ2luJykuc2VyaWFsaXplKCksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1yZWdpc3RlcicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1yZWdpc3RlcicpLmh0bWwoZGF0YSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KTsiLCIvL3NjcmlwdCBmb3IgZGF0ZXBpY2tlciBmb3IgYmlydGhkYXRlIHJlZ2lzdGVyXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmJpcnRoZGF0ZS1kcm9wZG93bicpLmRyb3Bkb3duRGF0ZXBpY2tlcih7XHJcbiAgICAgICAgc3VibWl0Rm9ybWF0OiAneXl5eS1tbS1kZCcsXHJcbiAgICAgICAgbWluQWdlOiAxOCxcclxuICAgICAgICBtYXhBZ2U6IDEwMCxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vc2V0IGJpcnRoZGF5IHNlbGVjdCBjbGFzcyB0byByZXF1aXJlZCBhZnRlciBkYXRlcGlja2VyIGlzIGxvYWRlZCAoMXMpXHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuZGF0ZS1kcm9wZG93bnMgc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlcXVpcmVkJywgdHJ1ZSk7XHJcbiAgICB9KVxyXG59LCAxMDAwKTtcclxuXHJcbi8vYWpheCBmb3JtIHJlZ2lzdGVyXHJcbiQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6ICQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuc2VyaWFsaXplKCksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1yZWdpc3RlcicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1yZWdpc3RlcicpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=