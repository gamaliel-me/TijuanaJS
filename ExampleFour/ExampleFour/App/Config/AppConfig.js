var App;
(function (App) {
    var Config;
    (function (Config) {
        "use strict";
        var Settings = (function () {
            function Settings() {
            }
            Settings.AppName = "Example Four";
            Settings.Version = "1.0.0.0";
            Settings.ServerPath = "";
            return Settings;
        })();
        Config.Settings = Settings;
    })(Config = App.Config || (App.Config = {}));
})(App || (App = {}));
//# sourceMappingURL=AppConfig.js.map