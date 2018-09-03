This App is build with React and Youtube API. 

You can test the App on Heroku: https://youtube-heroku-app.herokuapp.com/


Files: 

public/index.html
src/App.js
src/App.css
src/components/search_bar.js
src/components/video_detail.js
src/components/video_list.js
src/components/video_list_item.js

installed node modules:

Loadash for function timer ->  npm install --save lodash
YouTube Search from ' npm install --save youtube-api-search'; 

YouTube API Key:
  You can get API key from YouTube for free! 
  Go to https://console.developers.google.com sign in with your google account and get your key.


How I did it...

First step is to install  Node.js to your machine. After installing Node open your terminal:

  npx create-react-app youtube-react-app
  // created youtube-react-app
  cd my-app
  // entering app folder 
  npm start
  // start local server 


After downloading react app I removed everything in App.js to start clean. 

Made new folder "components" where I saved all components which I will used. 
src/components/search_bar.js
src/components/video_detail.js
src/components/video_list.js 
src/components/video_list_item.js
