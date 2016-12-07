   
        alert("auth");
     var messageListRef = new Firebase("https://amhungry.firebaseio.com/points/");
    messageListRef.authWithPassword({
      email    : "israelmikan@gmail.com",
      password : "dangersisrael"
    }, function(error, authData) {
      if (error) {
        switch (error.code) {
          case "INVALID_EMAIL":
            console.log("The specified user account email is invalid.");
            break;
          case "INVALID_PASSWORD": 
            console.log("The specified user account password is incorrect.");
            break;
          case "INVALID_USER":
            console.log("The specified user account does not exist.");
            break;
          default:
            console.log("Error logging user in:", error);
        }
      } else {
        console.log("Authenticated successfully with payload:", authData);
			alert("Auth Successful");		
						
      }
    });
    //end of auth
   


    // Same as the previous example, except we will also display an alert
    //