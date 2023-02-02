 var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','z'];
 var specailChar=['!','@','#','$'];
 var num=['1','2','3','4','5','6','7','8','9','0'];   // not need this array because random num can be use from randomNumArr



 // for loop for random num which run for user password len and push evry random num to radomNumArr






function generatePassword(){
  var randomCharArr=[];                      // array for random number for char index        
  var randomNumArr=[];                       // array for random number for num index
  for(var i=0;i<4;i++){                       // for loop for 4 char and 4 num
    var randomNum=Math.floor(Math.random()*25);
    randomCharArr.push(randomNum);
 
    randomNumArr.push(Math.floor(Math.random()*10))
 
   }
 
  var randomChar=Math.floor(Math.random()*4);            // for special char
  var char=specailChar[randomChar];
 
  var firstChar=alphabet[randomCharArr[0]].toLocaleUpperCase();
 
  var final=firstChar+alphabet[randomCharArr[1]]+alphabet[randomCharArr[2]]+alphabet[randomCharArr[3]]
     +char+randomNumArr[0]+randomNumArr[1]+randomNumArr[2]+randomNumArr[3];

  document.getElementById("passwordinput").value=final;
}




$("button").on("click",function(){          //eventlistner for button click
  
  var html=this.innerHTML;
  if(html=="Generate"){
      generatePassword();
      // $("input").css("borderColor","green");
      $("input").addClass("second");

      
      
    }
})

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("passwordinput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}