var file = 'MembersData.json'
var MoneyOwed=[];
var dutyHours=[];

$.ajax({
    url: file,
    dataType:"json",
    success: function(Data) {
        $.each(Data, function(key, oPerson){
            var fullName=oPerson.Name;
            var money=oPerson.AccountOwing;
            var hours=oPerson.DutyHours;
            MoneyOwed.push(money);
            dutyHours.push(hours);
        });
        //console.log(MoneyOwed)

        var margin  =   {top:50, right:0,  bottom:50, left:50}, 
        canvasWidth = 1000 + margin.right +margin.left; 
        canvasHeight = 300 + margin.top + margin.bottom; 
        
        var accountChart  =   d3.select("#moneyChart")                                   
                            .append("svg")                                  
                            .attr("width",canvasWidth)                                  
                            .attr("height",canvasHeight)                                    
                            .attr("style","background-color:#ddd"); 
        var heightScale=d3.scale.linear()
                           .domain([0,d3.max(MoneyOwed)])
                           .range([0,300]);
        var yAxisScale=d3.scale.linear()
                         .domain([0,d3.max(MoneyOwed, function(d){return d;})])
                         .range([300, 0])                   

        var yAxis=d3.svg.axis()
                    .scale(yAxisScale)
                    .orient("left")
                    .ticks(12);

        accountChart.selectAll('rect')
                    .data(MoneyOwed)
                    .enter()
                    .append("rect")
                    .attr("x", function(d,i){return (i*20)+53})
                    .attr("y", function(d){return 310-(heightScale(d)-41)})
                    .attr('width', 10)
                    .attr("height", function(d){return heightScale(d) })
                    .attr("fill","green");
        accountChart.append("g") .attr("class","axis")       //  style   axis    via CSS         
                    .attr("transform","translate("+ (margin.left+3)  +","    +   margin.bottom   +   ")")        
                    .call(yAxis)
        var g   =   accountChart.append("g")                                  
                    .attr("width",1000)                                     
                    .attr("height",300)                                   
                    .attr("style","background-color:#ddd")  /*  added   some    style*/                                     
                    .attr("transform","translate("+ margin.left +"," + margin.bottom   + ")")


        console.log(dutyHours)
        var margin  =   {top:50, right:0,  bottom:50, left:50}, 
        canvasWidth = 1000 + margin.right +margin.left; 
        canvasHeight = 300 + margin.top + margin.bottom; 
        
        var dutyChart  =   d3.select("#dutyChart")                                   
                            .append("svg")                                  
                            .attr("width",canvasWidth)                                  
                            .attr("height",canvasHeight)                                    
                            .attr("style","background-color:#ddd"); 
        var heightScale=d3.scale.linear()
                           .domain([0,d3.max(MoneyOwed)])
                           .range([0,300]);
        var yAxisScale=d3.scale.linear()
                         .domain([0,d3.max(MoneyOwed, function(d){return d;})])
                         .range([300, 0])                   

        var yAxis=d3.svg.axis()
                    .scale(yAxisScale)
                    .orient("left")
                    .ticks(12);

        dutyChart.selectAll('rect')
                    .data(dutyHours)
                    .enter()
                    .append("rect")
                    .attr("x", function(d,i){return (i*20)+53})
                    .attr("y", function(d){return 310-(heightScale(d)-41)})
                    .attr('width', 10)
                    .attr("height", function(d){return heightScale(d) })
                    .attr("fill","red");
        dutyChart.append("g") .attr("class","axis")       //  style   axis    via CSS         
                    .attr("transform","translate("+ (margin.left+3)  +","    +   margin.bottom   +   ")")        
                    .call(yAxis)
        var g   =   dutyChart.append("g")                                  
                    .attr("width",1000)                                     
                    .attr("height",300)                                   
                    .attr("style","background-color:#ddd")  /*  added   some    style*/                                     
                    .attr("transform","translate("+ margin.left +"," + margin.bottom   + ")")
       

            
        
    }
})    