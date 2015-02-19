// Show loading screen
function loadingApp() {
	$( "#loading" ).fadeOut( fadetime );	
	$( "#loading_bg" ).fadeOut( fadetime );
}
// var angleLoad = 0;
// setInterval(function(){
//      angleLoad+=3;
//      $("#loading").rotate(angle);
//  },250);

//Custom scrollbar
(function($){
$(window).load(function(){
  $(".content").mCustomScrollbar({
    theme:"minimal-dark",
    scrollButtons:{
      enable:true
    }
  });
});
})(jQuery);

//What cake to start with
var i = 1;

//Begin at the top of the sprite
var sprite = 0;

//Info
var title = 'Eat All The Cake';
var heading = "I'm hungry, gimme cake!";
var bg = 1; //Background

// Time for de notifications to show
var delaytime = 5000;
var fadetime = 300;

//Amount of cake eaten
var count = 0;

//Amount of achievements achieved
var achieved = 0;

//Amount of cakes owned
var owned = 1;
var cake_id = 1;

//Amount of upgrades bought
var upgrades = 0;

//Amount of bites taken
var bites = 0;
var bites_per_cake = 13;

//Amount of calories
var cal = 0;
var cal_all = 0; //+ spent calories
var cal_total = 0;

//Workout
var work = 0;

//Reset the game
function resetCheck(){ 
	$( "#note" ).fadeIn( fadetime );
	document.getElementById('note').innerHTML = "<div id='resetWarning'><img src='img/notifications/warning.png'><p><b>Are you sure?</b></p><p>Are you sure you want to reset your game?</p><p class='confirm_true' onClick='resetGame()'>YES I\'M SURE</p><p class='confirm_false' onClick='resetFalse()'>NOOOO</p></div>";
}
function resetGame(){
	// Reset all variables
    i = 1;
    count = 0;
	bites = 0;
	cal_total = 0;
	cal_all = 0;
	work_time = 0;
	owned = 1;
	upgrades = 0;
	// Reload page
	window.location.reload();
}
function resetFalse () {
	$("#resetWarning").fadeOut( fadetime );
	$( "#note" ).fadeOut( fadetime );
}

// Show News
$("#news").fadeOut(0);

function showNews(){
    $("#news").fadeIn( fadetime );
}

function hideNews(){
    $("#news").fadeOut( fadetime );
}

// Show Achievements
$("#show_achieved").animate({height: "0px"}, 0);

function showAchieved(){
    $("#show_achieved").animate({height: "300px"}, 300);
}

function hideAchieved(){
    $("#show_achieved").animate({height: "0px"}, 300);
}

// Show Menu
document.getElementById('close_menu').style.display = 'none';
document.getElementById('menu').style.display = 'block';
document.getElementById('achievements').classList.add("achieve_hide");
document.getElementById('achievements').classList.remove("achieve_show");

function showMenu(){
	document.getElementById('menu').style.display = 'none';
	document.getElementById('close_menu').style.display = 'block';
    document.getElementById('achievements').classList.remove("achieve_hide");
    document.getElementById('achievements').classList.add("achieve_show");
    $("#flashy").hide();
}

function hideMenu(){
	document.getElementById('close_menu').style.display = 'none';
	document.getElementById('menu').style.display = 'block';
    document.getElementById('achievements').classList.add("achieve_hide");
    document.getElementById('achievements').classList.remove("achieve_show");
    $("#flashy").show();
}

//Rotate background
var angle = 0;
setInterval(function(){
     angle+=3;
     $("#flashy").rotate(angle);
 },150);

var angleFlash = 0;
setInterval(function(){
     angleFlash-=3;
     $("#flashytwo").rotate(angleFlash);
 },130);

//Title Tag
document.title = ""+title+"";

//Heading
document.getElementById('heading').innerHTML = '<h1>'+heading+'</h1>';

//Counter
document.getElementById('counter').innerHTML = "Amount of cake eaten: <b>0</b>";
document.getElementById('bites').innerHTML = "Bites taken: <b>0</b>";
document.getElementById('calories').innerHTML = "Calories in bank: <b>0</b> Kcal";
document.getElementById('calories_all').innerHTML = "Calories gained: <b>0</b> Kcal";
	//Yes, a second time, this is for the pop-up menu with stats
	document.getElementById('counterr').innerHTML = "Amount of cake eaten: <b>0</b>";
	document.getElementById('caloriess').innerHTML = "Calories in bank: <b>0</b> Kcal";
	document.getElementById('caloriess_all').innerHTML = "Calories gained: <b>0</b> Kcal";
document.getElementById('workout').innerHTML = "Workout: <b>0</b> Minutes";
document.getElementById('achieved').innerHTML = "Achievements: <b>0</b> achieved";
document.getElementById('owned').innerHTML = "Cakes: <b>1</b> unlocked";
document.getElementById('upgrades').innerHTML = "Upgrades Unlocked: <b>0</b>";

//Hide notifications
$( "#note" ).delay(0).fadeOut( 0 );

