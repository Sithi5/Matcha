(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

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

/***/ "./assets/css/register-login.css":
/*!***************************************!*\
  !*** ./assets/css/register-login.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

__webpack_require__(/*! ../css/register-login.css */ "./assets/css/register-login.css"); //my personnal js


__webpack_require__(/*! ./register.js */ "./assets/js/register.js");

__webpack_require__(/*! ./login.js */ "./assets/js/login.js");

__webpack_require__(/*! ./labelFloat.js */ "./assets/js/labelFloat.js");
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
        $('#modal-register').remove();
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
        $('#modal-register').remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzP2FlY2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9ob21lLWluZGV4LmNzcz9mZDM4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvbmF2YmFyLmNzcz8zYzI5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcmVnaXN0ZXItbG9naW4uY3NzPzMwMDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFiZWxGbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwiJDIiLCJnbG9iYWwiLCJqUXVlcnkiLCJibHVyIiwidmFsIiwibGFiZWxzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImVhY2giLCJsZW5ndGgiLCJzdWJtaXQiLCJhamF4IiwidXJsIiwiYXR0ciIsInR5cGUiLCJkYXRhIiwic2VyaWFsaXplIiwic3VjY2VzcyIsIm1vZGFsIiwicmVtb3ZlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJodG1sIiwiZG9jdW1lbnQiLCJyZWFkeSIsImRyb3Bkb3duRGF0ZXBpY2tlciIsInN1Ym1pdEZvcm1hdCIsIm1pbkFnZSIsIm1heEFnZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBO0FBRUFBLG1CQUFPLENBQUMsOENBQUQsQ0FBUCxDLENBRUE7OztBQUNBQSxtQkFBTyxDQUFDLG9FQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsb0hBQUQsQ0FBUDs7QUFFQSxJQUFJQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsb0RBQUQsQ0FBZjs7QUFDQSxJQUFJRSxF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UyxFQUlQLElBSk8sQ0FBVixDLENBTUE7O0FBQ0FkLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCVyxNQUExQixDQUFpQyxZQUFXO0FBQ3hDWCxHQUFDLENBQUNZLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUViLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCYyxJQUExQixDQUErQixRQUEvQixDQURGO0FBRUhDLFFBQUksRUFBRSxNQUZIO0FBR0hDLFFBQUksRUFBRWhCLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCaUIsU0FBMUIsRUFISDtBQUlIQyxXQUFPLEVBQUUsaUJBQVNGLElBQVQsRUFBZTtBQUNwQixVQUFJQSxJQUFJLENBQUNBLElBQUwsS0FBYyxTQUFsQixFQUE2QjtBQUN6QmhCLFNBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCbUIsS0FBckIsQ0FBMkIsTUFBM0I7QUFDQW5CLFNBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCb0IsTUFBckI7QUFDQUMsZ0JBQVEsQ0FBQ0MsTUFBVDtBQUNIOztBQUNEdEIsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJ1QixJQUE3QixDQUFrQ1AsSUFBbEM7QUFDSDtBQVhFLEdBQVA7QUFhQSxTQUFPLEtBQVA7QUFDSCxDQWZELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gYXBwLmpzXHJcblxyXG5yZXF1aXJlKCcuLi9jc3MvYXBwLnNjc3MnKTtcclxuXHJcbi8vIGxvYWRzIHRoZSBqcXVlcnkgcGFja2FnZSBmcm9tIG5vZGVfbW9kdWxlc1xyXG5yZXF1aXJlKCd3ZWJwYWNrLWpxdWVyeS11aScpO1xyXG5yZXF1aXJlKCdqcXVlcnktZHJvcGRvd24tZGF0ZXBpY2tlcicpO1xyXG5cclxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyICQyID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xyXG5cclxuLy8gbG9hZHMgdGhlIGJvb3RzdHJhcCBwYWNrYWdlIGZyb20gbm9kZV9tb2R1bGVzXHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG5yZXF1aXJlKCdwb3BwZXIuanMnKTtcclxuXHJcblxyXG4vL215IHBlcnNvbm5hbCBjc3NcclxucmVxdWlyZSgnLi4vY3NzL2hvbWUtaW5kZXguY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9uYXZiYXIuY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9yZWdpc3Rlci1sb2dpbi5jc3MnKTtcclxuXHJcbi8vbXkgcGVyc29ubmFsIGpzXHJcbnJlcXVpcmUoJy4vcmVnaXN0ZXIuanMnKVxyXG5yZXF1aXJlKCcuL2xvZ2luLmpzJylcclxucmVxdWlyZSgnLi9sYWJlbEZsb2F0LmpzJykiLCIgICAgLy9zY3JpcHQgc2V0dGluZyBsYWJlbCB0b3Agb2YgZmllbGQgd2hlbiBzb21ldGhpbmcgaW5zaWRlIGZpZWxkIGFuZCBsYWJlbCBkb3duIGlmIG5vdGhpbmcgaW5zaWRlIGZpZWxkXHJcbiAgICAkKCcubGFiZWwtZmxvYXQgOmlucHV0JykuYmx1cihmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmxhYmVscygpLmFkZENsYXNzKCdmb3JjZS1sYWJlbC10b3AnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCEkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykubGFiZWxzKCkucmVtb3ZlQ2xhc3MoJ2ZvcmNlLWxhYmVsLXRvcCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy9zY3JpcHQgc2V0dGluZyBsYWJlbCB0b3Agb2YgZmllbGQgd2hlbiBzb21ldGhpbmcgaW5zaWRlIGZpZWxkIHdoZW4gcmVsb2FkIG9mIHBhZ2VcclxuICAgICQoXCIubGFiZWwtZmxvYXQgOmlucHV0XCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5sYWJlbHMoKS5hZGRDbGFzcygnZm9yY2UtbGFiZWwtdG9wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkiLCIvL2FqYXggZm9ybSBsb2dpblxyXG4kKCcjbW9kYWxfZm9ybV9sb2dpbicpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkKCcjbW9kYWxfZm9ybV9sb2dpbicpLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiAkKCcjbW9kYWxfZm9ybV9sb2dpbicpLnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZGF0YSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtcmVnaXN0ZXInKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLXJlZ2lzdGVyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1yZWdpc3RlcicpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0pOyIsIi8vc2NyaXB0IGZvciBkYXRlcGlja2VyIGZvciBiaXJ0aGRhdGUgcmVnaXN0ZXJcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuYmlydGhkYXRlLWRyb3Bkb3duJykuZHJvcGRvd25EYXRlcGlja2VyKHtcclxuICAgICAgICBzdWJtaXRGb3JtYXQ6ICd5eXl5LW1tLWRkJyxcclxuICAgICAgICBtaW5BZ2U6IDE4LFxyXG4gICAgICAgIG1heEFnZTogMTAwLFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy9zZXQgYmlydGhkYXkgc2VsZWN0IGNsYXNzIHRvIHJlcXVpcmVkIGFmdGVyIGRhdGVwaWNrZXIgaXMgbG9hZGVkICgxcylcclxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICQoJy5kYXRlLWRyb3Bkb3ducyBzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuYXR0cigncmVxdWlyZWQnLCB0cnVlKTtcclxuICAgIH0pXHJcbn0sIDEwMDApO1xyXG5cclxuLy9hamF4IGZvcm0gcmVnaXN0ZXJcclxuJCgnI21vZGFsX2Zvcm1fcmVnaXN0ZXInKS5zdWJtaXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJCgnI21vZGFsX2Zvcm1fcmVnaXN0ZXInKS5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YTogJCgnI21vZGFsX2Zvcm1fcmVnaXN0ZXInKS5zZXJpYWxpemUoKSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGEgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLXJlZ2lzdGVyJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1yZWdpc3RlcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtcmVnaXN0ZXInKS5odG1sKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9