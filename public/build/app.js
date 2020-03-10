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

__webpack_require__(/*! ../css/admin-user.css */ "./assets/css/admin-user.css"); //my personnal js


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FkbWluLWluZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FkbWluLXVzZXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9ob21lLWluZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL25hdmJhci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9yZWdpc3Rlci1sb2dpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9zb2NpYWwtbWVkaWEtaWNvbnMuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xhYmVsRmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsIiQyIiwiZ2xvYmFsIiwialF1ZXJ5IiwiYmx1ciIsInZhbCIsImxhYmVscyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJlYWNoIiwibGVuZ3RoIiwic3VibWl0IiwiYWpheCIsInVybCIsImF0dHIiLCJ0eXBlIiwiZGF0YSIsInNlcmlhbGl6ZSIsInN1Y2Nlc3MiLCJtb2RhbCIsImxvY2F0aW9uIiwicmVsb2FkIiwiaHRtbCIsImRvY3VtZW50IiwicmVhZHkiLCJkcm9wZG93bkRhdGVwaWNrZXIiLCJzdWJtaXRGb3JtYXQiLCJtaW5BZ2UiLCJtYXhBZ2UiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7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Q0MsZ0JBQVksRUFBRSxZQUQwQjtBQUV4Q0MsVUFBTSxFQUFFLEVBRmdDO0FBR3hDQyxVQUFNLEVBQUU7QUFIZ0MsR0FBNUM7QUFLSCxDQU5ELEUsQ0FRQTs7QUFDQUMsVUFBVSxDQUFDLFlBQVc7QUFDbEI3QixHQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QlMsSUFBNUIsQ0FBaUMsWUFBVztBQUN4Q1QsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxJQUFSLENBQWEsVUFBYixFQUF5QixJQUF6QjtBQUNILEdBRkQ7QUFHSCxDQUpTLEVBSVAsSUFKTyxDQUFWLEMsQ0FNQTs7QUFDQWQsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJXLE1BQTFCLENBQWlDLFlBQVc7QUFDeENYLEdBQUMsQ0FBQ1ksSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRWIsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJjLElBQTFCLENBQStCLFFBQS9CLENBREY7QUFFSEMsUUFBSSxFQUFFLE1BRkg7QUFHSEMsUUFBSSxFQUFFaEIsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJpQixTQUExQixFQUhIO0FBSUhDLFdBQU8sRUFBRSxpQkFBU0YsSUFBVCxFQUFlO0FBQ3BCLFVBQUlBLElBQUksQ0FBQ0EsSUFBTCxLQUFjLFNBQWxCLEVBQTZCO0FBQ3pCaEIsU0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJtQixLQUFyQixDQUEyQixNQUEzQjtBQUNBQyxnQkFBUSxDQUFDQyxNQUFUO0FBQ0g7O0FBQ0RyQixPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QnNCLElBQTdCLENBQWtDTixJQUFsQztBQUNIO0FBVkUsR0FBUDtBQVlBLFNBQU8sS0FBUDtBQUNILENBZEQsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBhcHAuanNcclxuXHJcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xyXG5cclxuLy8gbG9hZHMgdGhlIGpxdWVyeSBwYWNrYWdlIGZyb20gbm9kZV9tb2R1bGVzXHJcbnJlcXVpcmUoJ3dlYnBhY2stanF1ZXJ5LXVpJyk7XHJcbnJlcXVpcmUoJ2pxdWVyeS1kcm9wZG93bi1kYXRlcGlja2VyJyk7XHJcblxyXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgJDIgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XHJcblxyXG4vLyBsb2FkcyB0aGUgYm9vdHN0cmFwIHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnJlcXVpcmUoJ3BvcHBlci5qcycpO1xyXG5cclxuXHJcbi8vbXkgcGVyc29ubmFsIGNzc1xyXG5yZXF1aXJlKCcuLi9jc3MvaG9tZS1pbmRleC5jc3MnKTtcclxucmVxdWlyZSgnLi4vY3NzL25hdmJhci5jc3MnKTtcclxucmVxdWlyZSgnLi4vY3NzL3JlZ2lzdGVyLWxvZ2luLmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3Mvc29jaWFsLW1lZGlhLWljb25zLmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvYWRtaW4taW5kZXguY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9hZG1pbi11c2VyLmNzcycpO1xyXG5cclxuLy9teSBwZXJzb25uYWwganNcclxucmVxdWlyZSgnLi9yZWdpc3Rlci5qcycpXHJcbnJlcXVpcmUoJy4vbG9naW4uanMnKVxyXG5yZXF1aXJlKCcuL2xhYmVsRmxvYXQuanMnKVxyXG5yZXF1aXJlKCcuL2FkbWluVXNlci5qcycpIiwiICAgIC8vc2NyaXB0IHNldHRpbmcgbGFiZWwgdG9wIG9mIGZpZWxkIHdoZW4gc29tZXRoaW5nIGluc2lkZSBmaWVsZCBhbmQgbGFiZWwgZG93biBpZiBub3RoaW5nIGluc2lkZSBmaWVsZFxyXG4gICAgJCgnLmxhYmVsLWZsb2F0IDppbnB1dCcpLmJsdXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5sYWJlbHMoKS5hZGRDbGFzcygnZm9yY2UtbGFiZWwtdG9wJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmxhYmVscygpLnJlbW92ZUNsYXNzKCdmb3JjZS1sYWJlbC10b3AnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vc2NyaXB0IHNldHRpbmcgbGFiZWwgdG9wIG9mIGZpZWxkIHdoZW4gc29tZXRoaW5nIGluc2lkZSBmaWVsZCB3aGVuIHJlbG9hZCBvZiBwYWdlXHJcbiAgICAkKFwiLmxhYmVsLWZsb2F0IDppbnB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICQodGhpcykubGFiZWxzKCkuYWRkQ2xhc3MoJ2ZvcmNlLWxhYmVsLXRvcCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pIiwiLy9hamF4IGZvcm0gbG9naW5cclxuJCgnI21vZGFsX2Zvcm1fbG9naW4nKS5zdWJtaXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJCgnI21vZGFsX2Zvcm1fbG9naW4nKS5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YTogJCgnI21vZGFsX2Zvcm1fbG9naW4nKS5zZXJpYWxpemUoKSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGEgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLXJlZ2lzdGVyJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LXJlZ2lzdGVyJykuaHRtbChkYXRhKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0pOyIsIi8vc2NyaXB0IGZvciBkYXRlcGlja2VyIGZvciBiaXJ0aGRhdGUgcmVnaXN0ZXJcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuYmlydGhkYXRlLWRyb3Bkb3duJykuZHJvcGRvd25EYXRlcGlja2VyKHtcclxuICAgICAgICBzdWJtaXRGb3JtYXQ6ICd5eXl5LW1tLWRkJyxcclxuICAgICAgICBtaW5BZ2U6IDE4LFxyXG4gICAgICAgIG1heEFnZTogMTAwLFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy9zZXQgYmlydGhkYXkgc2VsZWN0IGNsYXNzIHRvIHJlcXVpcmVkIGFmdGVyIGRhdGVwaWNrZXIgaXMgbG9hZGVkICgxcylcclxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICQoJy5kYXRlLWRyb3Bkb3ducyBzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuYXR0cigncmVxdWlyZWQnLCB0cnVlKTtcclxuICAgIH0pXHJcbn0sIDEwMDApO1xyXG5cclxuLy9hamF4IGZvcm0gcmVnaXN0ZXJcclxuJCgnI21vZGFsX2Zvcm1fcmVnaXN0ZXInKS5zdWJtaXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJCgnI21vZGFsX2Zvcm1fcmVnaXN0ZXInKS5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YTogJCgnI21vZGFsX2Zvcm1fcmVnaXN0ZXInKS5zZXJpYWxpemUoKSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGEgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLXJlZ2lzdGVyJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LXJlZ2lzdGVyJykuaHRtbChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==