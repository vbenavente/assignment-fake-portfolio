(function(module) {

  function Project (items) {
    this.title = items.title;
    this.category = items.category;
    this.author = items.author;
    this.projectImage = items.projectImage;
    this.gitUrl = items.gitUrl;
    this.publishedOn = items.publishedOn;
    this.body = items.body;
  }

  Project.all = [];

  Project.prototype.toHtml = function(templateId) {
    var $source = $('#' + templateId + '-template').text();
    var template = Handlebars.compile($source);

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

    return template(this);
  };

  Project.loadAll = function(dataPassedIn) {
    dataPassedIn.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    // dataPassedIn.forEach(function(word) {
    //   Project.all.push(new Project(word));
    // });

    Project.all = dataPassedIn.map(function(word) {
      return new Project(word);
    });
    console.log(Project.all);
  };

  Project.fetchAll = function() {
    $.getJSON('data/projectData.json', function(response) {
      Project.loadAll(response);
      projectView.initIndexPage();
    });

    // projects.forEach(function(a) {
    //   $('#projects').append(a.toHtml('project'));
    //   if(authors.indexOf(a.author) === -1) {
    //     $('#author-filter').append(a.toHtml('author'));
    //     authors.push(a.author);
    //   }
    //   if (categories.indexOf(a.category) === -1) {
    //     $('#category-filter').append(a.toHtml('category'));
    //     categories.push(a.category);
    //   }
    // });
  };

  module.Project = Project;

}) (window);
