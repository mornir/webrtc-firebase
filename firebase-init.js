const config = {
  apiKey: 'AIzaSyDMZZs3Kiic0XEFAxKoZYnR6bbRZwCmGPE',
  authDomain: 'web-rtc-3f476.firebaseapp.com',
  databaseURL: 'https://web-rtc-3f476.firebaseio.com',
  projectId: 'web-rtc-3f476',
  storageBucket: 'web-rtc-3f476.appspot.com',
  messagingSenderId: '705697983314',
}
firebase.initializeApp(config)

const database = firebase.database().ref()

export { database }
