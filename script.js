$(document).ready(function() {

        //$( "#datepicker" ).datepicker();
        $('#datepicker').datepicker({
          showOn: "button",
          buttonImage: "img/calendar.gif",
          buttonImageOnly: true,
          buttonText: "Select date",
          dateFormat: 'dd-mm-yy' }); // change the date format on initialization
        
        $( "#datepicker" ).datepicker( "setDate", "10-12-2012" );

        $(document).on('click', '#btn', function(event) {

          event.preventDefault();

          var daysOfMonth = ['Jan', 'Feb', 'March', 'Apr',
        'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'];
          var birthDate = $( "#datepicker" ).datepicker( "getDate" );
          var birthDateTime = birthDate.getTime();
          //var htmlBirth = birthDateTime.split(' ').slice(4);
          var birth = birthDate.toDateString();
          var today = new Date();
          var hours = today.getHours();
          var minutes = today.getMinutes();
          var array = birth.split(' ');
          var bday_flag=0;

          /*console.log(birthDate);
          console.log(birth);
          console.log(array);*/

          //console.log('Your birthday is ' + array[1] + ' ' + array[2] + '\n');
        
          if(today.getMonth() < daysOfMonth.indexOf(array[1])) {
            var age = today.getFullYear() - array[3] - 1;
            $('#content').html("Boo! No Parties Today");

          }
          if(today.getMonth() == daysOfMonth.indexOf(array[1])) {
            if(today.getDate() < parseInt(array[2])) {
              age = today.getFullYear() - array[3] - 1;
              $('#content').html("Boo! No Parties Today");

            }
            if(today.getDate() == parseInt(array[2])) {
              age = today.getFullYear() - array[3];
              $('#content').html("It\'s your birthday?! Time to party !");
            }
            else {
            age = today.getFullYear() - array[3];
            $('#content').text("Boo! No Parties Today");

            }
          }
          if(today.getMonth() > daysOfMonth.indexOf(array[1])) {
            age = today.getFullYear() - array[3];
            $('#content').html("Boo! No Parties Today");

          }
          //console.log(today.getMonth());
        var ageMinutes = Math.round((today.getTime() - birthDateTime)/(1000*60));// + nowMin);
        var ageDays =  (today.getTime() - birthDateTime)/(1000*60*60*24);
        var ageSplit = ageDays.toString().split('.');
        var newAge = ageSplit[0];
        /*console.log('You are ' + age + ' years old\n');
        console.log('You are ' + newAge + ' days old');

        console.log('You are ' + ageMinutes + ' minutes old');*/


          var tenKDays = new Date(birthDateTime + 1000*60*60*24*10000);
          var twentyKDays = new Date(birthDateTime + 1000*60*60*24*20000);
          var fivehundredKHrs = new Date(birthDateTime + 1000*60*60*500000);
          var oneMillionMin = new Date(birthDateTime + 1000*60*1000000);
          var tenMillionMin = new Date(birthDateTime + 1000*60*10000000);
          var fiftyMilMin = new Date(birthDateTime + 1000*60*50000000);
          var billionSec = new Date(birthDateTime + 1000*1000000000);

          /*console.log(tenKDays + '\n' + twentyKDays + '\n' +
          fivehundredKHrs + '\n' + oneMillionMin + '\n' + tenMillionMin
          + '\n' + fiftyMilMin + '\n' + billionSec);*/

          $('.info_box').html('Your birthday is ' + birth + '<br>' +
          'You are ' + age + ' years old <br>' +
          'You are ' + newAge + ' days old<br>' +
          'You are ' + ageMinutes + ' minutes old<br>' +
          '<br>' + '<br>' +  '<br>' +
          'Your 10 000th day was ' + tenKDays.toString().split(' ').slice(0,4).join(' ') + '<br>' +
          'Your 20 000th day was ' + twentyKDays.toString().split(' ').slice(0,4).join(' ')  + '<br>' + 
          'Your 500 000th hour was ' + fivehundredKHrs.toString().split(' ').slice(0,4).join(' ')  + '<br>' + 
          'Your one millionth minute was ' + oneMillionMin.toString().split(' ').slice(0,4).join(' ')  + '<br>' +
          'Your ten millionth minute was ' + tenMillionMin.toString().split(' ').slice(0,4).join(' ')  + '<br>' +
          'Your fity millionth minute was ' + fiftyMilMin.toString().split(' ').slice(0,4).join(' ')  + '<br>' +
          'Your one billionth minute was ' + billionSec.toString().split(' ').slice(0,4).join(' ')  + '<br>');
        })
})
    
