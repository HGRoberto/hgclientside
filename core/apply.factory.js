(function() {
  'use strict';

  angular
  .module('hgClientModule')
  .factory('SafeApplyFactory', ApplyFactory);

  ApplyFactory.$inject = [];

  function ApplyFactory() {
      return {
          executeWith$Apply : executeWith$Apply
      };

      function executeWith$Apply($scope, func) {
        var phases = ['$apply', '$digest'];

        var phase = $scope.$root.$$phase;

        if(phases.indexOf(phase) != -1) {
          $scope.$eval(func);
        }else {
            $scope.$apply(func);
        }
      }
  }

})();
