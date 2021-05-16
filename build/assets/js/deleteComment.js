"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var commentList = document.getElementById("jsCommentList");
var commentNumber = document.getElementById("jsCommentNumber");
var delBtnArray = document.querySelectorAll(".jsDeleteBtn");

var decreaseNumber = function decreaseNumber() {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

var deleteComment = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(li, la) {
    var videoId, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            videoId = window.location.href.split("/video/")[1];
            _context.next = 3;
            return (0, _axios["default"])({
              url: "/api/".concat(videoId, "/comment/delete"),
              method: "POST",
              data: {
                commentid: la
              }
            });

          case 3:
            response = _context.sent;
            console.log(response);

            if (response.status === 200) {
              commentList.removeChild(li);
              decreaseNumber();
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteComment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var handleClick = function handleClick(e) {
  e.preventDefault();
  var liNode = e.target.parentNode;
  var lalala = e.target.getAttribute("data-post-id");
  deleteComment(liNode, lalala);
};

function init() {
  delBtnArray.forEach(function (e) {
    e.addEventListener("click", handleClick);
  });
}

if (commentList) {
  init();
}