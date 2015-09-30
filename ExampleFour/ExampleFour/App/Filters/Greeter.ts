module App.Filters {
    "use strict";

    export function Greeter() {
        return (person: App.Models.Person) => {
            return "Hi, " + person.GetFullName() + ", regards from Greeter filter.";
        }
    }

    angular.module(App.Config.Settings.AppName)
        .filter("Greeter", Greeter);
} 