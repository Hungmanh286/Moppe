import os
import pandas as pd
from recommendation import CF
from flask import Flask, request, jsonify

app = Flask(__name__)

model_trained = False
recommender = None

def initialize_recommender():
    global model_trained, recommender
    if not model_trained:
        recommender = CF(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'database', 'rating.csv'), k=2, uuCF=1)
        recommender.fit()
        model_trained = True
        
initialize_recommender()

@app.route('/recommendation', methods=['POST'])
def recommendation():
    data = request.get_json()
    userId = data.get('userId')
    result = recommender.recommend(userId)
    return jsonify({'result': result})

@app.route('/add', methods=['POST'])
def add():
    # TODO: append the new rating and retrain the recommender
    return jsonify({'error': 'Not implemented'}), 501

if __name__ == "__main__":
    app.run(port=3000, debug=True)