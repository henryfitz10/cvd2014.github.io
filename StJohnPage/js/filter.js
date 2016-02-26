var file = 'MembersData.json'
var demoList='';
var instrList='';
var teachingList=[];
$.ajax({
    url: file,
    dataType:"json",
    success: function(Data) {
        $.each(Data, function(key, oPerson){
            var fullName=oPerson.Name;
            var demo=oPerson.Demonstrator;
            var inst=oPerson.Instructor;
            if (demo==1){
                demoList+="<li>"+fullName+"</li>"
            }
            if (inst==1){
                instrList+="<li>"+fullName+"</li>"
            }

        });
        //console.log(instrList)
        //console.log(demoList)
        teachingList=[instrList, demoList]
        //console.log(teachingList)
        //return(teachingList)

            $('.instructors').html("<ul>"+teachingList[0]+"</ul>") 
            $(".demonstrators").html("<ul>"+teachingList[1]+"</ul>") 
        
    }


   

});
 
    
      