import unittest
import json
from app import app

class TestCreateTweetRoute(unittest.TestCase):

    def setUp(self):
        app.testing = True
        self.app = app.test_client()

    def test_create_tweet_success(self):
        tweet_text = 'This is a unittest tweet 2!'
        data = {'tweet_text': tweet_text}
        headers = {'Content-Type': 'application/json'}

        response = self.app.post('/create', data=json.dumps(data), headers=headers)
        response_data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response_data['message'], 'Tweet created successfully')

    def test_create_tweet_missing_text(self):
        data = {'tweet_text': ""}
        headers = {'Content-Type': 'application/json'}

        response = self.app.post('/create', data=json.dumps(data), headers=headers)
       
        self.assertEqual(response.status_code, 204)

    def test_create_tweet_failure(self):
        tweet_text = 'Invalid tweet text'
        data = {'tweet': tweet_text}
        headers = {'Content-Type': 'application/json'}

        response = self.app.post('/create', data=json.dumps(data), headers=headers)
        response_data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 400) 
        self.assertIn('error', response_data)

if __name__ == '__main__':
    unittest.main()
