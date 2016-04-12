(function() {
  'use strict';

  angular
  .module('hgClientModule')
  .directive('hgDirectiveCallApplyFactory', hgDirectiveCallApplyFactory);

  hgDirectiveCallApplyFactory.$inject = ['ApplyFactory'];

  function hgDirectiveCallApplyFactory(ApplyFactory) {
    return {
      restrict : 'EA',
      scope: { value: '=' },
      link: link,
      template: '<p>{{value}}</p>'
    }

    function link(scope, element, attr) {
        setTimeout(function() {
            ApplyFactory.executeWith$Apply(function() {
              scope.value = 'changed';
            });
        });
    }
  }
})();
