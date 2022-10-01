const firebaseConfig = {
    apiKey: "AIzaSyBhKuziruyBUAAYGyMLUvSDZ8OJjadbUp0",
    authDomain: "to-do-list-c459f.firebaseapp.com",
    projectId: "to-do-list-c459f",
    storageBucket: "to-do-list-c459f.appspot.com",
    messagingSenderId: "554241689712",
    appId: "1:554241689712:web:efc5388dc6c758e7a04cb5",
    measurementId: "G-6YKREC4MLC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);