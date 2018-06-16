/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
var matCountDiv = document.getElementById('matCount');
matCountDiv.innerHTML = '11';
//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
var msgCountDiv = document.getElementById('msgCount');
msgCountDiv.innerHTML = '23';
//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
var fullnameDiv = document.getElementById('fullname');
fullnameDiv.innerHTML = 'Ronald McDonald';
//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
var ageDiv = document.getElementById('age');
ageDiv.innerHTML = 63;
//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var dataSection = document.getElementById('data');
var jobDiv = document.createElement('div');
jobDiv.innerHTML = '<strong><span style="color: #ff0000">Job:</span></strong> Clown and Restauranteur';
jobDiv.id = 'job';
dataSection.appendChild(jobDiv);
//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var hobbiesDiv = document.createElement('div');
hobbiesDiv.innerHTML = '<strong><span style="color: #0000a0">Hobbies:</span></strong> Long romantic walks on the beach, candle light Big mac dinners and tormenting the King.';
hobbiesDiv.id = 'hobbies';
dataSection.appendChild(hobbiesDiv);
//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var locationDiv = document.createElement('div');
locationDiv.innerHTML = '<strong><span style="color: orange">Location:</strong> Honolulu, HI';
locationDiv.id = 'location';
dataSection.appendChild(locationDiv);
//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var wantsDiv = document.createElement('div');
wantsDiv.innerHTML = '<strong><span style="color: green">Wants:</span></strong> Looking for a Mrs. mcDonald.';
wantsDiv.id = 'wants';
dataSection.appendChild(wantsDiv);
//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var profileDiv = document.getElementById('profile');

// profileDiv.innerHTML = "<style type='p'>#pro1:hover, #pro2:hover{margin: 5px;color: rgb(140, 0, 255);}</style>";

var pro2para = document.createElement('p');
pro2para.id = 'pro2';
pro2para.innerHTML = '<strong><span style="color: purple">Profile:</strong></span> 6 feet, clown face, big shoes, yellow, red and white all over';
profileDiv.appendChild(pro2para);
//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var firstNameDiv = document.getElementsByClassName('firstName');
firstNameDiv[0].innerHTML = 'Wendy';
//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var otherAgeDiv = document.getElementsByClassName('otherAge');
otherAgeDiv[0].innerHTML = 48;
//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var statusDiv = document.getElementsByClassName('status');
statusDiv[0].innerHTML = 'Single Mother';
//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
var firstNamePeko = document.getElementsByClassName('firstName');
firstNamePeko[1].innerHTML = 'Peko Chan';
//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
var otherAgePeko = document.getElementsByClassName('otherAge')[1];
otherAgePeko.innerHTML = 68;
 //Final Boss Create your own profile into the page:
 //change image to match your profile
var harleyImg = document.getElementsByClassName('other')[2];
harleyImg.src = 'https://i.pinimg.com/originals/3d/e6/f5/3de6f5a1edb46e6284ff6b06775192f2.jpg';
 //div with class name of firstName
 var firstNameHarley = document.getElementsByClassName('firstName')[2];
 firstNameHarley.innerHTML = 'Harley Quinn <br> (Dr. Harleen Frances Quinzel) <br> voice of Tara Strong';
 //div with class name of otherAge
var harleyAge = document.getElementsByClassName('otherAge')[2];
harleyAge.innerHTML = 26;
 //div with class name of status
 var harleyStatus = document.getElementsByClassName('status')[2];
 harleyStatus.innerHTML = 'Single';
 //div with class anem of Motto
 var harleyMotto = document.getElementsByClassName('motto')[2];
 harleyMotto.innerHTML = 'Hey, Puddin'




