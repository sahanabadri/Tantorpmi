# This file is used to start the server 

from myapps import app

app.debug = True
app.run(host='0.0.0.0', port='1995')