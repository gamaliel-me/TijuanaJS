module App.Scopes {
    "use strict";

    export interface IAttendeesScope extends angular.IScope {
        SearchText: string;
        Attendees: App.Models.Attendee[];
        Refresh();
        SayHi(attendee: App.Models.Attendee);
    }
}