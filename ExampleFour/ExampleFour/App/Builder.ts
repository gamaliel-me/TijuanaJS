module App {
    "use strict";

    export class Builder {
        App: angular.IModule;

        constructor(appName: string) {
            //Creación de módulo App e inyección de dependencias
            this.App = angular.module(appName, [
                "ngRoute",
                "ngResource"
            ]);
            //Definición de rutas
            this.App.config([
                "$routeProvider",
                ($routeProvider: angular.route.IRouteProvider) => {
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
            this.App.run(["$route", () => {}]);
        }

        public Start() {
            $(document).ready(() => {
                console.log("Booting " + this.App.name);
                angular.bootstrap(document, [this.App.name]);
            });
        }
    }
} 