from flask import Flask

app = Flask(__name__)

from myapps.api.mongo_curd_operations import mod
from myapps.site.site_routes import mod

app.register_blueprint(site.site_routes.mod)
app.register_blueprint(api.mongo_curd_operations.mod, url_prefix='/api')