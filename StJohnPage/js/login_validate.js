function login_validate(){
    var file = 'MembersData.json'
    var loginData=[]
    var personalData=[]
    var trainingData=[]
    var dutyData=[]
    var accountData=[]
    var fullData=[]
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username+":"+password)
    $.ajax({
        url: file,
        dataType:"json",
        success: function(Data) {
        $.each(Data, function(key, oPerson){
            console.log(key);
            
            //console.log(oPerson);

            name=oPerson.username;
            person=oPerson.Name;
            pwd=oPerson.password;
            admin=oPerson.Admin;
            rank=oPerson.rank;
            PIN=oPerson["StJohnPIN"];
            skill=oPerson.Qualifiaction;
            demo=oPerson.Demonstrator;
            inst=oPerson.Instructor;
            CPP=oPerson.CPP;
            hours=oPerson.DutyHours;
            email=oPerson.Email;
            phone=oPerson.Phone;
            GV=oPerson["GV_Submitted"];
            manualHandling=oPerson["ManualHandling"];
            account=oPerson.AccountOwing;

            loginData[name]=[pwd, admin];
            console.log(loginData)
            personalData[name]=[person,PIN,email,phone];
            trainingData[name]=[skill,demo,inst, CPP, GV, manualHandling];
            accountData[name]=[account];
            dutyData[name]=[hours];

            fullData[name]=[loginData[name], personalData[name], trainingData[name], dutyData[name], accountData[name]];

        });  

            //console.log(loginData)
            if (loginData[username][0]===password){
                if(loginData[username][1]!='0'){
                    location ="adminHomepage.html"
                }
                else{
                    location="membersHomepage.html"
                }
                

               /* console.log("my Data....");
                console.log(loginData[username])
                console.log(personalData[username])
                console.log(trainingData[username])
                console.log(dutyData[username])
                console.log(accountData[username])
                console.log(fullData[username])
                */

                var sMyValue = JSON.stringify(fullData[username]);
                localStorage.setItem("userData", sMyValue )    
            } 
            else{
                alert('BAD LOGIN');
            }   
        }
    });
}      

     