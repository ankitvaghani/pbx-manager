 $(document).ready(function() {


     //End document.ready
 });
 var addNewPhoneApp = angular.module('myAddNewPhoneApp', ['ui.toggle']);
 addNewPhoneApp.controller('myAddNewPhoneCtrl', function($scope, $http) {

//$scope.uploadFile = function(element) {
//            // alert();
//                $scope.my_profile_file = element;
//               console.log( 'file data:', $scope.my_profile_file );
//            }
    // $scope.data = {};
   


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
             var file = $('#my_profile_file')[0].files[0];
             console.log('file data', file);
             console.log('post_data',post_data);
             // var  data = {'fname': $scope.username, 'lname': $scope.last_name, 'email': $scope.email};
            
            //console.log(post_data,file);
            // var src1 = { name: 'David', age: 30 };
            // var src2 = {skill: {fullname:'abc'} };
            // var dst = {};
            // console.log('a',angular.merge(dst, src1, src2));
             
             
             
             var dst1 = {};
             console.log('dst',angular.merge(dst1, post_data, file));
             

             $http({
              method  : 'POST',
              url     : '',
              data    : $scope.data, //forms user object
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}
             })
              .then(function(data) {
              //console.log('data',data);

              });

            //headers: {'Content-Type': undefined};
            //var formData = new FormData();
             



             $('.alert-danger').hide();



           
             //var file = $scope.data.my_profile_file;
             //formData.append('file', file);
             //console.log('fomr: ', formData);
             //console.log('file:', file);
             //console.log('post data: ' , post_data);




         }
     }
 });
//
// addNewPhoneApp.directive('validFile', [function() {
//     return {
//         require: 'ngModel',
//         scope: {
//             format: '@',
//             upload: '&upload'
//         },
//         link: function(scope, el, attrs, ngModel) {
//             // change event is fired when file is selected
//             el.bind('change', function(event) {
//                 //console.log(event.target.files[0]);
//                 scope.upload({
//                     file: event.target.files[0]
//                 });
//                 scope.$apply(function() {
//                     ngModel.$setViewValue(el.val());
//                     ngModel.$render();
//                 });
//             })
//         }
//     }
// }]);

 // choose file from links
 $("#profile_upload_link").on('click', function() {
     $("#my_profile_file:hidden").trigger('click');
 });
 //Numeric validation
 function isNumericValidation(evt) {
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

         reader.onload = function(e) {
             $('#profile_picture')
                 .attr('src', e.target.result)
                 .width(100)
                 .height(80);
         };

         reader.readAsDataURL(input.files[0]);
         //console.log('reader: ', reader); // view file from choose links.


     }
 }


 // $( "#myNewPhoneForm" ).on( "submit", function() {
 //          console.log( $( this ).serialize() );
 //  });