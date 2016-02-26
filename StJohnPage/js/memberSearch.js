var file = 'MembersData.json'
var loginData=[]
var personalData=[]
var trainingData=[]
var dutyData=[]
var accountData=[]
var fullData=[]


/*
	treatData
	Find searched member and add data to DOM
*/
function treatData(Data) {
	
	var name=document.getElementById('Name').value;			
	var oSelectedPerson = Data[name];

	var user = oSelectedPerson.username;
	var fullName = oSelectedPerson.Name;
	var pwd = oSelectedPerson.password;
	var admin = oSelectedPerson.Admin;
	var rank = oSelectedPerson.Rank;
	var PIN = oSelectedPerson["StJohnPIN"];
	var skill = oSelectedPerson.Qualifiaction;
	var demo = oSelectedPerson.Demonstrator;
	var inst = oSelectedPerson.Instructor;
	var CPP = oSelectedPerson.CPP;
	var hours = oSelectedPerson.DutyHours;
	var email = oSelectedPerson.Email;
	var phone = oSelectedPerson.Phone;
	var GV = oSelectedPerson["GV_Submitted"];
	var manualHandling = oSelectedPerson["ManualHandling"];
	var account = oSelectedPerson.AccountOwing;

	personalData[name]=[fullName,rank,PIN,email,phone];

	console.log(personalData[name]);

	var listData=""
	for (i=0; i<5;i++){
		listData+="<li> "+ personalData[name][i]+"</li>"
	}

	$('#memberData').html(listData)
}

/*
	member_search
	Do the AJAX request to get JSON w/ memebers
*/
function member_search(e){

	e.preventDefault();

	$.ajax({
		url: file,
		dataType:"json",
		success: treatData
	});
}      

$("#submit").on("click", member_search);
