// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: 'AIzaSyDfl5mcuDPfqgR1vPwxynDQOU1ByCPb5Q4',
    authDomain: 'wissen-26715.firebaseapp.com',
    databaseURL: 'https://wissen-26715-default-rtdb.firebaseio.com',
    projectId: 'wissen-26715',
    storageBucket: 'wissen-26715.appspot.com',
    messagingSenderId: '527966998628',
    appId: '1:527966998628:web:af0bfc52bc2ddd6ff94f71',
    measurementId: 'G-1T4HDBFKMX'
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
