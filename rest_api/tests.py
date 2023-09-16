import unittest
import json
from app import app

class TestCreateTweetRoute(unittest.TestCase):

    def setUp(self):
        app.testing = True
        self.app = app.test_client()

    def test_create_tweet_success(self):
        tweet_text = 'Tweet Test'
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

class TestDeleteTweetRoute(unittest.TestCase):

    def setUp(self):
        app.testing = True
        self.app = app.test_client()

    def test_delete_tweet_success(self):
        tweet_id = 1702553933812809818
        response = self.app.delete(f'/delete/{tweet_id}')
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'Tweet deleted successfully')

    def test_delete_tweet_failure(self):
        tweet_id = 1702430661980864576  # Replace with an valid tweet_id but permission denied
        response = self.app.delete(f'/delete/{tweet_id}')
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 403) 
        self.assertIn('error', data)
   
    def test_delete_tweet_non_numeric_id(self):
        tweet_id = 'qwerty'
        response = self.app.delete(f'/delete/{tweet_id}')
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 400)
        self.assertIn('error', data)

if __name__ == '__main__':
    unittest.main()
