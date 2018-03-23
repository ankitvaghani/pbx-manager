 $(document).ready(function(){
 
     // //enabled and disabled toggle
     // $(function() {
     //     $('#toggle-two').bootstrapToggle({
     //         on: 'Enabled',
     //         off: 'Disabled'
     //     });
     // });
//End document.ready
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
  // //call_forwarding hide and show
  
  //    $('#call_forwarding').change(function() {
  //        if (this.checked) {
  //            $('#number_forwarding').fadeIn('slow');  
  //           // $('#forwarding_number').attr('required', 'required');             
  //           // $('#number_forwarding').attr("ng-class", "{ 'has-error' : myNewPhoneForm.forwarding_number.$invalid && !myNewPhoneForm.forwarding_number.$pristine }");
  //            $('#forwarding_number').removeAttr('disabled');
            
  //           // console.log($('#call_forwarding').val());
  //        } else {
  //            $('#forwarding_number').removeAttr('required');
  //            $('#number_forwarding').removeAttr('ng-class');
  //            $('#number_forwarding').fadeOut('slow');
  //            $('#forwarding_number').val('');
  //            $('#forwarding_number').attr('disabled','');
            
  //            //console.log($('#call_forwarding').val());
  //        }
  //    });
     
  // //voicemail_to_email hide and show
     // $('#voicemail_to_email').change(function() {
     //     if (this.checked) {
     //         $('#email_id').fadeIn('slow');
     //          //$('#emailid').removeAttr('disabled');
     //     } else {
     //         $('#email_id').fadeOut('slow');
     //          //$('#emailid').attr('disabled','');
     //         $('#emailid').val('');
     //     }
     // });
  //    //Choose profile picture
     $(function(){
         $("#profile_upload_link").on('click', function(){
             $("#my_profile_file:hidden").trigger('click');
         });
     });
// $( "#myNewPhoneForm" ).on( "submit", function() {
//          console.log( $( this ).serialize() );
//  });