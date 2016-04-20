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

myProjects.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

myProjects.forEach(function(word) {
  projects.push(new Project(word));
});

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
