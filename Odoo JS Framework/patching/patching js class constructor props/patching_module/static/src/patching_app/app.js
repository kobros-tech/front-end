/** @odoo-module */
import { whenReady } from "@odoo/owl";
import { mount } from "@odoo/owl";
import { Root } from "./root";

import { templates } from "@web/core/assets";

whenReady(() => mount(Root, document.body, { templates, dev: true }));