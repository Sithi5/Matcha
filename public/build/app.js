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

/***/ "./assets/css/social-media-icons.css":
/*!*******************************************!*\
  !*** ./assets/css/social-media-icons.css ***!
  \*******************************************/
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

__webpack_require__(/*! ../css/register-login.css */ "./assets/css/register-login.css");

__webpack_require__(/*! ../css/social-media-icons.css */ "./assets/css/social-media-icons.css"); //my personnal js


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzP2FlY2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9ob21lLWluZGV4LmNzcz9mZDM4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvbmF2YmFyLmNzcz8zYzI5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcmVnaXN0ZXItbG9naW4uY3NzPzMwMDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9zb2NpYWwtbWVkaWEtaWNvbnMuY3NzP2YxMWMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFiZWxGbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwiJDIiLCJnbG9iYWwiLCJqUXVlcnkiLCJibHVyIiwidmFsIiwibGFiZWxzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImVhY2giLCJsZW5ndGgiLCJzdWJtaXQiLCJhamF4IiwidXJsIiwiYXR0ciIsInR5cGUiLCJkYXRhIiwic2VyaWFsaXplIiwic3VjY2VzcyIsIm1vZGFsIiwibG9jYXRpb24iLCJyZWxvYWQiLCJodG1sIiwiZG9jdW1lbnQiLCJyZWFkeSIsImRyb3Bkb3duRGF0ZXBpY2tlciIsInN1Ym1pdEZvcm1hdCIsIm1pbkFnZSIsIm1heEFnZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBO0FBRUFBLG1CQUFPLENBQUMsOENBQUQsQ0FBUCxDLENBRUE7OztBQUNBQSxtQkFBTyxDQUFDLG9FQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsb0hBQUQsQ0FBUDs7QUFFQSxJQUFJQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsb0RBQUQsQ0FBZjs7QUFDQSxJQUFJRSxFQUFFLEdBQUdGLG1CQUFPLENBQUMsb0RBQUQsQ0FBaEI7O0FBRUFHLE1BQU0sQ0FBQ0YsQ0FBUCxHQUFXRSxNQUFNLENBQUNDLE1BQVAsR0FBZ0JILENBQTNCLEMsQ0FFQTs7QUFDQUQsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDhEQUFELENBQVAsQyxDQUdBOzs7QUFDQUEsbUJBQU8sQ0FBQywwREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGtEQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsa0VBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQywwRUFBRCxDQUFQLEMsQ0FFQTs7O0FBQ0FBLG1CQUFPLENBQUMsOENBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx3Q0FBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGtEQUFELENBQVAsQzs7Ozs7Ozs7Ozs7O0FDM0JJO0FBQ0FDLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCSSxJQUF6QixDQUE4QixZQUFXO0FBQ3JDLE1BQUlKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssR0FBUixFQUFKLEVBQW1CO0FBQ2ZMLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sTUFBUixHQUFpQkMsUUFBakIsQ0FBMEIsaUJBQTFCO0FBQ0gsR0FGRCxNQUVPLElBQUksQ0FBQ1AsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxHQUFSLEVBQUwsRUFBb0I7QUFDdkJMLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sTUFBUixHQUFpQkUsV0FBakIsQ0FBNkIsaUJBQTdCO0FBQ0g7QUFDSixDQU5ELEUsQ0FRQTs7QUFDQVIsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJTLElBQXpCLENBQThCLFlBQVc7QUFDckMsTUFBSVQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxHQUFSLEdBQWNLLE1BQWQsSUFBd0IsQ0FBNUIsRUFBK0I7QUFDM0JWLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sTUFBUixHQUFpQkMsUUFBakIsQ0FBMEIsaUJBQTFCO0FBQ0g7QUFDSixDQUpELEU7Ozs7Ozs7Ozs7OztBQ1ZKO0FBQ0FQLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCVyxNQUF2QixDQUE4QixZQUFXO0FBQ3JDWCxHQUFDLENBQUNZLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUViLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCYyxJQUF2QixDQUE0QixRQUE1QixDQURGO0FBRUhDLFFBQUksRUFBRSxNQUZIO0FBR0hDLFFBQUksRUFBRWhCLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCaUIsU0FBdkIsRUFISDtBQUlIQyxXQUFPLEVBQUUsaUJBQVNGLElBQVQsRUFBZTtBQUNwQixVQUFJQSxJQUFJLENBQUNBLElBQUwsS0FBYyxTQUFsQixFQUE2QjtBQUN6QmhCLFNBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCbUIsS0FBckIsQ0FBMkIsTUFBM0I7QUFDQUMsZ0JBQVEsQ0FBQ0MsTUFBVDtBQUNIOztBQUNEckIsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJzQixJQUE3QixDQUFrQ04sSUFBbEM7QUFFSDtBQVhFLEdBQVA7QUFhQSxTQUFPLEtBQVA7QUFDSCxDQWZELEU7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQWhCLENBQUMsQ0FBQ3VCLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekJ4QixHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QnlCLGtCQUF6QixDQUE0QztBQUN4Q0MsZ0JBQVksRUFBRSxZQUQwQjtBQUV4Q0MsVUFBTSxFQUFFLEVBRmdDO0FBR3hDQyxVQUFNLEVBQUU7QUFIZ0MsR0FBNUM7QUFLSCxDQU5ELEUsQ0FRQTs7QUFDQUMsVUFBVSxDQUFDLFlBQVc7QUFDbEI3QixHQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QlMsSUFBNUIsQ0FBaUMsWUFBVztBQUN4Q1QsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxJQUFSLENBQWEsVUFBYixFQUF5QixJQUF6QjtBQUNILEdBRkQ7QUFHSCxDQUpTLEVBSVAsSUFKTyxDQUFWLEMsQ0FNQTs7QUFDQWQsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJXLE1BQTFCLENBQWlDLFlBQVc7QUFDeENYLEdBQUMsQ0FBQ1ksSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRWIsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJjLElBQTFCLENBQStCLFFBQS9CLENBREY7QUFFSEMsUUFBSSxFQUFFLE1BRkg7QUFHSEMsUUFBSSxFQUFFaEIsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJpQixTQUExQixFQUhIO0FBSUhDLFdBQU8sRUFBRSxpQkFBU0YsSUFBVCxFQUFlO0FBQ3BCLFVBQUlBLElBQUksQ0FBQ0EsSUFBTCxLQUFjLFNBQWxCLEVBQTZCO0FBQ3pCaEIsU0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJtQixLQUFyQixDQUEyQixNQUEzQjtBQUNBQyxnQkFBUSxDQUFDQyxNQUFUO0FBQ0g7O0FBQ0RyQixPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QnNCLElBQTdCLENBQWtDTixJQUFsQztBQUNIO0FBVkUsR0FBUDtBQVlBLFNBQU8sS0FBUDtBQUNILENBZEQsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBhcHAuanNcclxuXHJcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xyXG5cclxuLy8gbG9hZHMgdGhlIGpxdWVyeSBwYWNrYWdlIGZyb20gbm9kZV9tb2R1bGVzXHJcbnJlcXVpcmUoJ3dlYnBhY2stanF1ZXJ5LXVpJyk7XHJcbnJlcXVpcmUoJ2pxdWVyeS1kcm9wZG93bi1kYXRlcGlja2VyJyk7XHJcblxyXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgJDIgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XHJcblxyXG4vLyBsb2FkcyB0aGUgYm9vdHN0cmFwIHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnJlcXVpcmUoJ3BvcHBlci5qcycpO1xyXG5cclxuXHJcbi8vbXkgcGVyc29ubmFsIGNzc1xyXG5yZXF1aXJlKCcuLi9jc3MvaG9tZS1pbmRleC5jc3MnKTtcclxucmVxdWlyZSgnLi4vY3NzL25hdmJhci5jc3MnKTtcclxucmVxdWlyZSgnLi4vY3NzL3JlZ2lzdGVyLWxvZ2luLmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3Mvc29jaWFsLW1lZGlhLWljb25zLmNzcycpO1xyXG5cclxuLy9teSBwZXJzb25uYWwganNcclxucmVxdWlyZSgnLi9yZWdpc3Rlci5qcycpXHJcbnJlcXVpcmUoJy4vbG9naW4uanMnKVxyXG5yZXF1aXJlKCcuL2xhYmVsRmxvYXQuanMnKSIsIiAgICAvL3NjcmlwdCBzZXR0aW5nIGxhYmVsIHRvcCBvZiBmaWVsZCB3aGVuIHNvbWV0aGluZyBpbnNpZGUgZmllbGQgYW5kIGxhYmVsIGRvd24gaWYgbm90aGluZyBpbnNpZGUgZmllbGRcclxuICAgICQoJy5sYWJlbC1mbG9hdCA6aW5wdXQnKS5ibHVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykubGFiZWxzKCkuYWRkQ2xhc3MoJ2ZvcmNlLWxhYmVsLXRvcCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoISQodGhpcykudmFsKCkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5sYWJlbHMoKS5yZW1vdmVDbGFzcygnZm9yY2UtbGFiZWwtdG9wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvL3NjcmlwdCBzZXR0aW5nIGxhYmVsIHRvcCBvZiBmaWVsZCB3aGVuIHNvbWV0aGluZyBpbnNpZGUgZmllbGQgd2hlbiByZWxvYWQgb2YgcGFnZVxyXG4gICAgJChcIi5sYWJlbC1mbG9hdCA6aW5wdXRcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmxhYmVscygpLmFkZENsYXNzKCdmb3JjZS1sYWJlbC10b3AnKTtcclxuICAgICAgICB9XHJcbiAgICB9KSIsIi8vYWpheCBmb3JtIGxvZ2luXHJcbiQoJyNtb2RhbF9mb3JtX2xvZ2luJykuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICQoJyNtb2RhbF9mb3JtX2xvZ2luJykuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6ICQoJyNtb2RhbF9mb3JtX2xvZ2luJykuc2VyaWFsaXplKCksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1yZWdpc3RlcicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1yZWdpc3RlcicpLmh0bWwoZGF0YSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KTsiLCIvL3NjcmlwdCBmb3IgZGF0ZXBpY2tlciBmb3IgYmlydGhkYXRlIHJlZ2lzdGVyXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmJpcnRoZGF0ZS1kcm9wZG93bicpLmRyb3Bkb3duRGF0ZXBpY2tlcih7XHJcbiAgICAgICAgc3VibWl0Rm9ybWF0OiAneXl5eS1tbS1kZCcsXHJcbiAgICAgICAgbWluQWdlOiAxOCxcclxuICAgICAgICBtYXhBZ2U6IDEwMCxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vc2V0IGJpcnRoZGF5IHNlbGVjdCBjbGFzcyB0byByZXF1aXJlZCBhZnRlciBkYXRlcGlja2VyIGlzIGxvYWRlZCAoMXMpXHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuZGF0ZS1kcm9wZG93bnMgc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlcXVpcmVkJywgdHJ1ZSk7XHJcbiAgICB9KVxyXG59LCAxMDAwKTtcclxuXHJcbi8vYWpheCBmb3JtIHJlZ2lzdGVyXHJcbiQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6ICQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuc2VyaWFsaXplKCksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1yZWdpc3RlcicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1yZWdpc3RlcicpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=