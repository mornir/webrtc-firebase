const config = {
  apiKey: 'AIzaSyBajPcoloVgJTcE44NhPLvVsqnWG9RSBEE',
  authDomain: 'simple-webrtc-video-chat.firebaseapp.com',
  databaseURL: 'https://simple-webrtc-video-chat.firebaseio.com',
  projectId: 'simple-webrtc-video-chat',
  storageBucket: 'simple-webrtc-video-chat.appspot.com',
  messagingSenderId: '748074977719',
}
firebase.initializeApp(config)

const database = firebase.database().ref()

export { database }
