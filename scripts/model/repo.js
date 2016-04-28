(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/vbenavente/repos' +
        '?per>page5' +
        '&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token' + gitHubToken},
      success: function(data) {
        repos.all = data;
      }
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
