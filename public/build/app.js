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

__webpack_require__(/*! ./modalImage.js */ "./assets/js/modalImage.js");
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

/***/ "./assets/js/modalImage.js":
/*!*********************************!*\
  !*** ./assets/js/modalImage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Get the modal
var modal = document.getElementById("modal-image"); // Get the image and insert it inside the modal - use its "alt" text as a caption

var img = document.getElementById("modal-image-image");
var modalImg = document.getElementById("profil-image");
var captionText = document.getElementById("caption");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}; // When the user clicks anywhere outside of the modal, close it


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FkbWluLWluZGV4LmNzcz9jZGRlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvYWRtaW4tdXNlci5jc3M/ZTUzMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzP2FlY2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9ob21lLWluZGV4LmNzcz9mZDM4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvbW9kYWwtaW1hZ2UuY3NzP2Q0MjUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9uYXZiYXIuY3NzPzNjMjkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9wcm9maWwuY3NzPzIwNWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9yZWdpc3Rlci1sb2dpbi5jc3M/MzAwMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NvY2lhbC1tZWRpYS1pY29ucy5jc3M/ZjExYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sYWJlbEZsb2F0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kYWxJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIiQiLCIkMiIsImdsb2JhbCIsImpRdWVyeSIsImJsdXIiLCJ2YWwiLCJsYWJlbHMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZWFjaCIsImxlbmd0aCIsInN1Ym1pdCIsImFqYXgiLCJ1cmwiLCJhdHRyIiwidHlwZSIsImRhdGEiLCJzZXJpYWxpemUiLCJzdWNjZXNzIiwibW9kYWwiLCJsb2NhdGlvbiIsInJlbG9hZCIsImh0bWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW1nIiwibW9kYWxJbWciLCJjYXB0aW9uVGV4dCIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJzcmMiLCJpbm5lckhUTUwiLCJhbHQiLCJ3aW5kb3ciLCJldmVudCIsInRhcmdldCIsInJlYWR5IiwiZHJvcGRvd25EYXRlcGlja2VyIiwic3VibWl0Rm9ybWF0IiwibWluQWdlIiwibWF4QWdlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBQSxtQkFBTyxDQUFDLDhDQUFELENBQVAsQyxDQUVBOzs7QUFDQUEsbUJBQU8sQ0FBQyxvRUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLG9IQUFELENBQVA7O0FBRUEsSUFBSUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFDLG9EQUFELENBQWY7O0FBQ0EsSUFBSUUsRUFBRSxHQUFHRixtQkFBTyxDQUFDLG9EQUFELENBQWhCOztBQUVBRyxNQUFNLENBQUNGLENBQVAsR0FBV0UsTUFBTSxDQUFDQyxNQUFQLEdBQWdCSCxDQUEzQixDLENBRUE7O0FBQ0FELG1CQUFPLENBQUMsZ0VBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyw4REFBRCxDQUFQLEMsQ0FHQTs7O0FBQ0FBLG1CQUFPLENBQUMsMERBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxrREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGtFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsMEVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyw0REFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDBEQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsa0RBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyw0REFBRCxDQUFQLEMsQ0FFQTs7O0FB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c3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBhcHAuanNcclxuXHJcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xyXG5cclxuLy8gbG9hZHMgdGhlIGpxdWVyeSBwYWNrYWdlIGZyb20gbm9kZV9tb2R1bGVzXHJcbnJlcXVpcmUoJ3dlYnBhY2stanF1ZXJ5LXVpJyk7XHJcbnJlcXVpcmUoJ2pxdWVyeS1kcm9wZG93bi1kYXRlcGlja2VyJyk7XHJcblxyXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgJDIgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XHJcblxyXG4vLyBsb2FkcyB0aGUgYm9vdHN0cmFwIHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnJlcXVpcmUoJ3BvcHBlci5qcycpO1xyXG5cclxuXHJcbi8vbXkgcGVyc29ubmFsIGNzc1xyXG5yZXF1aXJlKCcuLi9jc3MvaG9tZS1pbmRleC5jc3MnKTtcclxucmVxdWlyZSgnLi4vY3NzL25hdmJhci5jc3MnKTtcclxucmVxdWlyZSgnLi4vY3NzL3JlZ2lzdGVyLWxvZ2luLmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3Mvc29jaWFsLW1lZGlhLWljb25zLmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvYWRtaW4taW5kZXguY3NzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9hZG1pbi11c2VyLmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvcHJvZmlsLmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvbW9kYWwtaW1hZ2UuY3NzJyk7XHJcblxyXG4vL215IHBlcnNvbm5hbCBqc1xyXG5yZXF1aXJlKCcuL3JlZ2lzdGVyLmpzJylcclxucmVxdWlyZSgnLi9sb2dpbi5qcycpXHJcbnJlcXVpcmUoJy4vbGFiZWxGbG9hdC5qcycpXHJcbnJlcXVpcmUoJy4vYWRtaW5Vc2VyLmpzJylcclxucmVxdWlyZSgnLi9tb2RhbEltYWdlLmpzJykiLCIgICAgLy9zY3JpcHQgc2V0dGluZyBsYWJlbCB0b3Agb2YgZmllbGQgd2hlbiBzb21ldGhpbmcgaW5zaWRlIGZpZWxkIGFuZCBsYWJlbCBkb3duIGlmIG5vdGhpbmcgaW5zaWRlIGZpZWxkXHJcbiAgICAkKCcubGFiZWwtZmxvYXQgOmlucHV0JykuYmx1cihmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmxhYmVscygpLmFkZENsYXNzKCdmb3JjZS1sYWJlbC10b3AnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCEkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykubGFiZWxzKCkucmVtb3ZlQ2xhc3MoJ2ZvcmNlLWxhYmVsLXRvcCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy9zY3JpcHQgc2V0dGluZyBsYWJlbCB0b3Agb2YgZmllbGQgd2hlbiBzb21ldGhpbmcgaW5zaWRlIGZpZWxkIHdoZW4gcmVsb2FkIG9mIHBhZ2VcclxuICAgICQoXCIubGFiZWwtZmxvYXQgOmlucHV0XCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5sYWJlbHMoKS5hZGRDbGFzcygnZm9yY2UtbGFiZWwtdG9wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkiLCIvL2FqYXggZm9ybSBsb2dpblxyXG4kKCcjbW9kYWxfZm9ybV9sb2dpbicpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkKCcjbW9kYWxfZm9ybV9sb2dpbicpLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiAkKCcjbW9kYWxfZm9ybV9sb2dpbicpLnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZGF0YSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwtcmVnaXN0ZXInKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnI21vZGFsLWNvbnRlbnQtcmVnaXN0ZXInKS5odG1sKGRhdGEpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufSk7IiwiLy8gR2V0IHRoZSBtb2RhbFxyXG52YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWltYWdlXCIpO1xyXG5cclxuLy8gR2V0IHRoZSBpbWFnZSBhbmQgaW5zZXJ0IGl0IGluc2lkZSB0aGUgbW9kYWwgLSB1c2UgaXRzIFwiYWx0XCIgdGV4dCBhcyBhIGNhcHRpb25cclxudmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtaW1hZ2UtaW1hZ2VcIik7XHJcbnZhciBtb2RhbEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsLWltYWdlXCIpO1xyXG52YXIgY2FwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcHRpb25cIik7XHJcbmltZy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgbW9kYWxJbWcuc3JjID0gdGhpcy5zcmM7XHJcbiAgICBjYXB0aW9uVGV4dC5pbm5lckhUTUwgPSB0aGlzLmFsdDtcclxufVxyXG5cclxuLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbn0iLCIvL3NjcmlwdCBmb3IgZGF0ZXBpY2tlciBmb3IgYmlydGhkYXRlIHJlZ2lzdGVyXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmJpcnRoZGF0ZS1kcm9wZG93bicpLmRyb3Bkb3duRGF0ZXBpY2tlcih7XHJcbiAgICAgICAgc3VibWl0Rm9ybWF0OiAneXl5eS1tbS1kZCcsXHJcbiAgICAgICAgbWluQWdlOiAxOCxcclxuICAgICAgICBtYXhBZ2U6IDEwMCxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vc2V0IGJpcnRoZGF5IHNlbGVjdCBjbGFzcyB0byByZXF1aXJlZCBhZnRlciBkYXRlcGlja2VyIGlzIGxvYWRlZCAoMXMpXHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuZGF0ZS1kcm9wZG93bnMgc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlcXVpcmVkJywgdHJ1ZSk7XHJcbiAgICB9KVxyXG59LCAxMDAwKTtcclxuXHJcbi8vYWpheCBmb3JtIHJlZ2lzdGVyXHJcbiQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6ICQoJyNtb2RhbF9mb3JtX3JlZ2lzdGVyJykuc2VyaWFsaXplKCksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbC1yZWdpc3RlcicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcjbW9kYWwtY29udGVudC1yZWdpc3RlcicpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=