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

$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});
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

/* WEBPACK VAR INJECTION */(function($, jQuery) {//ajax form register
$('#modal_form_login').submit(function () {
  jQuery.ajax({
    url: $('#modal_form_login').attr('action'),
    type: 'POST',
    data: $('#modal_form_login').serialize(),
    success: function success(data) {
      if (data.data === 'success') {
        $('#modal-login').modal('hide');
        location.reload();
      }

      $('#modal-content-login').html(data);
    }
  });
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvaG9tZS1pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9uYXZiYXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcmVnaXN0ZXItbG9naW4uY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xhYmVsRmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsIiQyIiwiZ2xvYmFsIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsInBvcG92ZXIiLCJibHVyIiwidmFsIiwibGFiZWxzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImVhY2giLCJsZW5ndGgiLCJzdWJtaXQiLCJhamF4IiwidXJsIiwiYXR0ciIsInR5cGUiLCJkYXRhIiwic2VyaWFsaXplIiwic3VjY2VzcyIsIm1vZGFsIiwibG9jYXRpb24iLCJyZWxvYWQiLCJodG1sIiwiZHJvcGRvd25EYXRlcGlja2VyIiwic3VibWl0Rm9ybWF0IiwibWluQWdlIiwibWF4QWdlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUE7QUFFQUEsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFQLEMsQ0FFQTs7O0FBQ0FBLG1CQUFPLENBQUMsb0VBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxvSEFBRCxDQUFQOztBQUVBLElBQUlDLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFmOztBQUNBLElBQUlFLEVBQUUsR0FBR0YsbUJBQU8sQ0FB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Q0FBYSxVQUFiLEVBQXlCLElBQXpCO0FBQ0gsR0FGRDtBQUdILENBSlMsRUFJUCxJQUpPLENBQVYsQyxDQU1BOztBQUNBakIsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJjLE1BQTFCLENBQWlDLFlBQVc7QUFDeENkLEdBQUMsQ0FBQ2UsSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRWhCLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCaUIsSUFBMUIsQ0FBK0IsUUFBL0IsQ0FERjtBQUVIQyxRQUFJLEVBQUUsTUFGSDtBQUdIQyxRQUFJLEVBQUVuQixDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQm9CLFNBQTFCLEVBSEg7QUFJSEMsV0FBTyxFQUFFLGlCQUFTRixJQUFULEVBQWU7QUFDcEIsVUFBSUEsSUFBSSxDQUFDQSxJQUFMLEtBQWMsU0FBbEIsRUFBNkI7QUFDekJuQixTQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQnNCLEtBQXJCLENBQTJCLE1BQTNCO0FBQ0FDLGdCQUFRLENBQUNDLE1BQVQ7QUFDSDs7QUFDRHhCLE9BQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCeUIsSUFBN0IsQ0FBa0NOLElBQWxDO0FBQ0g7QUFWRSxHQUFQO0FBWUEsU0FBTyxLQUFQO0FBQ0gsQ0FkRCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGFwcC5qc1xyXG5cclxucmVxdWlyZSgnLi4vY3NzL2FwcC5zY3NzJyk7XHJcblxyXG4vLyBsb2FkcyB0aGUganF1ZXJ5IHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcclxucmVxdWlyZSgnd2VicGFjay1qcXVlcnktdWknKTtcclxucmVxdWlyZSgnanF1ZXJ5LWRyb3Bkb3duLWRhdGVwaWNrZXInKTtcclxuXHJcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciAkMiA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcclxuXHJcbi8vIGxvYWRzIHRoZSBib290c3RyYXAgcGFja2FnZSBmcm9tIG5vZGVfbW9kdWxlc1xyXG5yZXF1aXJlKCdib290c3RyYXAnKTtcclxucmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcblxyXG5cclxuLy9teSBwZXJzb25uYWwgY3NzXHJcbnJlcXVpcmUoJy4uL2Nzcy9ob21lLWluZGV4LmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvbmF2YmFyLmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvcmVnaXN0ZXItbG9naW4uY3NzJyk7XHJcblxyXG4vL215IHBlcnNvbm5hbCBqc1xyXG5yZXF1aXJlKCcuL3JlZ2lzdGVyLmpzJylcclxucmVxdWlyZSgnLi9sb2dpbi5qcycpXHJcbnJlcXVpcmUoJy4vbGFiZWxGbG9hdC5qcycpXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XHJcbn0pOyIsIiAgICAvL3NjcmlwdCBzZXR0aW5nIGxhYmVsIHRvcCBvZiBmaWVsZCB3aGVuIHNvbWV0aGluZyBpbnNpZGUgZmllbGQgYW5kIGxhYmVsIGRvd24gaWYgbm90aGluZyBpbnNpZGUgZmllbGRcclxuICAgICQoJy5sYWJlbC1mbG9hdCA6aW5wdXQnKS5ibHVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykubGFiZWxzKCkuYWRkQ2xhc3MoJ2ZvcmNlLWxhYmVsLXRvcCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoISQodGhpcykudmFsKCkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5sYWJlbHMoKS5yZW1vdmVDbGFzcygnZm9yY2UtbGFiZWwtdG9wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvL3NjcmlwdCBzZXR0aW5nIGxhYmVsIHRvcCBvZiBmaWVsZCB3aGVuIHNvbWV0aGluZyBpbnNpZGUgZmllbGQgd2hlbiByZWxvYWQgb2YgcGFnZVxyXG4gICAgJChcIi5sYWJlbC1mbG9hdCA6aW5wdXRcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmxhYmVscygpLmFkZENsYXNzKCdmb3JjZS1sYWJlbC10b3AnKTtcclxuICAgICAgICB9XHJcbiAgICB9KSIsIi8vYWpheCBmb3JtIHJlZ2lzdGVyXHJcblxyXG4kKCcjbW9kYWxfZm9ybV9sb2dpbicpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICB1cmw6ICQoJyNtb2RhbF9mb3JtX2xvZ2luJykuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6ICQoJyNtb2RhbF9mb3JtX2xvZ2luJykuc2VyaWFsaXplKCksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1sb2dpbicpLm1vZGFsKCdoaWRlJylcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LWxvZ2luJykuaHRtbChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufSk7IiwiLy9zY3JpcHQgZm9yIGRhdGVwaWNrZXIgZm9yIGJpcnRoZGF0ZSByZWdpc3RlclxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJy5iaXJ0aGRhdGUtZHJvcGRvd24nKS5kcm9wZG93bkRhdGVwaWNrZXIoe1xyXG4gICAgICAgIHN1Ym1pdEZvcm1hdDogJ3l5eXktbW0tZGQnLFxyXG4gICAgICAgIG1pbkFnZTogMTgsXHJcbiAgICAgICAgbWF4QWdlOiAxMDAsXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vL3NldCBiaXJ0aGRheSBzZWxlY3QgY2xhc3MgdG8gcmVxdWlyZWQgYWZ0ZXIgZGF0ZXBpY2tlciBpcyBsb2FkZWQgKDFzKVxyXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmRhdGUtZHJvcGRvd25zIHNlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdyZXF1aXJlZCcsIHRydWUpO1xyXG4gICAgfSlcclxufSwgMTAwMCk7XHJcblxyXG4vL2FqYXggZm9ybSByZWdpc3RlclxyXG4kKCcjbW9kYWxfZm9ybV9yZWdpc3RlcicpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkKCcjbW9kYWxfZm9ybV9yZWdpc3RlcicpLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiAkKCcjbW9kYWxfZm9ybV9yZWdpc3RlcicpLnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZGF0YSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtcmVnaXN0ZXInKS5tb2RhbCgnaGlkZScpXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1yZWdpc3RlcicpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=