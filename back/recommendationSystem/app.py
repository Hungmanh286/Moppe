import pandas as pd
from recommendation import CF
from flask import Flask, request, jsonify

app = Falsk(__name__)

model_trained = False
recommender = None

def initialize_recommender():
    if not model_trained:
        recommender = CF('database\\rating.csv', k=2, uuCF=1)
        recommender.fit()
        model_trained = True
        
initialize_recommender()

@app.route('/recommendation', method=['POST'])
def recommendation():
    data = request.get_json()
    userId = data.get('userId')
    result = recommender.recommend(userId)
    return jsonify({'result': result})

@app.route('/add', method=['POST'])
def add():
    data = request.get_json()

if __name__ == "main":
    app.run(debug=True)