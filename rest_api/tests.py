"""
Unit Test
Authors:
Harshil Vyas - @Harshil-V
Sanjay Sathyarapu - @sanjaysathyarapu
"""

import unittest
import json
from app import app

# The TestCreateTweetRoute class is a unit test case for the create tweet route in a Python
# application.
class TestCreateTweetRoute(unittest.TestCase):

    def setUp(self):
        """
        The setUp function is used to configure the testing environment for the app.
        """
        app.testing = True
        self.app = app.test_client()

    def test_create_tweet_success(self):
        """
        The function tests the successful creation of a tweet by sending a POST request with tweet text
        and checking the response status code and message.

        @author: Sanjay Sathyarapu
        """
        tweet_text = 'Tweet Test'
        data = {'tweet_text': tweet_text}
        headers = {'Content-Type': 'application/json'}

        response = self.app.post('/create', data=json.dumps(data), headers=headers)
        response_data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response_data['message'], 'Tweet created successfully')

    def test_create_tweet_missing_text(self):
        """
        The function `test_create_tweet_missing_text` tests the behavior of the `/create` endpoint when
        the `tweet_text` field is missing or empty.

        @author: Harshil Vyas
        """
        data = {'tweet_text': ""}
        headers = {'Content-Type': 'application/json'}

        response = self.app.post('/create', data=json.dumps(data), headers=headers)
       
        self.assertEqual(response.status_code, 204)

    def test_create_tweet_failure(self):
        """
        The function tests the failure case of creating a tweet by sending an invalid tweet text and
        expects a 400 status code and an error message in the response.

        @author: Sanjay Sathyarapu
        """
        tweet_text = 'Invalid tweet text'
        data = {'tweet': tweet_text}
        headers = {'Content-Type': 'application/json'}

        response = self.app.post('/create', data=json.dumps(data), headers=headers)
        response_data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 400) 
        self.assertIn('error', response_data)


# The TestDeleteTweetRoute class is a unit test case for the delete tweet route in a Python
# application.
class TestDeleteTweetRoute(unittest.TestCase):

    def setUp(self):
        """
        The setUp function sets up the testing environment for the app.
        """
        app.testing = True
        self.app = app.test_client()

    def test_delete_tweet_success(self):
        """
        The function tests the successful deletion of a tweet by sending a DELETE request to the
        specified endpoint and asserting that the response status code is 200 and the message in the
        response data is 'Tweet deleted successfully'.

        @author: Sanjay Sathyarapu
        """
        tweet_id = 1702553933812809818
        response = self.app.delete(f'/delete/{tweet_id}')
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'Tweet deleted successfully')

    def test_delete_tweet_failure(self):
        """
        The function tests the failure case of deleting a tweet by sending a DELETE request with a tweet
        ID that has permission denied.

        @author: Harshil Vyas
        """
        tweet_id = 1702430661980864576  # Replace with an valid tweet_id but permission denied
        response = self.app.delete(f'/delete/{tweet_id}')
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 403) 
        self.assertIn('error', data)
   
    def test_delete_tweet_non_numeric_id(self):
        """
        The function tests the deletion of a tweet with a non-numeric ID and expects a 400 status code
        and an error message in the response.

        @author: Sanjay Sathyarapu
        """
        tweet_id = 'qwerty'
        response = self.app.delete(f'/delete/{tweet_id}')
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(response.status_code, 400)
        self.assertIn('error', data)

if __name__ == '__main__':
    unittest.main()
