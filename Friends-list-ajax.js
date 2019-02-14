console.log("abcd");
function showfriends()
{
	var xhr=new XMLHttpRequest();
	xhr.open('GET','http://192.168.21.60:9000/friends');
	xhr.setRequestHeader("content-type","application/json:charset=UTF-8");
	xhr.send();
	xhr.onload=function()
	{
		if(xhr.status!=200)
		{
			console.log("error");
		}
		else
		{
        console.log(xhr.responseText);		
		var mutual="";
		var friend=(JSON.parse(xhr.responseText));
		var testobj=document.getElementById('test');
		for(var i=0; i<friend.data.length;i++)
		{
			mutual=mutual+"<li>"+friend.data[i].name+"<button class='like' onclick=onlikeclick('"+friend.data[i].id+"') id='"+friend.data[i].id+"'>like</button></div></li>";
		}
			console.log(mutual);
			testobj.innerHTML=mutual;
			var ni=document.getElementById('c1');
			if(ni.textContent==="show Friends")
			{
			ni.textContent="hidefriends";
			ni.setAttribute('class','like')
			}
			else
			{
			ni.setAttribute('class','dislike')
			ni.textContent="showfriends";
			document.getElementById("test").innerHTML="";
			}
			
       }
	}
}
function onlikeclick(id)
		{
			var buttonobj = document.getElementById(id);
            if (buttonobj.textContent=="Unlike") 
				{
                buttonobj.textContent = "Like";
                console.log("Like called");
                buttonobj.setAttribute('class','like');
                
				}  else {
                buttonobj.textContent = "Unlike";
                console.log("UnLike called");
                buttonobj.setAttribute('class','unlike');
            }
		}