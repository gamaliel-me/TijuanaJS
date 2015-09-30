var App;
(function (App) {
    var Directives;
    (function (Directives) {
        "use strict";
        var Edit = (function () {
            function Edit() {
                this.Type = "text";
                this.Placeholder = "";
            }
            return Edit;
        })();
        Directives.Edit = Edit;
        angular.module(App.Config.Settings.AppName)
            .directive("editControl", function () {
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
            };
        });
    })(Directives = App.Directives || (App.Directives = {}));
})(App || (App = {}));
//# sourceMappingURL=Edit.js.map