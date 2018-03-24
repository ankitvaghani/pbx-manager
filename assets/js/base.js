 $(document).ready(function(){
 

//End document.ready
});
var addNewPhoneApp = angular.module('myAddNewPhoneApp', ['ui.toggle']);
      addNewPhoneApp.controller('myAddNewPhoneCtrl', function($scope) {

        $scope.uploadFile = function(element) {
        alert();
    $scope.data.my_profile_file = element;
    console.log($scope.data);
  }

//$('#voicemail_to_email').change(function() {
  if($scope.showHideEmailAddress){
       //  if (this.checked) {
             $('#email_id').fadeIn('slow');
              //$('#emailid').removeAttr('disabled');
       //  } else {
           //  $('#email_id').fadeOut('slow');
              //$('#emailid').attr('disabled','');
           //  $('#emailid').val('');
       //  }
       }
//    });
       $scope.addNewPhone = function() {
           var post_data = $scope.data;

           //console.log($scope.myLoginForm.$valid);
            if (!$scope.myNewPhoneForm.$valid) {
                 $('.alert-danger').show();
                console.log('error');
                //$("#divError").addClass("has-error");

                return false;
            }
            else
            {
                //console.log( 'serialize: ' + $( '#myNewPhoneForm' ).serialize() );

                $('.alert-danger').hide();
                 //var file = $scope.my_profile_file;
                 //console.log('file:', file);
                //console.log('post data: ' , post_data);



                // $("#divError").removeClass("has-error");
                // var username = $scope.data.username;
                // var password = $scope.data.passwd;
                // if (username == "admin" && password == "admin")
                // {
                //      window.location.href = "phones.html";
                // } else {
                //     //alert('invalid username and password');
                //     $('#loginError').show();
                // }
            }
        }
    });

 addNewPhoneApp.directive('validFile',[function() {
  return {
    require : 'ngModel',
    scope : {format: '@', upload : '&upload'},
    link : function(scope, el, attrs, ngModel) {
      // change event is fired when file is selected
      el.bind('change', function(event) {
        console.log(event.target.files[0]);
        scope.upload({file:event.target.files[0]});
        scope.$apply(function() {
          ngModel.$setViewValue(el.val());
          ngModel.$render();
        });
      })
    }
  }
}]);

    // choose file from links
         $("#profile_upload_link").on('click', function(){
             $("#my_profile_file:hidden").trigger('click');
         });
//Numeric validation
function isNumericValidation(evt){
   // return (/\d/.test(String.fromCharCode(event.which) )) 
    var charCode = (evt.which) ? evt.which : evt.keyCode
    //console.log(charCode);
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


// view file from choose links.
     function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#profile_picture')
                        .attr('src', e.target.result)
                        .width(100)
                        .height(80);
                };

                reader.readAsDataURL(input.files[0]);
                console.log(reader);
            }
        }


// $( "#myNewPhoneForm" ).on( "submit", function() {
//          console.log( $( this ).serialize() );
//  });