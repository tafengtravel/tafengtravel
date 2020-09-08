firebase.initializeApp({
    apiKey:"AIzaSyDYLp1AZezHuoCsdejK-OzHoE9QGn5FzJw",
    projectId: 'tafengtravel-7cf35',
    authDomain: "tafengtravel-7cf35.firebaseapp.com",
    databaseURL: "https://tafengtravel-7cf35.firebaseio.com/",
    storageBucket: "tafengtravel-7cf35.appspot.com",
  }); 
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
var mail;



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("成功");
    document.getElementById("mail").value = "登入狀態：已登入";
    info(user.email);
    
    if (user.email == 'kevin860320@gmail.com' || user.email == 'tafengtravel@gmail.com' || user.email == 'amy0919887@gmail.com'){
      return 0;
    }else{
      alert('並非管理員帳號')
      firebase.auth().signOut()
    }

  } else {
    console.log("x");
    document.getElementById("mail").value = "登入狀態：未登入";
  }
});















