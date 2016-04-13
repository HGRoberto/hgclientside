(function() {
  'use strict';

  angular
  .module('hgClientModule')
  .directive('hgDirectiveCallApplyFactory', hgDirectiveCallApplyFactory);

  hgDirectiveCallApplyFactory.$inject = ['SafeApplyFactory'];

  function hgDirectiveCallApplyFactory(SafeApplyFactory) {
    return {
      restrict : 'EA',
      scope: { value: '=' },
      link: link,
      template: '<p>{{value}}</p>'
    }

    function link(scope, element, attr) {
        setTimeout(function() {
            SafeApplyFactory.executeWith$Apply(function() {
              scope.value = 'changed';
            });
        });
    }
  }
})();
