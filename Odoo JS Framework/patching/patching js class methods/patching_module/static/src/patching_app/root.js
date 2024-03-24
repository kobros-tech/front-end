/** @odoo-module */
import { Component, onWillStart } from "@odoo/owl";
import { patch, unpatch } from "@web/core/utils/patch";


class Greet extends Component {
    static template = "patching_module.Greet";

    setup () {
        this.foo = "bar";
    }

    methodForGreet () {
        console.log("I do...");
    }
}

// override existed constructor prop in the class constructor
patch(Greet.prototype, "override class method", {
    methodForGreet () {
        // this._super(...arguments);
        console.log("I do NOT...");
    }
});

unpatch(Greet.prototype, "override class method");

// updating existed constructor prop in the class constructor
patch(Greet.prototype, "update class method", {
    methodForGreet () {
        console.log("-------------------");
        this._super(...arguments);
        console.log("I do BOTH...");
    }
});


// inserting a new constructor prop in the class constructor
patch(Greet.prototype, "new constructor prop", {
    setup () {
        this._super(...arguments);
        this.baz = "baz";
    }
});


export class Root extends Component {
    static template = "patching_module.Root";

    setup() {
        onWillStart(() => {
            console.log("Will start rendering!");
        });
    }

    static props = {};
    static components = { Greet };
}