// Different Pies
//Perhaps this could have been done a lot easier, but he, I'm still learning :P
var index;
var text = "";
var cakesAva = ["Chocolate Muffin", "Strawberry Pie", "Blueberry Pie", "Apple Pie", "Donut", "Rainbow Cake"];
var cakesCal = ["5", "10", "20", "45", "100", "500"];
var cakesLvl = ["0", "5", "10", "20", "50", "249"];
var cakesid = ["1", "2", "3", "4", "5", "6"];
for (index = 0; index < cakesAva.length; index++) {
    text += "<div class='cakes' id='new_cake"+cakesid[index]+"'><div id='img'><img src='img/cakes/cake_"+cakesid[index]+"_thumb.png'></div><div id='name'><p><b>" +cakesAva[index]+" <k>("+cakesLvl[index]+")</k></b></p><p>"+cakesCal[index]+" Kcal/bite</p></div></div>";
}
text += "";
document.getElementById("ava_cakes").innerHTML = text;

//Achievements
var order;
var content = "";
var ach_title = ["First Bite", "Cupcake", "Apple Pie", "1 Week Workout", "Diabetes", "F*cking Magic", "First Upgrade", "Ahh Hell No"];
var ach_desc = ["Take the first bite of the cupcake", "Finish the cupcake", "Unlock the apple pie", "Get a 1 week workout on the timer", "Get diabetes by eating 100 cakes", "Unlock the rainbow cake", "Purchase your first upgrade", "Take 100.000 bites"];
var ach_id = ["1", "2", "3", "4", "5", "6", "7", "8"];
for (order = 0; order < ach_title.length; order++) {
    content += "<li><img src='img/achievements/"+ach_id[order]+".png' id='achiev"+ach_id[order]+"'> <ul> <b>"+ach_title[order]+"</b> <p>"+ach_desc[order]+"</p> </ul> </li>";
}
content += "";
document.getElementById("achiev").innerHTML = content;

//Unlock Cupcake before taking a bite
if(bites == 0) {
	$("#new_cake1").css({opacity: 1});
}
$(".cakes").mouseover(function() {
	$(this).css({opacity: 1});
});
$(".cakes").mouseleave(function() {
	$(this).css({opacity: 0.3});
	$("#new_cake1").css({opacity: 1});
});



