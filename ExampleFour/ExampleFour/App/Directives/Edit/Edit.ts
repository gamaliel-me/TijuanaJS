module App.Directives {
    "use strict";

    export class Edit {
        Model;
        Label: string;
        Type: string = "text";
        Placeholder: string = "";
        constructor() {
        }
    }

    angular.module(App.Config.Settings.AppName)
        .directive("editControl", () => {
            return {
                scope: {
                    Model: '=model',
                    Type: '@?type',
                    Placeholder: '@?placeholder',
                    Label: '@label'
                },
                controller: Edit,
                controllerAs: "vm",
                bindToController: true,
                templateUrl: "App/Directives/Edit/Edit.html"
            }
        });
}