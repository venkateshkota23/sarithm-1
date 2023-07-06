(function(angular) {
  'use strict';
var app = angular.module('docsTemplateUrlDirective', []);
  app.controller('jobController', function($scope, $http) {
    $http.get('jobs.json')
       .then(function(res){
        //alert(res.data);
          $scope.jobs = res.data;                
        });
  });
  app.directive('sarithmHeader', function() {
    return {
      link: function(scope, elm, attrs) {
      //alert( $(elm).html()); 
      
      $(elm).find('.navItem').bind('mouseenter', function() {
        if($(this).hasClass('current')){}else{
        $(this).addClass('current');
        $(this).children(0).children(0).addClass('current');
        //alert('test');
        }
      });
      $(elm).find('.navItem').bind('mouseleave', function() {
        if($(this).hasClass('selected')){}else{
        $(this).removeClass('current');
        $(this).children(0).children(0).removeClass('current');
      }
        //alert('test');
      });
        $(elm).find('.' + attrs.className).addClass('selected'); 
        $(elm).find('.' + attrs.className).addClass('current'); 
        $(elm).find('.' + attrs.className).children(0).children(0).addClass('current'); 
        //$(scope).find('.infra').className()
      },
      templateUrl: 'sarithm-header.html'
    };
  });
  app.directive('sarithmFooter', function() {
    return {
      templateUrl: 'sarithm-footer.html'
    };
  });
  app.directive('course-01', function() {
    return {
      templateUrl: 'course-01.html'
    };
  });

})(window.angular);
