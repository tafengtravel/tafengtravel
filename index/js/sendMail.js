
  function sendMail(ruleForm) {
      let j
    for(i=0;i<ruleForm.guest_name.length;i++){
      j=i+1
      ruleForm.guest_name[i]='第'+j+'位旅客：'+ruleForm.guest_name[i]+'<br>'
      ruleForm.birth[i]='第'+j+'位旅客生日：'+ruleForm.birth[i]+'<br>'
      ruleForm.ID[i]='第'+j+'位旅客身分證：'+ruleForm.ID[i]+'<br>'
    }

   Email.send({
    SecureToken:"6bd818f4-bacf-48de-ac10-986fcb0cf1ce",
    To: 'tafengtravel@gmail.com',
    From: "itinerary.order@gmail.com",
    Subject: "加購訂單",
    Body: 
    ruleForm.itinerary+'<br>'+
    '訂購人數：'+ruleForm.amount+'<br>'+
    '訂購日期：'+ruleForm.dep_date+'<br>'+
    '訂購類型：'+ruleForm.type+'<br>'+
    '行程費用：'+ruleForm.price+'<br>'+
    '訂購人姓名：'+ruleForm.buyer_name+'<br>'+
    '訂購人電話：'+ruleForm.phone+'<br>'+
    '訂購人信箱：'+ruleForm.email+'<br><br>'+
     ruleForm.guest_name+ruleForm.birth+ruleForm.ID+'<br>'+
     '訂單備註：'+ruleForm.other
    ,
   }).then(
    alert('訂購成功,專員會於1個工作天內回覆您預定結果')
    
   );
   window.location.href='https://tafengtravel.github.io/tafengtravel/index/tafengindex.html'
  }
