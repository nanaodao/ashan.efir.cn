var _topics = [
	{
		'name':'����',
		'type':'vip'
	},
	{
		'name':'Ӱ��',
		'type':'video'
	},
	{
		'name':'����',
		'type':'music'
	},
	{
		'name':'����',
		'type':'meiwen'
	},
	{
		'name':'ʱ��',
		'type':'fashion'
	},
    {
        'name':'��ʳ',
        'type':'food'
    },
	{
		'name':'��Ϣ',
		'type':'fenlei'
	}
];

function getSearchObj(){ 
    var obj = {}; 
    var query = location.search.substring(1);
    var items = query.split("&");
    for(var i=0,len=items.length;i<len;i++){
    	var item = items[i].split('=');
        obj[item[0]]=unescape(item[1]);
    } 
    return obj;
}

function loadScript(url, callback) {
    var $head = document.getElementsByTagName('head')[0];
    var $script = document.createElement('script');
    $script.type = 'text/javascript';
    $script.src = url;
    $script.onload = $script.onreadystatechange = function() {
        if ((!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            callback && callback();
            $script.onload = $script.onreadystatechange = null;
            if ($head && $script.parentNode) {
                $head.removeChild($script);
            }
        }
    };
    $head.insertBefore($script, $head.firstChild);
}

function addCookie(objName,objValue,objHours,objDomain,objPath){
    var str = objName + "=" + escape(objValue);
    if(objHours > 0){ //Ϊʱ���趨����ʱ�䣬������ر�ʱcookie�Զ���ʧ
        var date = new Date();
        var ms = objHours*3600*1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
        if(objDomain){
            str += ";domain="+objDomain;
        }
        if(objPath){
            str += ";path="+objPath;
        }
    }
    document.cookie = str;
}

function getCookie(objName){
	var arrStr = document.cookie.split("; ");
	for(var i = 0;i < arrStr.length;i ++){
		var temp = arrStr[i].split("=");
		if(temp[0] == objName) return unescape(temp[1]);
	}
} 