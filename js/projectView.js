//Configure a view object to hold all my functions for dynamic updates and project related event handlers
var projectView = {};

//remove template so it does not reappear when .toggle is used
$('article.template').remove();

projectView.populatefilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('.author-name').html();
      var optionTag = '<option value"' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);

      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

projectView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      //get value of option box
      $selected = $('#author-filter option:selected').val();
      //hide all articles
      $('article').hide();
      //iterate over all articles and unhide authors that match selected value
      $('article').each(function(){
        if($(this).find('.author-name').text() === $selected) {
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
  $('.main-nav').on('click', 'li', function() {
    $('section').removeClass('active');
    $tabclicked = $(this).attr('data-content');
    $('section#' + $tabclicked).addClass('active');
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
  projectView.populatefilters();
  projectView.handleAuthorFilter();
  projectView.handleCategoryFilter();
  projectView.handleMainNav();
  projectView.viewTabs();
});
