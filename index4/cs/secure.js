firebase.initializeApp({
    apiKey:"AIzaSyDYLp1AZezHuoCsdejK-OzHoE9QGn5FzJw",
    projectId: 'tafengtravel-7cf35',
    authDomain: "tafengtravel-7cf35.firebaseapp.com",
    databaseURL: "https://tafengtravel-7cf35.firebaseio.com/",
  }); 
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
var mail;



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("成功");
    document.getElementById("mail").value = "登入狀態：已登入";

    info(user.email);

  } else {
    console.log("x");
    document.getElementById("mail").value = "登入狀態：未登入";
  }
});









