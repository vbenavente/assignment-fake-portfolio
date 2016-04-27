(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#projects').empty();
    $('main > section').hide();
    $('#aboutMe').show();
  };

  module.aboutController = aboutController;
})(window);
