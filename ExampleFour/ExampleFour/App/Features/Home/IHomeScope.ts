module App.Scopes {
    "use strict";

    export interface IHomeScope extends angular.IScope {
        Person: App.Models.Person;
        Number: number;
        SayHi(): void;
    }
} 