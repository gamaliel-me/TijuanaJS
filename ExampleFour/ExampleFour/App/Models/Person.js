var App;
(function (App) {
    var Models;
    (function (Models) {
        "use strict";
        var Person = (function () {
            function Person(firstName, surName) {
                this.FirstName = firstName;
                this.SurName = surName;
            }
            Person.prototype.GetFullName = function () {
                return this.FirstName + " " + this.SurName + " (Y)";
            };
            return Person;
        })();
        Models.Person = Person;
    })(Models = App.Models || (App.Models = {}));
})(App || (App = {}));
//# sourceMappingURL=Person.js.map