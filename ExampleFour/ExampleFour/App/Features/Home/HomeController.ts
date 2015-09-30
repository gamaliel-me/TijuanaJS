module App.Controllers {
    "use strict";

    export class HomeController {

        constructor(private $scope: App.Scopes.IHomeScope) {
            this.Init();
        }
        public Init(): void {
            this.$scope.Number = 6;
            this.$scope.Person = new App.Models.Person("Arnoldo", "Medina");
            //this.$scope.Person = new App.Models.Person();
            //this.$scope.Person.FirstName = "Gamaliel";
            //this.$scope.Person.SurName = "Medina";
            this.$scope.SayHi = () => {
                console.log(this.$scope.Person);
                alert("Hi, " + this.$scope.Person.GetFullName());
            }
        }
    }

    angular.module(App.Config.Settings.AppName)
        .controller("HomeController", HomeController);
}