//Configure a view object to hold all my functions for dynamic updates and project related event handlers
var projectView = {};

projectView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      //get value of option box
      $selected = $('#author-filter option:selected').val();
      //hide all articles
      $('article').hide();
     //iterate over all articles and unhide authors that match selected value
      $('article').each(function(){
        if($(this).attr('data-author') === $selected) {
          $(this).show();
        }
      });
    } else {
      $('article').hide();
    }
    $('#category-filter').val('');
  });
};

projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      //get value of option box
      $selected = $('#category-filter option:selected').val();
      //hide all articles
      $('article').hide();
      //iterate over all articles and unhide authors that match selected value
      $('article').each(function(){
        if($(this).attr('data-category') === $selected) {
          $(this).show();
        }
      });

    } else {
      $('article').hide();
    }
    $('#author-filter').val('');
  });
};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

projectView.viewTabs = function() {
  $('.article-body *:nth-of-type(n+2)').hide();

  $('article').on('click', '.read-on', function(){
    event.preventDefault();

    $(this).hide();
    $('.article-body *:nth-of-type(n+2)').show();
  });
};

$(document).ready(function() {
  projectView.handleAuthorFilter();
  projectView.handleCategoryFilter();
  projectView.handleMainNav();
  projectView.viewTabs();
});
