(function(){ 
var bp = document.createElement('script'); 
bp.src = '//push.zhanzhang.baidu.com/push.js'; 
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(bp, s); 
})(); 
//myjs.js
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
 }
}
