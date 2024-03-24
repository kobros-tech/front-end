/** @odoo-module */
import { Component, onWillStart } from "@odoo/owl";
import { patch } from "@web/core/utils/patch";


class Greet extends Component {
    static template = "patching_module.Greet";

    // static props = ["name?"];
    static props = { name: { type: String } };
}

// inserting a new prop key-value in props object
patch(Greet.props, "prop insert patch", {
    id: { type: Number } 
});

// updating existent prop object in props object
patch(Greet.props, "prop update patch", {
    name: { type: String, optional: true } 
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