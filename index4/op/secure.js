firebase.initializeApp({
    apiKey:"AIzaSyDYLp1AZezHuoCsdejK-OzHoE9QGn5FzJw",
    projectId: 'tafengtravel-7cf35',
    authDomain: "tafengtravel-7cf35.firebaseapp.com",
    databaseURL: "https://tafengtravel-7cf35.firebaseio.com/"
  }); 
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
var mail;


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("成功");
    document.getElementById("mail").value = "登入狀態：已登入";
    info(user.email);
    
    if (user.uid == 'bnICmkLxO0OTHTbOopiNtWwTKY83' || user.uid == '9my42qdbUFUYqQO4WNykOTgzekY2' || user.uid == 'mPaUjWY6SjfX52nEXjGKQy1XXav2' || user.uid == ' bDbwj0BKjnY0hg5q5orSvnE1Gfi1'){
      console.log(user.uid);
      return 0;

    }else{
      alert('並非OP帳號')
      firebase.auth().signOut()
    }

  } else {
    console.log("x");
    document.getElementById("mail").value = "登入狀態：未登入";
  }
});













