(function(module) {
  var projectController = {};

  projectController.index = function() {
    $('#projects').empty();
    // repos.requestRepos(repoView.index());
    Project.fetchAll(projectView.initIndexPage);

    //$('main > section').hide();
    $('#projects').show().siblings().hide;
  };

  module.projectController = projectController;
}) (window);
