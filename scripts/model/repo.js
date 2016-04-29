(function(module) {
  var repos = {};

  repos.all = [];

  // $.getJSON('data/projectData.json', function(response) {
  //   Project.loadAll(response);
  //   projectView.initIndexPage();
  // });

  repos.requestRepos = function(callback) {
    $.getJSON('https://api.github.com/vbenavente/repos' +
        '?per>page5' +
        '&sort=updated', function(response) {
      repos.all = response;
      callback(response);
    });
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo){
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
