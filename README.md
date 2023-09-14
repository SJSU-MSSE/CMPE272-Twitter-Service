# CMPE272-Twitter-Service

## Backend

### Tools / Technologies 
- Flask
- unittest
- Twitter API - Free Plan
- tweepy 

### Setup Instructions
1. Clone the repo and cd into `/rest_api`
2. Create a virtual envirnment
```bash
$ python -m venv venv
```
3. Install the requirements from `requirements.txt`
```bash
$ pip install -r requirements.txt
```
4. Add config.py file to the project which holds the keys, secrets and tokens
   - the config.py file is avaible on the Teams Share Google Drive Folder
5. Run the application
```bash
$ flask --app app.py run --debug
```