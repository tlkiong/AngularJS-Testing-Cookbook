// describe('MainCtrl', function() {
//     beforeEach(module('cookbook'));

//     it('should assign the correct rapper to scope', inject(function($controller, $rootScope) {
//         var scope = $rootScope.$new();
//         $controller('MainCtrl', {
//             $scope: scope
//         });
//         expect(scope.emcee).toEqual('Tan Lee Kiong');
//     }));
// })

describe('MainCtrl', function() {
    var mainCtrl, scope;
    beforeEach(module('cookbook'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('MainCtrl', {
            $scope: scope
        });
    }));
    it('should assign the correct rapper to scope', function() {
        expect(scope.emcee).toEqual('Tan Lee Kiong');
    });
});
