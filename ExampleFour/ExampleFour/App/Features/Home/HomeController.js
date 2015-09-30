var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var HomeController = (function () {
            function HomeController($scope) {
                this.$scope = $scope;
                this.Init();
            }
            HomeController.prototype.Init = function () {
                var _this = this;
                this.$scope.Number = 6;
                this.$scope.Person = new App.Models.Person("Arnoldo", "Medina");
                //this.$scope.Person = new App.Models.Person();
                //this.$scope.Person.FirstName = "Gamaliel";
                //this.$scope.Person.SurName = "Medina";
                this.$scope.SayHi = function () {
                    console.log(_this.$scope.Person);
                    alert("Hi, " + _this.$scope.Person.GetFullName());
                };
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        angular.module(App.Config.Settings.AppName)
            .controller("HomeController", HomeController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=HomeController.js.map