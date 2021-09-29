// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAqbAPgA9G-H4Lv1mzUDZO6zmEnMFeIf-E",
    authDomain: "mobile-patient-tracker-61369.firebaseapp.com",
    projectId: "mobile-patient-tracker-61369",
    storageBucket: "mobile-patient-tracker-61369.appspot.com",
    messagingSenderId: "1067452429483",
    appId: "1:1067452429483:web:f2d59121816e58548433ee",

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  
  // Set up our register function
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    first_name = document.getElementById('first_name').value
    last_name = document.getElementById('last_name').value
    idNum = document.getElementById('idNum').value
    address = document.getElementById('address').value
    conditions = document.getElementById('conditions').value
    
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
    if (validate_field(first_name) == false ||validate_field(last_name) == false || validate_field(idNum) == false || validate_field(address) == false || validate_field(conditions) == false  ) {
        alert('One or More Extra Fields is Outta Line!!')
        return
      }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        email : email,
        password :password,
        first_name : first_name,
        last_name : last_name,
        idNum : idNum,
        address : address,
        conditions : conditions,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('patients/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created!!')
     
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('patients/' + user.uid).update(user_data)
  
      // DOne
      alert('User Logged In!!')
      
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }