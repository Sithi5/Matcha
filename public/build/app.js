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

/***/ "./assets/css/list-image.css":
/*!***********************************!*\
  !*** ./assets/css/list-image.css ***!
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

__webpack_require__(/*! ../css/modal-image.css */ "./assets/css/modal-image.css");

__webpack_require__(/*! ../css/list-image.css */ "./assets/css/list-image.css"); //my personnal js


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FkbWluLWluZGV4LmNzcz9jZGRlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvYWRtaW4tdXNlci5jc3M/ZTUzMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzP2FlY2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9ob21lLWluZGV4LmNzcz9mZDM4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvbGlzdC1pbWFnZS5jc3M/ZmE2MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL21vZGFsLWltYWdlLmNzcz9kNDI1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvbmF2YmFyLmNzcz8zYzI5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcHJvZmlsLmNzcz8yMDVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcmVnaXN0ZXItbG9naW4uY3NzPzMwMDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9zb2NpYWwtbWVkaWEtaWNvbnMuY3NzP2YxMWMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFiZWxGbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwiJDIiLCJnbG9iYWwiLCJqUXVlcnkiLCJibHVyIiwidmFsIiwibGFiZWxzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImVhY2giLCJsZW5ndGgiLCJzdWJtaXQiLCJhamF4IiwidXJsIiwiYXR0ciIsInR5cGUiLCJkYXRhIiwic2VyaWFsaXplIiwic3VjY2VzcyIsIm1vZGFsIiwibG9jYXRpb24iLCJyZWxvYWQiLCJodG1sIiwiZG9jdW1lbnQiLCJyZWFkeSIsImRyb3Bkb3duRGF0ZXBpY2tlciIsInN1Ym1pdEZvcm1hdCIsIm1pbkFnZSIs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aUJBQUQsQ0FBRCxDQUFxQm1CLEtBQXJCLENBQTJCLE1BQTNCO0FBQ0FDLGdCQUFRLENBQUNDLE1BQVQ7QUFDSDs7QUFDRHJCLE9BQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCc0IsSUFBN0IsQ0FBa0NOLElBQWxDO0FBQ0g7QUFWRSxHQUFQO0FBWUEsU0FBTyxLQUFQO0FBQ0gsQ0FkRCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGFwcC5qc1xyXG5cclxucmVxdWlyZSgnLi4vY3NzL2FwcC5zY3NzJyk7XHJcblxyXG4vLyBsb2FkcyB0aGUganF1ZXJ5IHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcclxucmVxdWlyZSgnd2VicGFjay1qcXVlcnktdWknKTtcclxucmVxdWlyZSgnanF1ZXJ5LWRyb3Bkb3duLWRhdGVwaWNrZXInKTtcclxuXHJcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciAkMiA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcclxuXHJcbi8vIGxvYWRzIHRoZSBib290c3RyYXAgcGFja2FnZSBmcm9tIG5vZGVfbW9kdWxlc1xyXG5yZXF1aXJlKCdib290c3RyYXAnKTtcclxucmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcblxyXG5cclxuLy9teSBwZXJzb25uYWwgY3NzXHJcbnJlcXVpcmUoJy4uL2Nzcy9ob21lLWluZGV4LmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvbmF2YmFyLmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvcmVnaXN0ZXItbG9naW4uY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9zb2NpYWwtbWVkaWEtaWNvbnMuY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9hZG1pbi1pbmRleC5jc3MnKTtcclxucmVxdWlyZSgnLi4vY3NzL2FkbWluLXVzZXIuY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9wcm9maWwuY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9tb2RhbC1pbWFnZS5jc3MnKTtcclxucmVxdWlyZSgnLi4vY3NzL2xpc3QtaW1hZ2UuY3NzJyk7XHJcblxyXG4vL215IHBlcnNvbm5hbCBqc1xyXG5yZXF1aXJlKCcuL3JlZ2lzdGVyLmpzJylcclxucmVxdWlyZSgnLi9sb2dpbi5qcycpXHJcbnJlcXVpcmUoJy4vbGFiZWxGbG9hdC5qcycpXHJcbnJlcXVpcmUoJy4vYWRtaW5Vc2VyLmpzJykiLCIgICAgLy9zY3JpcHQgc2V0dGluZyBsYWJlbCB0b3Agb2YgZmllbGQgd2hlbiBzb21ldGhpbmcgaW5zaWRlIGZpZWxkIGFuZCBsYWJlbCBkb3duIGlmIG5vdGhpbmcgaW5zaWRlIGZpZWxkXHJcbiAgICAkKCcubGFiZWwtZmxvYXQgOmlucHV0JykuYmx1cihmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmxhYmVscygpLmFkZENsYXNzKCdmb3JjZS1sYWJlbC10b3AnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCEkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykubGFiZWxzKCkucmVtb3ZlQ2xhc3MoJ2ZvcmNlLWxhYmVsLXRvcCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy9zY3JpcHQgc2V0dGluZyBsYWJlbCB0b3Agb2YgZmllbGQgd2hlbiBzb21ldGhpbmcgaW5zaWRlIGZpZWxkIHdoZW4gcmVsb2FkIG9mIHBhZ2VcclxuICAgICQoXCIubGFiZWwtZmxvYXQgOmlucHV0XCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5sYWJlbHMoKS5hZGRDbGFzcygnZm9yY2UtbGFiZWwtdG9wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkiLCIvL2FqYXggZm9ybSBsb2dpblxyXG4kKCcjbW9kYWxfZm9ybV9sb2dpbicpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkKCcjbW9kYWxfZm9ybV9sb2dpbicpLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiAkKCcjbW9kYWxfZm9ybV9sb2dpbicpLnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZGF0YSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtcmVnaXN0ZXInKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtcmVnaXN0ZXInKS5odG1sKGRhdGEpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufSk7IiwiLy9zY3JpcHQgZm9yIGRhdGVwaWNrZXIgZm9yIGJpcnRoZGF0ZSByZWdpc3RlclxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJy5iaXJ0aGRhdGUtZHJvcGRvd24nKS5kcm9wZG93bkRhdGVwaWNrZXIoe1xyXG4gICAgICAgIHN1Ym1pdEZvcm1hdDogJ3l5eXktbW0tZGQnLFxyXG4gICAgICAgIG1pbkFnZTogMTgsXHJcbiAgICAgICAgbWF4QWdlOiAxMDAsXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vL3NldCBiaXJ0aGRheSBzZWxlY3QgY2xhc3MgdG8gcmVxdWlyZWQgYWZ0ZXIgZGF0ZXBpY2tlciBpcyBsb2FkZWQgKDFzKVxyXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmRhdGUtZHJvcGRvd25zIHNlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdyZXF1aXJlZCcsIHRydWUpO1xyXG4gICAgfSlcclxufSwgMTAwMCk7XHJcblxyXG4vL2FqYXggZm9ybSByZWdpc3RlclxyXG4kKCcjbW9kYWxfZm9ybV9yZWdpc3RlcicpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkKCcjbW9kYWxfZm9ybV9yZWdpc3RlcicpLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiAkKCcjbW9kYWxfZm9ybV9yZWdpc3RlcicpLnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZGF0YSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtcmVnaXN0ZXInKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtcmVnaXN0ZXInKS5odG1sKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9