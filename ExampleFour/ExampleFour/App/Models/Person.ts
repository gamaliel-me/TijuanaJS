module App.Models {
    "use strict";

    export class Person {
        FirstName: string;
        SurName: string;

        constructor();
        constructor(firstName: string, surName: string);
        constructor(firstName?: any, surName?: any) {
            this.FirstName = firstName;
            this.SurName = surName;
        }

        public GetFullName(): string {
            return this.FirstName + " " + this.SurName + " (Y)";
        }
    }
} 