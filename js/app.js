var projects = [];

function Project (items) {
  this.title = items.title;
  this.category = items.category;
  this.author = items.author;
  this.projectImage = items.projectImage;
  this.gitUrl = items.gitUrl;
  this.publishedOn = items.publishedOn;
  this.body = items.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.attr('data-category', this.category);
  $newProject.find('#author').prepend(this.author);
  $newProject.find('p').append('<img src="' + this.projectImage + '">');
  $newProject.find('a').attr('href', this.gitUrl);
  $newProject.find('h1').html(this.title);
  $newProject.find('#article-body').html(this.body);
  $newProject.find('time').append(this.publishedOn);

  $newProject.removeClass('template');

  return $newProject;
};

myProjects.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

myProjects.forEach(function(element) {
  projects.push(new Project(element));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
