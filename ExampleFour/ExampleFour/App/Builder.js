var App;
(function (App) {
    "use strict";
    var Builder = (function () {
        function Builder(appName) {
            //Creación de módulo App e inyección de dependencias
            this.App = angular.module(appName, [
                "ngRoute",
                "ngResource"
            ]);
            //Definición de rutas
            this.App.config([
                "$routeProvider",
                function ($routeProvider) {
                    $routeProvider
                        .when("/", {
                        controller: "HomeController",
                        templateUrl: "App/Features/Home/Home.html?" + App.Config.Settings.Version
                    })
                        .when("/Attendees", {
                        controller: "AttendeesController",
                        templateUrl: "App/Features/Attendees/Attendees.html?" + App.Config.Settings.Version
                    })
                        .otherwise({
                        controller: "HomeController",
                        templateUrl: "App/Features/Home/Home.html?" + App.Config.Settings.Version
                    });
                }
            ]);
            //Arrancar app y router
            this.App.run(["$route", function () { }]);
        }
        Builder.prototype.Start = function () {
            var _this = this;
            $(document).ready(function () {
                console.log("Booting " + _this.App.name);
                angular.bootstrap(document, [_this.App.name]);
            });
        };
        return Builder;
    })();
    App.Builder = Builder;
})(App || (App = {}));
//# sourceMappingURL=Builder.js.map