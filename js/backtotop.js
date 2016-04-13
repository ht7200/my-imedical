lastScrollY=0;
function heartBeat(){
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
  diffY = document.documentElement.scrollTop;
else if (document.body)
  diffY = document.body.scrollTop;
else
{}
 
//alert(diffY);
percent=.1*(diffY-lastScrollY);
if(percent>0)percent=Math.ceil(percent);
else percent=Math.floor(percent);
document.getElementByIdx("web_ad").style.top=parseInt(document.getElementById("web_ad").style.top)+percent+"px";
lastScrollY=lastScrollY+percent;
//alert(lastScrollY);
}
suspendcode="<DIV id=\"web_ad\" style='right:5px;POSITION:absolute;TOP:330px; border:0px solid #ddd;'><a href='javascript:scroll(0,0)'><img src='../images/btn_top.gif' alt='返回顶部' /></a></div>";
document.write(suspendcode);
window.setInterval("heartBeat()",1);