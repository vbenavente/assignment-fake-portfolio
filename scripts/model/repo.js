(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.getJSON('https://api.github.com/users/vbenavente/repos' +
        '?per>page5' +
        '&sort=updated', function(response) {
      repos.all = response;
    });
    callback();
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo){
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
