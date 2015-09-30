var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    var Models;
    (function (Models) {
        "use strict";
        var Attendee = (function (_super) {
            __extends(Attendee, _super);
            function Attendee() {
                _super.apply(this, arguments);
            }
            return Attendee;
        })(Models.Person);
        Models.Attendee = Attendee;
    })(Models = App.Models || (App.Models = {}));
})(App || (App = {}));
//# sourceMappingURL=Attendee.js.map