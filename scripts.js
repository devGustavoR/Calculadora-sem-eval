function button(a)
{	
	document.getElementById("ans").value+=a;
}

function che(){
		var res = [];
		var answer;
		
		if(document.getElementById("ans").value.includes("+")){
		res = document.getElementById("ans").value.split('+');
		return parseInt(res[0]) + parseInt(res[1]);
		}
		
		else if(document.getElementById("ans").value.includes("-")){
		res = document.getElementById("ans").value.split('-');
		return parseInt(res[0]) - parseInt(res[1]);
		}
		
		else if(document.getElementById("ans").value.includes("/")){
		res = document.getElementById("ans").value.split('/');
		return parseInt(res[0]) / parseInt(res[1]);
		}
		
		else{
		res = document.getElementById("ans").value.split('*');
		return answer= parseInt(res[0]) * parseInt(res[1]);
		}
}
		
function button1(){	
var a = che()
document.getElementById('ans').value = a; 
}
	
function buttonclear()
	{
		document.getElementById('ans').value=" ";	
	}