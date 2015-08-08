
	$(document).ready(function(){
		var bIncome=document.getElementById('income');
		var bOutcome=document.getElementById('outcome');
		var money=document.getElementById('money');
		var reson=document.getElementById('reson');
		var oOl=document.getElementById('ol');
		var aIn=new Array();//jiesuan
		var aGet=new Array();//zongshouru
		var aOut=new Array();//zongzhichu
		var allGet=0;
		var allOut=0;
		var i=0;
		var m=0;  
		var n=0;
		var total=0;
		var jiesuan=document.getElementById('jiesuan');
		var out=document.getElementById('out');
		var get=document.getElementById('get');
		

		bOutcome.onclick=function()
		{
			aIn[i]=parseFloat(-money.value);
			i++;
			aOut[n]=parseFloat(-money.value);
			n++;
			var total=0;
			for (var j = 0; j < aIn.length; j++) {
				total=parseFloat(aIn[j]+total);
			};
			jiesuan.innerHTML=total;
			var allOut=0;
			for (var k= 0; k< aOut.length; k++) {
				allOut=parseFloat(aOut[k]+allOut);
			};
			out.innerHTML=allOut;

			var oLi=document.createElement('li');
			 var myDate=new Date();
			oLi.innerHTML='<a href="#">'+'【'+(myDate.getMonth()+1)+'-'+myDate.getDate()
			 				+' '+myDate.getHours()+':'+myDate.getMinutes()
						 	+'】'+reson.value+'  '+'<span  style="color:red">'+'￥：-'+money.value +'</span>'+'</a>';
				
			 oOl.appendChild(oLi);
			 $("#ol").listview("refresh");
		
		}
		
		bIncome.onclick=function()
		{
				aIn[i]=parseFloat(money.value);
				i++;

				aGet[m]=parseFloat(money.value);
				m++;
				var total=0;
				for (var j = 0; j < aIn.length; j++) {
					total=parseFloat(aIn[j]+total)
				};
				jiesuan.innerHTML=total;
				var allGet=0;
			for (var q= 0; q< aGet.length; q++) {
				allGet=parseFloat(aGet[q]+allGet);
			};
			get.innerHTML=allGet;
			 var oLi=document.createElement('li');
			 var myDate=new Date();
			 oLi.innerHTML='<a href="#">'+'【'+(myDate.getMonth()+1)+'-'+myDate.getDate()
			 				+' '+myDate.getHours()+':'+myDate.getMinutes()
						 	+'】'+reson.value+'  '+'<span  style="color:green">'+'￥：+'+ money.value+'</span>'+'</a>';
				
			 oOl.appendChild(oLi);
			 $("#ol").listview("refresh");
			
		}
	

		



})