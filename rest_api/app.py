"""
Backend API Service
Authors:
Harshil Vyas - @Harshil-V
Sanjay Sathyarapu - @sanjaysathyarapu
"""

from flask import Flask, jsonify, request
import tweepy
import config

app = Flask(__name__)

consumer_key = config.API_KEY
consumer_secret = config.API_KEY_SECRET
access_token = config.ACCESS_TOKEN
access_token_secret = config.ACCESS_TOKEN_SECRET
bearer_token = config.BEARER_TOKEN

client = tweepy.Client(
    bearer_token=bearer_token,
    consumer_key=consumer_key,
    consumer_secret=consumer_secret,
    access_token=access_token,
    access_token_secret=access_token_secret
)

@app.route('/create', methods=['POST'])
def create_tweet():
    """
    The `create_tweet` function is a route in a Python Flask application that handles a POST request to
    create a new tweet.

    :return: The code is returning a JSON response with a success message and the response from the
    client's create_tweet method if the tweet is created successfully. If there is an exception, it
    returns a JSON response with an error message.
    """

    try:
        tweet_text = request.json['tweet_text']
        if tweet_text != "":
            response = client.create_tweet(text=tweet_text)
            return jsonify({'message': 'Tweet created successfully', 'response': response}), 201 # Created
        return jsonify(), 204 # No Content 
    except Exception as e:
        return jsonify({'error': str(e)}), 400



@app.route('/delete/<tweet_id>', methods=['DELETE'])
def delete_tweet(tweet_id):
    """
    This function deletes a tweet with the specified tweet_id and returns a success message if the
    deletion is successful.

    :param tweet_id: The `tweet_id` parameter is the unique identifier of the tweet that needs to be
    deleted. It is passed as a parameter in the URL route `/delete/<tweet_id>`

    :return: a JSON response. If the tweet is deleted successfully, it returns a JSON object with a
    message indicating the successful deletion and the response from the client. If there is an
    exception, it returns a JSON object with an error message and the status code of the exception
    response.
    """

    try: 
        response = client.delete_tweet(id=tweet_id)
        return jsonify({'message': 'Tweet deleted successfully', 'response': response}), 200
    except Exception as e:
        status_code = e.response.status_code
        return jsonify({'error': str(e)}), status_code

if __name__ == "__main":
    app.run(debug=True)