// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  // Katarina Mills. Id: 4
  var $webSkillsNewHeight = $('.Katarina').height();
  $('.4').height($webSkillsNewHeight);

  // Miss Cortez Hilpert. Id: 3
  var $webSkillsNewHeight = $('.Miss').height();
  $('.3').height($webSkillsNewHeight);

  // Dakota Kautzer. Id: 2
  var $webSkillsNewHeight = $('.Dakota').height();
  $('.2').height($webSkillsNewHeight);

  // Russ Waters. Id: 1
  var $webSkillsNewHeight = $('.Russ').height();
  $('.1').height($webSkillsNewHeight);

  // sets web developer job height to the same height of the web developer applicant names
  var $webNewHeight = $('.web_dev_names').height();
  $('.Web').height($webNewHeight);

  // sets designer job height to the same height of the designer applicant names
  var $designerNewHeight = $('.designer_names').height();
  $('.Designer').height($designerNewHeight);

});
