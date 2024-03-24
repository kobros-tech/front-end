from odoo.http import request, route, Controller

class MyController(Controller):
    @route("/patching_module/patching_app", auth="public")
    def patching_app(self):
        return request.render(
            'patching_module.patching_app',
            {
                'session_info': request.env['ir.http'].get_frontend_session_info(),
            }
        )