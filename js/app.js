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
  $newProject.removeClass('template');
  if (!this.publishedOn) {
    $newProject.addClass('draft');
  }

  $newProject.find('.author-name').prepend(this.author);
  $newProject.attr('data-category', this.category);

  $newProject.find('p').append('<img src="' + this.projectImage + '">');
  $newProject.find('a').attr('href', this.gitUrl);
  $newProject.find('h1').html(this.title);
  $newProject.find('#article-body').html(this.body);
  $newProject.find('time').append(' ' + this.publishedOn);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newProject.append('<hr>');

  return $newProject;
};

myProjects.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

myProjects.forEach(function(word) {
  projects.push(new Project(word));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
