from flask import Flask, render_template
import json
import os.path
import numpy as np
from database.operations import select
from database.sql_provider import SQLProvider

app = Flask(__name__)
app.config['db_config'] = json.load(open('config/db.json'))
provider = SQLProvider(os.path.join(os.path.dirname(__file__), 'sql'))


def func_prod_res(product_result):
    pass

@app.route('/')
def start_page():
    _sql = provider.get('dots.sql')
    product_result = select(app.config['db_config'], _sql)
    if len(product_result) == 0:
        return "No one dots"
    print(product_result[0])
    print(product_result)
    list_of_result = []
    for tuple_of_result in product_result:
        list_of_result.append(list(tuple_of_result))
    return render_template('dots_result.html', data=list_of_result)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5002)
