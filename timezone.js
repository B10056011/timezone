var l1,l2;
   var latlng1="26.5107076,127.9872232";
    var latlng2="23.1249398,120.9872232";
   //var url="http://maps.googleapis.com/maps/api/geocode/json?latlng=26.5107076,127.9872232&sensor=true"
   var timezonenum=100;
		function getpos(){
	  	  success(parseInt(l2));
	  
		  function success(pos) {
			  
			  switch(pos>=0)
			  {
			  	case pos<=7.5: 
			  	  timezonenum=0;
			  	  break;
			  	case pos<=22.5:
			  	  timezonenum=1;
			  	  break;
			  	case pos<=37.5:
			  	  timezonenum=2;
			  	  break;
			  	case pos<=52.5:
			  	  timezonenum=3;
			  	  break;
			  	case pos<=67.5:
			  	  timezonenum=4;
			  	  break;
			  	case pos<=82.5:
			  	  timezonenum=5;
			  	  break;
			  	case pos<=97.5:
			  	  timezonenum=6;
			  	  break;
			  	case pos<=112.5:
			  	  timezonenum=7;
			  	  break;
			  	case pos<=127.5:
			  	  timezonenum=8;
			  	  break;
			  	case pos<=142.5:
			  	  timezonenum=9;
			  	  break;
			  	case pos<=157.5:
			  	  timezonenum=10;
			  	  break;
			  	case pos<=172.5:
			  	  timezonenum=11;
			  	  break;
			  	case pos<=180:
			  	  timezonenum=12;
			  	  break;
			  }
			  switch(pos<0)
			  {
			  	case pos>=-7.5:
			  	  timezonenum=0;
			  	  break;
			  	case pos>=-22.5:
			  	  timezonenum=-1;
			  	  break;
			  	case pos>=-37.5:
			  	  timezonenum=-2;
			  	  break;
			  	case pos>=-52.5:
			  	  timezonenum=-3;
			  	  break;
			  	case pos>=-67.5:
			  	  timezonenum=-4;
			  	  break;
			  	case pos>=-82.5:
			  	  timezonenum=-5;
			  	  break;
			  	case pos>=-97.5:
			  	  timezonenum=-6;
			  	  break;
			  	case pos>=-112.5:
			  	  timezonenum=-7;
			  	  break;
			  	case pos>=-127.5:
			  	  timezonenum=-8;
			  	  break;
			  	case pos>=-142.5:
			  	  timezonenum=-9;
			  	  break;
			  	case pos>=-157.5:
			  	  timezonenum=-10;
			  	  break;
			  	case pos>=-172.5:
			  	  timezonenum=-11;
			  	  break;
			  	case pos>=-180:
			  	  timezonenum=-12;
			  	  break;
			  }
		  };
		  function error(err) {
		  	timezonenum=100;
		  	console.log("error");
		  };
  		};
   $(document).ready(function() {
      $("#driver").click(function(event){
      		l1=document.getElementById("t1").value;
          	l2=document.getElementById("t2").value;
          	if(l1=="" || l2=="")
          		return;
          	s="http://maps.googleapis.com/maps/api/geocode/json?latlng="+l1 +","+l2 +"&sensor=true"
          	 $.getJSON(s, function(jd) {
          	if(jd.results.length==0)
          		$('#stage').html('');
             if(jd.results[0].address_components[jd.results[0].address_components.length-2].types[0]=="country")
             	$('#stage').html('<p> Name: ' + jd.results[0].address_components[jd.results[0].address_components.length-2].long_name+ '</p>');
             else
             	$('#stage').html('<p> Name: ' + jd.results[0].address_components[jd.results[0].address_components.length-1].long_name+ '</p>');
             
			getpos();
          });
        
      });
   });
   
   
		

		setInterval(function() {
			if(timezonenum==100){
				document.getElementById("label").innerHTML="";
				return;
			}
		  date=new Date();
		  timezone=timezonenum*1000*60*60;
			st1=date.getTime()+timezone+(date.getTimezoneOffset()*60*1000);
			nowdate=new Date(st1);
			str=nowdate.toString().split("");
			for(i=0;i<str.length;i++)
			{
				if(str[i]=="+" || str[i]=="-")
					s1=nowdate.toString().substring(0,i);
			}
			if(timezonenum>=0)
			  if(Math.abs(timezonenum).toString().length==2)
			  	document.getElementById("label").innerHTML=s1+"+"+ timezonenum +"00";
			  else
			  	document.getElementById("label").innerHTML=s1+"+0"+ timezonenum +"00";
			else if(timezonenum<0)
			  if(Math.abs(timezonenum).toString().length==2)
			  	document.getElementById("label").innerHTML=s1+"-"+ -timezonenum +"00";
			  else
			  	document.getElementById("label").innerHTML=s1+"-0"+ -timezonenum +"00";
		},1000);
			
         