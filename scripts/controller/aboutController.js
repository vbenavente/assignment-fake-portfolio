(function(module) {
  var aboutController = {};

  aboutController.index = function(callback) {
    $('#projects').empty();
    $('main > section').hide();
    $('#aboutMe').show().siblings().hide();
  };

  module.aboutController = aboutController;
})(window);