// Everything done after clicking the cake
function feed(){

	// Cake names and data + unlock + backgrounds
	if(count >= cakesLvl[0]) {
		var newcake = cakesAva[0];
		var cal_gain = 5;
		var work_gain = 2.5;
		$("#new_cake1").css({opacity: 1}); //Do NOT change css to animate or whatever, it lags! (Transition effect is provided in CSS)
		heading = 'Cupcake Madness';
	}
	if(count >= cakesLvl[1]) {
		var newcake = cakesAva[1];
		var cal_gain = 10;
		var work_gain = 5;
		$("#new_cake2").css({opacity: 1});
		heading = '“Now that\'s a pie!.” ';
	}
	if(count >= cakesLvl[2]) {
		var newcake = cakesAva[2];
		var cal_gain = 20;
		var work_gain = 15;
		$("#new_cake3").css({opacity: 1});
		heading = '“Pie makes everybody happy.” ';
	}
	if(count >= cakesLvl[3]) {
		var newcake = cakesAva[3];
		var cal_gain = 45;
		var work_gain = 30;
		$("#new_cake4").css({opacity: 1});
		heading = '“Who wants pie?”';
	}
	if(count >= cakesLvl[4]) {
		var newcake = cakesAva[4];
		var cal_gain = 100;
		var work_gain = 45;
		$("#new_cake5").css({opacity: 1});
		heading = 'Hmmmm.... Donut';
	}
	if(count >= cakesLvl[5]) {
		var newcake = cakesAva[5];
		var cal_gain = 500;
		var work_gain = 375;
		$("#new_cake6").css({opacity: 1});
		heading = 'Rainbow!!!!!';
	}

	// Count calories and workout
	bites++;
	var cal_total = cal_gain * bites;
	var cal_all = cal_gain * bites;
	var work_total = work_gain * bites;

	// Convert workout to hours, days, weeks, months or years
	var work_time = work_total.toFixed(0);;
	var time = ' Minutes';

	if(work_total >= 60) {
		var work_hours = work_total / 60;
		var time = ' Hours';
		var work_time = work_hours.toFixed(0); 
	}

	if(work_total >= (60*24)) {
		var work_days = work_total / (60*24);
		var time = ' Days';
		var work_time = work_days.toFixed(0); 
	}

	if(work_total >= (60*24*7)) {
		var work_weeks = work_total / (60*24*7);
		var time = ' Weeks';
		var work_time = work_weeks.toFixed(0);
	}

	if(work_total >= (60*24*31)) {
		var work_months = work_total / (60*24*31);
		var time = ' Months';
		var work_time = work_months.toFixed(0); 
	}

	if(work_total >= (60*24*365)) {
		var work_year = work_total / (60*24*365);
		var time = ' Years';
		var work_time = work_years.toFixed(0); 
	}

	//Unlock cakes
	if(i == 13) {
		if(count == 5 || count == 10 || count == 20 || count == 50 || count == 249) {
			cake_id++;	
			owned++;
		}
	}

	// Change headings
	i++
	sprite = sprite + 500;

	if(i == 13){ 
		count++;
		document.getElementById('heading').innerHTML = '<h2>Eat more '+newcake+' :D</h2>';
		document.getElementById('subheading').innerHTML = '<h1>'+count+' Cakes eaten ('+bites+' Bites)</h1>';
	}
	if(i != 13) {
		document.getElementById('heading').innerHTML = '<h2>'+heading+'</h2>';
		document.getElementById('subheading').innerHTML = '<h1>'+count+' Cakes eaten ('+bites+' Bites)</h1>';
	}

	// Simple fix for a loop :P
	if(i == 14){
		i = 1;
		sprite = 0;
	}

	// Cakes + Notifications
	if(i == 1) {
		if(count == 5 || count == 10 || count == 20 || count == 50 || count == 250){
			$( "#note" ).fadeIn( fadetime );
			document.getElementById('note').innerHTML = "<img src='img/notifications/unlock.png'><p><b>New Cake!</b></p><p>You've unlocked "+newcake+"!</p>";
			$( "#note" ).delay(delaytime).fadeOut( fadetime );
		}
	}

	document.getElementById('cake_img').style.marginTop = "-"+sprite+"px";
	document.getElementById('cake_img').src = 'img/cakes/cake_'+cake_id+'.png';

	// Achievements
	if(bites == 1) {
		var achieved_id = ach_id[0];
		var achieved_title = ach_title[0];
		var achieved_desc = ach_desc[0];
	}
	if(work_weeks == 1) {
		var achieved_id = ach_id[3];
		var achieved_title = ach_title[3];
		var achieved_desc = ach_desc[3];
	}
	if(bites == 100000) {
		var achieved_id = ach_id[7];
		var achieved_title = ach_title[7];
		var achieved_desc = ach_desc[7];
	}
	if(upgrades == 1) {
		var achieved_id = ach_id[6];
		var achieved_title = ach_title[6];
		var achieved_desc = ach_desc[6];
	}
	if(count == 100) {
		var achieved_id = ach_id[4];
		var achieved_title = ach_title[4];
		var achieved_desc = ach_desc[4];
	}
	if(count == 20) {
		var achieved_id = ach_id[2];
		var achieved_title = ach_title[2];
		var achieved_desc = ach_desc[2];
	}
	if(count == 250) {
		var achieved_id = ach_id[5];
		var achieved_title = ach_title[5];
		var achieved_desc = ach_desc[5];
	}
	if(count == 1) {
		var achieved_id = ach_id[1];
		var achieved_title = ach_title[1];
		var achieved_desc = ach_desc[1];
	}

	// Fix for count
	var one = (bites_per_cake*1)-1;
	var twenty = (bites_per_cake*20)-1;
	var hundred = (bites_per_cake*100)-1;
	var twohundredfifty = (bites_per_cake*250)-1;

	// Achievements pop-up
	if(bites == 1 || work_weeks == 1 || bites == 100000 || upgrades == 1 || bites == one || bites == twenty || bites == hundred || bites == twohundredfifty) {
		$("#achiev"+achieved_id).animate({opacity: 1});
		$( "#note" ).fadeIn( fadetime );
		document.getElementById('note').innerHTML = "<img src='img/notifications/achievement.png'><p><b>Achievement!</b></p><p>You've achieved '"+achieved_title+"'!</p><p><q>"+achieved_desc+"</q></p>";
		$( "#note" ).delay(delaytime).fadeOut( fadetime );
		achieved++;
	}

	//Change title tag
	if(cal_total >= 1) { document.title = +cal_total+ " Calories | "+title+""; }
	if(count >= 1) { document.title = +cal_total+ " Calories | "+count+" Cakes | "+title+""; }

	// Stats
	document.getElementById('counter').innerHTML = "Amount of cake eaten: <b>" +count+ "</b>";
	document.getElementById('calories').innerHTML = "Calories in bank: <b>" +cal_total+ "</b> Kcal";
	document.getElementById('calories_all').innerHTML = "Calories gained: <b>"+cal_all+"</b> Kcal";
		document.getElementById('counterr').innerHTML = "Amount of cake eaten: <b>" +count+ "</b>";
		document.getElementById('caloriess').innerHTML = "Calories in bank: <b>" +cal_total+ "</b> Kcal";
		document.getElementById('caloriess_all').innerHTML = "Calories gained: <b>"+cal_all+"</b> Kcal";
	document.getElementById('bites').innerHTML = "Bites taken: <b>"+bites+"</b>";
	document.getElementById('workout').innerHTML = "Workout: <b>" +work_time+ "</b>" +time+ "";
	document.getElementById('achieved').innerHTML = "Achievements: <b>"+achieved+"</b> achieved";
	document.getElementById('owned').innerHTML = "Cakes: <b>"+owned+"</b> unlocked";
	document.getElementById('upgrades').innerHTML = "Upgrades Unlocked: <b>"+upgrades+"</b>";
}
