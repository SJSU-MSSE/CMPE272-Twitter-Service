# CMPE272-Twitter-Service

## Frontend
@ahmedzaytounsjsu
@mkarthikkamath

---
## Backend
#### Authors:
@Harshil-V
@sanjaysathyarapu
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
3. Activate virtual envirnment
```bash
$ source venv/bin/activate # For Linux
$ source venv/Scripts/activate # For Windows
```
4. Install the requirements from `requirements.txt`
```bash
$ pip install -r requirements.txt
```
1. Add config.py file to the project which holds the keys, secrets and tokens
   - the config.py file is avaible on the Teams Share Google Drive Folder
2. Run the application
```bash
$ flask run #run without debug
$ flask --app app.py run --debug #run in debug mode with hotreload
```