# Northcoders News

## Introduction

A React app with CRUD functionality, enabling users to access a range of articles, filter them by topic, read and vote on them. Users can also view and post comments on articles as default user. Articles can be sorted by votes, comment count and date in ascending or descending order.

## Hosted App

NC News is hosted on Netlify and can be found here: https://poonams-nc-news.netlify.app/ <br>The repo for this app can be found on github: https://github.com/Poonam-raj/nc-news<br><br>
This app is built off the NC News back end API (https://nc-news-m9jy.onrender.com/api/).<BR> Access the back end repo here: https://github.com/Poonam-raj/nc-news-api.<br><br>

## Set Up the Repo

### 1. Clone the Repo

In terminal:

```bash
git clone https://github.com/Poonam-raj/nc-news.git
```

### 2. Enter Directory

In terminal:

```bash
cd nc-news
```

### 3. Install Dependencies

In terminal:

```bash
npm install
```

### 4. Run Start Script

Run the React app:

```bash
npm run start
```

### 5. Check Node Verion

The minimum version of Node required is <b>v15.6.0<b>

## Deploying updated code to production URL

### 1. Commit code as normal

### 2. Create an updated build of your code

    ```bash
    npm run build
    ```

### 3. Deploy to a draft url

    ```bash
    netlify deploy
    ```

### 4. Deploy to production url

```bash
netlify deploy --prod
```

_NB_: you may need to install the netlify cli (`npm install netlify-cli -g`)
