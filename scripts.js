  // Create a reference to firebase
  var messagesRef = new Firebase('https://amhungry.firebaseio.com/');
  
  //grab user location
  
  
  //grab user location
  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  
  
  function showPosition(position) {
  
  var laty=position.coords.latitude;
  var longy=position.coords.longitude;
  
  
  alert(laty);
  alert(longy);
  
    //x.innerHTML = "Latitude: " + position.coords.latitude +
    //"<br>Longitude: " + position.coords.longitude;
}
  
  

  // C.R.E.A.M -  cache your elements
//localstorae
//order comin soon ayay tomorow u will work doars
  var messageField = $('#messageInput');
  var nameField = $('#nameInput');
  var locField = $('#locInput');
  
  
  
  
  var messageList = $('.messages');

  function addMessage(data) {
     var username = data.name || 'anonymous'; 
    var message = data.text;
	var locat = data.locat;

    // Create an element
    
      var locElement = $('<pre><br>').text(locat);
      
  //    if(locElement=="kigezi fm"){
  //alert("admin");
  //}
	var nameElement = $('<strong>').text(username);
    var messageElement = $('<li type=none>').text(message).prepend(nameElement).prepend(locElement);
      // var messageElement = $('<li>').text(nameElement).prepend(locElement).prepend(message);
    // var messageElement = $('<li>').text(nameElement).prepend(locElement).prepend(message);
     
    
    // Add the message to the DOM
    messageList.append(messageElement);

    // Scroll to the bottom of the message list
    messageList[0].scrollTop = messageList[0].scrollHeight;
  }

  // Listen for the form submit
  $('.chat').on('submit',function(e) {

    // stop the form from submitting
    e.preventDefault();

    // create a message object
    
    
    var message = {
      name : nameField.val(),
         locat : locField.val(),
      text : messageField.val()
    }
    // Save Data to firebase
    messagesRef.push(message);

    // clear message field
    messageField.val('');

  });

  // Add a callback that is triggered for each chat message
  // this is kind of like an Ajax request, but they come in via websockets
  // 10 of them will load on page load, and any future messages will as well
  messagesRef.limitToLast(1000).on('child_added', function (snapshot) {
    // Get data from returned
    addMessage(snapshot.val());
  });
