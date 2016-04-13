//Configure a view object to hold all my functions for dynamic updates and project related event handlers
var projectView = {};

//remove template so it does not reappear when .toggle is used
$('article.template').remove();

projectView.handleMainNav = function() {
  $('.main-nav').on('click', 'li', function() {
    $('section').removeClass('active');
    $tabclicked = $(this).attr('data-content');
    $('section#' + $tabclicked).addClass('active');
  });
  $('.main-nav .tab:first').click();
};

projectView.viewTabs = function() {
  $('.article-body').hide();

  $('article').on('click', '.read-on', function(){
    event.preventDefault();

    $(this).hide();
    $('.article-body').show();
  });
};

$(document).ready(function() {
  projectView.handleMainNav();
});
