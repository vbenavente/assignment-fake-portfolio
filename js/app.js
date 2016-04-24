var projects = []; authors = []; categories = [];

function Project (items) {
  this.title = items.title;
  this.category = items.category;
  this.author = items.author;
  this.projectImage = items.projectImage;
  this.gitUrl = items.gitUrl;
  this.publishedOn = items.publishedOn;
  this.body = items.body;
}

Project.prototype.toHtml = function(templateId) {
  var $source = $('#' + templateId + '-template').html();
  var template = Handlebars.compile($source);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

  return template(this);
};

Project.loadAll = function(dataPassedIn) {
  dataPassedIn.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  dataPassedIn.forEach(function(word) {
    projects.push(new Project(word));
  });
};

Project.fetchAll = function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responsetext);
      Project.loadAll(data);
    }
  };
  xhr.open('GET', 'json/projectData.json');
  xhr.send();
};

projects.forEach(function(a) {
  $('#projects').append(a.toHtml('project'));
  if(authors.indexOf(a.author) === -1) {
    $('#author-filter').append(a.toHtml('author'));
    authors.push(a.author);
  }
  if (categories.indexOf(a.category) === -1) {
    $('#category-filter').append(a.toHtml('category'));
    categories.push(a.category);
  }
});
