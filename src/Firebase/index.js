import firebase from 'firebase/app';

require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDC2Btipn5eiNFrxW9QZwLmCxtPPPEfhvY",
    authDomain: "digigames-catolica.firebaseapp.com",
    databaseURL: "https://digigames-catolica.firebaseio.com",
    projectId: "digigames-catolica",
    storageBucket: "digigames-catolica.appspot.com",
    messagingSenderId: "684253698088",
    appId: "1:684253698088:web:6083f8ba3cc5273c623d1d"
};

export default firebase.initializeApp(firebaseConfig);