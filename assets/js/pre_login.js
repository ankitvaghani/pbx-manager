 $( document ).ready(function() {
     $('.row').slideDown();
});



var loginApp = angular.module('myLoginApp', []);
loginApp.controller('myLoginCtrl', function($scope) { 
    
    $(".toggle-password").click(function() {
            $(this).toggleClass("fa fa-eye-slash");
            var x = document.getElementById("passwd");
            if (x.type === "password") {
                x.type = "text";                
            } else {
                x.type = "password";
            }
    }); 

    $scope.doLogin = function() {
       var post_data = $scope.data;               
       //console.log($scope.myLoginForm.$valid);
        if (!$scope.myLoginForm.$valid) {
            //$('.alert-danger').show();
            console.log('error');
            if($scope.myLoginForm.username.$invalid && $scope.myLoginForm.passwd.$invalid)
            {
                $("#usernameError").addClass("has-error");   
                $("#passwdError").addClass("has-error");                     
            }
            else if($scope.myLoginForm.username.$invalid)
            {
                $("#usernameError").addClass("has-error");                                            
            }
            else if($scope.myLoginForm.passwd.$invalid)
            {
                $("#passwdError").addClass("has-error");                                            
            }
            return false;
        }
        else
        {
            console.log(post_data);
            $("#usernameError").removeClass("has-error");
            $("#passwdError").removeClass("has-error");
            var username = $scope.data.username;
            var password = $scope.data.passwd;
            if (username == "admin" && password == "admin")
            {
                 window.location.href = "phones.html";
            } else {
                //alert('invalid username and password');
                $('#loginError').show();
            }                
        }
    }
});