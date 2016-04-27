(function(module) {
  var projectController = {};

  projectController.index = function() {
    $('#projects').empty();
    Project.fetchAll(projectView.initIndexPage);

    $('main > section').hide();
    $('#projects').show();
  };

  module.projectController = projectController;
}) (window);
