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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvaG9tZS1pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9uYXZiYXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcmVnaXN0ZXItbG9naW4uY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xhYmVsRmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsIiQyIiwiZ2xvYmFsIiwialF1ZXJ5IiwiYmx1ciIsInZhbCIsImxhYmVscyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJlYWNoIiwibGVuZ3RoIiwic3VibWl0IiwiYWpheCIsInVybCIsImF0dHIiLCJ0eXBlIiwiZGF0YSIsInNlcmlhbGl6ZSIsInN1Y2Nlc3MiLCJtb2RhbCIsImxvY2F0aW9uIiwicmVsb2FkIiwiaHRtbCIsImRvY3VtZW50IiwicmVhZHkiLCJkcm9wZG93bkRhdGVwaWNrZXIiLCJzdWJtaXRGb3JtYXQiLCJtaW5BZ2UiLCJtYXhBZ2UiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUVBQSxtQkFBTyxDQUFDLDhDQUFELENBQVAsQyxDQUVBOzs7QUFDQUEsbUJBQU8sQ0FBQyxvRUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLG9IQUFELENBQVA7O0FBRUEsSUFBSUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFDLG9EQUFELENBQWY7O0FBQ0EsSUFBSUUsRUFBRSxHQUFHRixtQkFBTyxDQUFDLG9EQUFELENBQWhCOztBQUVBRyxNQUFNLENBQUNGLENBQVAsR0FBV0UsTUFBTSxDQUFDQyxNQUFQLEdBQWdCSCxDQUEzQixDLENBRUE7O0FBQ0FELG1CQUFPLENBQUMsZ0VBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyw4REFBRCxDQUFQLEMsQ0FHQTs7O0FBQ0FBLG1CQUFPLENBQUMsMERBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxrREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGtFQUFELENBQVAsQyxDQUVBOzs7QUFDQUEsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHdDQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsa0RBQUQsQ0FBUCxDOzs7Ozs7Ozs7Ozs7QUMxQkk7QUFDQUMsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJJLElBQXpCLENBQThCLFlBQVc7QUFDckMsTUFBSUosQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxHQUFSLEVBQUosRUFBbUI7QUFDZkwsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxNQUFSLEdBQWlCQyxRQUFqQixDQUEwQixpQkFBMUI7QUFDSCxHQUZELE1BRU8sSUFBSSxDQUFDUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFLLEdBQVIsRUFBTCxFQUFvQjtBQUN2QkwsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxNQUFSLEdBQWlCRSxXQUFqQixDQUE2QixpQkFBN0I7QUFDSDtBQUNKLENBTkQsRSxDQVFBOztBQUNBUixDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QlMsSUFBekIsQ0FBOEIsWUFBVztBQUNyQyxNQUFJVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFLLEdBQVIsR0FBY0ssTUFBZCxJQUF3QixDQUE1QixFQUErQjtBQUMzQlYsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxNQUFSLEdBQWlCQyxRQUFqQixDQUEwQixpQkFBMUI7QUFDSDtBQUNKLENBSkQsRTs7Ozs7Ozs7Ozs7O0FDVko7QUFDQVAsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJXLE1BQXZCLENBQThCLFlBQVc7QUFDckNYLEdBQUMsQ0FBQ1ksSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRWIsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJjLElBQXZCLENBQTRCLFFBQTVCLENBREY7QUFFSEMsUUFBSSxFQUFFLE1BRkg7QUFHSEMsUUFBSSxFQUFFaEIsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJpQixTQUF2QixFQUhIO0FBSUhDLFdBQU8sRUFBRSxpQkFBU0YsSUFBVCxFQUFlO0FBQ3BCLFVBQUlBLElBQUksQ0FBQ0EsSUFBTCxLQUFjLFNBQWxCLEVBQTZCO0FBQ3pCaEIsU0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJtQixLQUFyQixDQUEyQixNQUEzQjtBQUNBQyxnQkFBUSxDQUFDQyxNQUFUO0FBQ0g7O0FBQ0RyQixPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QnNCLElBQTdCLENBQWtDTixJQUFsQztBQUNIO0FBVkUsR0FBUDtBQVlBLFNBQU8sS0FBUDtBQUNILENBZEQsRTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBaEIsQ0FBQyxDQUFDdUIsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QnhCLEdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCeUIsa0JBQXpCLENBQTRDO0FBQ3hDQyxnQkFBWSxFQUFFLFlBRDBCO0FBRXhDQyxVQUFNLEVBQUUsRUFGZ0M7QUFHeENDLFVBQU0sRUFBRTtBQUhnQyxHQUE1QztBQUtILENBTkQsRSxDQVFBOztBQUNBQyxVQUFVLENBQUMsWUFBVztBQUNsQjdCLEdBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCUyxJQUE1QixDQUFpQyxZQUFXO0FBQ3hDVCxLQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLElBQVIsQ0FBYSxVQUFiLEVBQXlCLElBQXpCO0FBQ0gsR0FGRDtBQUdILENBSlMsRUFJUCxJQUpPLENBQVYsQyxDQU1BOztBQUNBZCxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQlcsTUFBMUIsQ0FBaUMsWUFBVztBQUN4Q1gsR0FBQyxDQUFDWSxJQUFGLENBQU87QUFDSEMsT0FBRyxFQUFFYixDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQmMsSUFBMUIsQ0FBK0IsUUFBL0IsQ0FERjtBQUVIQyxRQUFJLEVBQUUsTUFGSDtBQUdIQyxRQUFJLEVBQUVoQixDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQmlCLFNBQTFCLEVBSEg7QUFJSEMsV0FBTyxFQUFFLGlCQUFTRixJQUFULEVBQWU7QUFDcEIsVUFBSUEsSUFBSSxDQUFDQSxJQUFMLEtBQWMsU0FBbEIsRUFBNkI7QUFDekJoQixTQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQm1CLEtBQXJCLENBQTJCLE1BQTNCO0FBQ0FDLGdCQUFRLENBQUNDLE1BQVQ7QUFDSDs7QUFDRHJCLE9BQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCc0IsSUFBN0IsQ0FBa0NOLElBQWxDO0FBQ0g7QUFWRSxHQUFQO0FBWUEsU0FBTyxLQUFQO0FBQ0gsQ0FkRCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGFwcC5qc1xyXG5cclxucmVxdWlyZSgnLi4vY3NzL2FwcC5zY3NzJyk7XHJcblxyXG4vLyBsb2FkcyB0aGUganF1ZXJ5IHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcclxucmVxdWlyZSgnd2VicGFjay1qcXVlcnktdWknKTtcclxucmVxdWlyZSgnanF1ZXJ5LWRyb3Bkb3duLWRhdGVwaWNrZXInKTtcclxuXHJcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciAkMiA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcclxuXHJcbi8vIGxvYWRzIHRoZSBib290c3RyYXAgcGFja2FnZSBmcm9tIG5vZGVfbW9kdWxlc1xyXG5yZXF1aXJlKCdib290c3RyYXAnKTtcclxucmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcblxyXG5cclxuLy9teSBwZXJzb25uYWwgY3NzXHJcbnJlcXVpcmUoJy4uL2Nzcy9ob21lLWluZGV4LmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvbmF2YmFyLmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvcmVnaXN0ZXItbG9naW4uY3NzJyk7XHJcblxyXG4vL215IHBlcnNvbm5hbCBqc1xyXG5yZXF1aXJlKCcuL3JlZ2lzdGVyLmpzJylcclxucmVxdWlyZSgnLi9sb2dpbi5qcycpXHJcbnJlcXVpcmUoJy4vbGFiZWxGbG9hdC5qcycpIiwiICAgIC8vc2NyaXB0IHNldHRpbmcgbGFiZWwgdG9wIG9mIGZpZWxkIHdoZW4gc29tZXRoaW5nIGluc2lkZSBmaWVsZCBhbmQgbGFiZWwgZG93biBpZiBub3RoaW5nIGluc2lkZSBmaWVsZFxyXG4gICAgJCgnLmxhYmVsLWZsb2F0IDppbnB1dCcpLmJsdXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5sYWJlbHMoKS5hZGRDbGFzcygnZm9yY2UtbGFiZWwtdG9wJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmxhYmVscygpLnJlbW92ZUNsYXNzKCdmb3JjZS1sYWJlbC10b3AnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vc2NyaXB0IHNldHRpbmcgbGFiZWwgdG9wIG9mIGZpZWxkIHdoZW4gc29tZXRoaW5nIGluc2lkZSBmaWVsZCB3aGVuIHJlbG9hZCBvZiBwYWdlXHJcbiAgICAkKFwiLmxhYmVsLWZsb2F0IDppbnB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICQodGhpcykubGFiZWxzKCkuYWRkQ2xhc3MoJ2ZvcmNlLWxhYmVsLXRvcCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pIiwiLy9hamF4IGZvcm0gbG9naW5cclxuJCgnI21vZGFsX2Zvcm1fbG9naW4nKS5zdWJtaXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJCgnI21vZGFsX2Zvcm1fbG9naW4nKS5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YTogJCgnI21vZGFsX2Zvcm1fbG9naW4nKS5zZXJpYWxpemUoKSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGEgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLXJlZ2lzdGVyJykubW9kYWwoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtcmVnaXN0ZXInKS5odG1sKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KTsiLCIvL3NjcmlwdCBmb3IgZGF0ZXBpY2tlciBmb3IgYmlydGhkYXRlIHJlZ2lzdGVyXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmJpcnRoZGF0ZS1kcm9wZG93bicpLmRyb3Bkb3duRGF0ZXBpY2tlcih7XHJcbiAgICAgICAgc3VibWl0Rm9ybWF0OiAneXl5eS1tbS1kZCcsXHJcbiAgICAgICAgbWluQWdlOiAxOCxcclxuICAgICAgICBtYXhBZ2U6IDEwMCxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vc2V0IGJpcnRoZGF5IHNlbGVjdCBjbGFzcyB0byByZXF1aXJlZCBhZnRlciBkYXRlcGlja2VyIGlzIGxvYWRlZCAoMXMpXHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuZGF0ZS1kcm9wZG93bnMgc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlcXVpcmVkJywgdHJ1ZSk7XHJcbiAgICB9KVxyXG59LCAxMDAwKTtcclxuXHJcbi8vYWpheCBmb3JtIHJlZ2lzdGVyXHJcbiQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6ICQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuc2VyaWFsaXplKCksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1yZWdpc3RlcicpLm1vZGFsKCdoaWRlJylcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1jb250ZW50LXJlZ2lzdGVyJykuaHRtbChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==