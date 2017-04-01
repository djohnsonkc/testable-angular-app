'use strict';

// describe('myApp.view1 module', function() {

//   beforeEach(module('myApp.view1'));

//   var ctrl, Users, $q;

//   beforeEach(inject(function($controller, _$q_, Users){
//     ctrl = $controller('View1Ctrl');
//     $q = _$q_;
//     users = Users;
//   }));

//   describe('view1 controller', function(){

//     // it('should ....', inject(function($controller) {
//     //   //spec body
//     //   var view1Ctrl = $controller('View1Ctrl');
//     //   expect(view1Ctrl).toBeDefined();
//     // }));

//     it('should ....', inject(function($controller, $rootScope) {
//         //spec body
//         var $scope = $rootScope.$new();

//             ctrl = $controller('View1Ctrl', {
//                 $scope: $scope,
//                 $User: {} 
//             });

//         expect(ctrl).toBeDefined();
//     }));

//   });
// });

describe('myApp', function () {
    var scope,
        controller,
        service;
    beforeEach(function () {
        module('myApp.view1');
    });
    
    // Mocking service?
    beforeEach(module(function ($provide) {
        service = { LoadUsers: function () {
                return true;
            }};        
        $provide.value('MyService', service);
    }));
    
    describe('View1Ctrl', function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('View1Ctrl', {
                '$scope': scope
            });
        }));
        

        it('controller is defined', function () {
            expect(controller).toBeDefined();
        });

        // it('users have been loaded', function () {
        //     expect(scope.users).toBe(false);
        // });

        // // How to test Method "Arrived" of the controller? This here is not working...
        // it('user arrives', function () {
        //   expect(scope.Arrived('Franz', 'Kafka')).toBe(true);
        // });
        // it('checks that Arrived is correctly used', function() {
        //     // Arrange
        //     spyOn(service, 'Arrive');
            
        //     // Act
        //     scope.Arrived('Franz', 'Kafka');
            
        //     // Assert
        //     expect(service.Arrive).toHaveBeenCalledWith('Franz', 'Kafka');
        // });

        
        // it('checks that LoadUsers is correctly used', function() {
        //     // Arrange
        //     spyOn(service, 'LoadUsers');
            
        //     // Act
        //     scope.LoadUsers();
            
        //     // Assert
        //     expect(service.LoadUsers).toHaveBeenCalledWith('Franz', 'Kafka');
        // });

    });
});