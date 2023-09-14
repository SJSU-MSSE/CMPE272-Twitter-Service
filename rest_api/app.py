from flask import Flask, jsonify, request
import tweepy
import config
import requests

app = Flask(__name__)

consumer_key = config.API_KEY
consumer_secret = config.API_KEY_SECRET
access_token = config.ACCESS_TOKEN
access_token_secret = config.ACCESS_TOKEN_SECRET
bearer_token = config.BEARER_TOKEN

# Authenticate with Twitter
# auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
# auth.set_access_token(access_token, access_token_secret)
# api = tweepy.API(auth)

client = tweepy.Client(bearer_token=bearer_token,
                    consumer_key=consumer_key,
                    consumer_secret=consumer_secret,
                    access_token=access_token,
                    access_token_secret=access_token_secret)

@app.route('/')
def index():
    return "<h1>Welcome to KASH - Twitter Service API</h1>"

@app.route('/create_tweet', methods=['POST'])
def create_tweet():
    try:
        tweet_text = request.json['tweet_text']
        response = client.create_tweet(text=tweet_text)
        return jsonify({'message': 'Tweet created successfully', 'response': response}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/delete/<tweet_id>')
def delete_tweet(tweet_id):
    try:
        response = client.delete_tweet(id=tweet_id)
        return jsonify({'message': 'Tweet deleted successfully', 'response': response}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# @app.route('/api')
# def api_auth():
#     try:
#         api.verify_credentials()
#         print ('Successful Authentication')
#     except:
#         print ('Failed authentication')
#         raise

#     user = api.get_user(screen_name="Harshil_V330")
#     # print(user)
#     # print()
#     # print(api.home_timeline())
#     return (user.name)

if __name__ == "__main":
    app.run(debug=True)