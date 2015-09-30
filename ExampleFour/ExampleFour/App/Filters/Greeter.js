var App;
(function (App) {
    var Filters;
    (function (Filters) {
        "use strict";
        function Greeter() {
            return function (person) {
                return "Hi, " + person.GetFullName() + ", regards from Greeter filter.";
            };
        }
        Filters.Greeter = Greeter;
        angular.module(App.Config.Settings.AppName)
            .filter("Greeter", Greeter);
    })(Filters = App.Filters || (App.Filters = {}));
})(App || (App = {}));
//# sourceMappingURL=Greeter.js.map