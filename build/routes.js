"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Global
var HOME = "/";
var JOIN = "/join";
var LOGIN = "/login";
var LOGOUT = "/logout";
var SEARCH = "/search";
var ME = "/me"; // Users

var USERS = "/users";
var USER_DETAIL = "/:id";
var EDIT_PROFILE = "/edit-profile";
var CHANGE_PASSWORD = "/change-password"; // Videos

var VIDEO = "/video";
var UPLOAD = "/upload";
var VIDEO_DETAIL = "/:id";
var EDIT_VIDEO = "/:id/edit";
var DELETE_VIDEO = "/:id/delete"; // Github

var GITHUB = "/auth/github";
var GITHUB_CALLBACK = "/auth/github/callback"; // facebook

var FB = "/auth/facebook";
var FB_CALLBACK = "/auth/facebook/callback"; // API

var API = "/api";
var REGISTER_VIEW = "/:id/view";
var ADD_COMMENT = "/:id/comment";
var DELETE_COMMENT = "/:id/comment/delete";
var routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: function userDetail(id) {
    if (id) {
      return "/users/".concat(id);
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  video: VIDEO,
  upload: UPLOAD,
  videoDetail: function videoDetail(id) {
    if (id) {
      return "/video/".concat(id);
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: function editVideo(id) {
    if (id) {
      console.log("sdsd");
      return "/video/".concat(id, "/edit");
    } else {
      return EDIT_VIDEO;
    }
  },
  deleteVideo: function deleteVideo(id) {
    if (id) {
      console.log("Ddd");
      return "/video/".concat(id, "/delete");
    } else {
      return DELETE_VIDEO;
    }
  },
  gitHub: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  me: ME,
  facebook: FB,
  facebookCallback: FB_CALLBACK,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
  deleteComment: DELETE_COMMENT
};
var _default = routes;
exports["default"] = _default;