/** @odoo-module */
import { Component, onWillStart } from "@odoo/owl";
// import { useService } from "@web/core/utils/hooks";
import { patch } from "@web/core/utils/patch";




// patch a function
function initial () {
    let x = 1;
    console.log("variable x is: ", x);
    return x
}

const obj = { initial };

patch(obj, "_super patch", {
    initial () {
        const value_returned = this._super();
        let y = 2;
        console.log("variable y is: ", y);

        // return value_returned
        return y
    }
});

const X = obj.initial();
console.log("initial function returning: ", X);

export class Root extends Component {
    static template = "your_module.Root";

    setup() {
        // this.action = useService("action");

        onWillStart(() => {
            console.log("Will start rendering!");
        });
    }

    static props = {};
}