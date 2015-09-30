module App.Controllers {
    "use strict";

    export class AttendeesController {
        constructor(private $scope: App.Scopes.IAttendeesScope,
            private Resource: App.Services.Resource) {
            this.Init();
        }
        public Init(): void {
            this.$scope.SayHi = (attendee: App.Models.Attendee) => {
                console.info(attendee);
                alert("Hola " + attendee.FirstName + " " + attendee.SurName);
            }
            this.$scope.Refresh = () => {
                this.$scope.Attendees = this.Resource.query("http://www.json-generator.com/api/json/get/cbbtdkIAya");
            }
            this.$scope.Attendees = this.Resource.query("http://www.json-generator.com/api/json/get/cbbtdkIAya", {},
                (data) => {
                    console.info(data);
                });
        }
    }

    angular.module(App.Config.Settings.AppName)
        .controller("AttendeesController", AttendeesController);
} 