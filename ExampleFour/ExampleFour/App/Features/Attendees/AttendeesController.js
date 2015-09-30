var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var AttendeesController = (function () {
            function AttendeesController($scope, Resource) {
                this.$scope = $scope;
                this.Resource = Resource;
                this.Init();
            }
            AttendeesController.prototype.Init = function () {
                var _this = this;
                this.$scope.SayHi = function (attendee) {
                    console.info(attendee);
                    alert("Hola " + attendee.FirstName + " " + attendee.SurName);
                };
                this.$scope.Refresh = function () {
                    _this.$scope.Attendees = _this.Resource.query("http://www.json-generator.com/api/json/get/cbbtdkIAya");
                };
                this.$scope.Attendees = this.Resource.query("http://www.json-generator.com/api/json/get/cbbtdkIAya", {}, function (data) {
                    console.info(data);
                });
            };
            return AttendeesController;
        })();
        Controllers.AttendeesController = AttendeesController;
        angular.module(App.Config.Settings.AppName)
            .controller("AttendeesController", AttendeesController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=AttendeesController.js.map