$(document).ready(() => {
  function addMessage(input, className){
    var message = $("<div>")
    console.log(input)
    message.text(input)
    message.addClass(className)
    $("#chatlogPackage").append(message)
  }

  function roboMessage(){
    var randomNumber = Math.floor(Math.random()*(10-1+1))+1
    var cuteMessages = {
      1: "How are you doing today?",
      2: "Im starving how about you are you hungry?",
      3: "do you think theres life beyond planet earth?",
      4: "are you right or left handed?",
      5: "how many best friends do you have?",
      6: "what country are you from?",
      7: "do you live in a house or apartment?",
      8: "do you have any pets?",
      9: "whats your favorite food?",
      10: "whats your favorite color?"
    }

      function randomGenerator(){
        return cuteMessages[randomNumber];
      }

    addMessage(randomGenerator(), "left")
  }
  var firstMessage = $("<div>")
  firstMessage.text("Hi there whats your name")
  firstMessage.addClass("left")
  $("#chatlogPackage").append(firstMessage)

  submitmessage.onclick = function() {
    event.preventDefault()

    var div = $("#chatlogPackage");
    var chatting = $('#usermessage').val();
    addMessage(chatting, "right");
    div.scrollTop(div.prop("scrollHeight"))
    setTimeout(function(){ 
      roboMessage() },2000
    );
    $('#usermessage').val('');
  }

})
