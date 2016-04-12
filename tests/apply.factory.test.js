describe('Call Safe ApplyFactory In Directive', function() {

  beforeEach(module('hgClientModule'));

  var $scope, $compile;

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $scope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  it('should have an updated value', function() {
    $scope.value = 'value';
    var element = $compile("<div hg-directive-call-apply-factory value='value'></div>")($scope);

    $scope.$digest();

    var pElement = element.find('p');
    expect(pElement).not.toEqual({});
    setTimeout(function() {expect(element.text()).not.toEqual($scope.value);})
  });
});
