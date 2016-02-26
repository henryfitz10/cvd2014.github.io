var sMyRetrievedData = localStorage.getItem("userData");
sMyRetrievedData = JSON.parse(sMyRetrievedData);

var MyData=sMyRetrievedData;
//console.log(MyData);
var personalList='';
var trainingList='';
var MyPersonalData=MyData[1];
for (var i=0; i<MyPersonalData.length;i++){
	personalList+="<li>"+MyPersonalData[i]+"</li>"	
}
var MyDutyHours=MyData[3];
//console.log(MyDutyHours)
var MyTraining=MyData[2];
 if (MyTraining[1]!=0){
 	MyTraining[1]='Yes';
 }
 else{
 	MyTraining[1]='No';
 }
 
 if (MyTraining[2]!=0) {
 	MyTraining[2]='Yes';
 }
 else{
 	MyTraining[2]='No';
 }

//console.log(MyTraining)
var trainingList="<li>Skill: "+MyTraining[0]+"</li><li>Demonstrator: "+MyTraining[1]+"</li><li>Instructor :"+MyTraining[2]+" </li><li>CPP :"+MyTraining[3]+" </li><li>Garda Vetting: "+MyTraining[4]+"</li><li>Manual Handling"+MyTraining[5]+"</li>"



var MyAccount=MyData[4];


$(document).ready(function(){
$("#greeting").html("<h2> Welcome "+MyPersonalData[0]+"</h2>");

$(".personal")
			.html(""+personalList+"");

	
$("#account").html("<p>I owe "+MyAccount[0]+" euro.</p>");

$("#dutyHours").html("<p>I have "+MyDutyHours[0]+" duty hours to date</p>");

$(".training").html(trainingList);


})


