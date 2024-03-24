/** @odoo-module */
import { Component, onWillStart } from "@odoo/owl";
import { patch } from "@web/core/utils/patch";


class Greet extends Component {
    static template = "patching_module.Greet";

    setup() {
        this.foo = "bar";
    }
}

// updating existed constructor prop in the class constructor
patch(Greet.prototype, "update constructor prop", {
    setup () {
        this._super(...arguments);
        this.foo = "foo";
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