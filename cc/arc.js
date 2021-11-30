/*ARC ��ˢ�¼���ҳ���� 32237384@qq.com*/
var arcajxatab = function(options){
	var opts = {
		ajax_tab:'.arc_menu',
		ajax_content:'content',
		ajax_num:4,
		ajax_id:'ajax_id_',
		ajax_title:'��Ŀ',
		default_url:'',
		default_id:'',
		default_title:'����',
		url_type:'.html'
	}
	if(options) {//�ж��Ƿ���������
		$.extend(opts, options);
	}
	
	this.ajax_open = function(url,id,title){//�����¼�
		ajax_open(url,id,title);
	}
	var ajax_open = function(url,id,title){
		var _sel = $('#'+opts.ajax_id+id),
			  _obj = $('.'+opts.ajax_content+'_li'),
			  _tab = $(opts.ajax_tab).find('>li');
		_sel.load(url+opts.url_type);
		_obj.hide().eq(id).show();
		_tab.eq(id).addClass('active').siblings().removeClass('active');
		_tab.eq(id).find('a').text(title);
		seturl(url,id,title);
	}
	
	this.click = function(id){//�ⲿ����¼�
		$(id).bind('click',function(){
				var _this = $(this),	
					  _dataurl = _this.attr('data-url'),
					  _title = $.trim(_this.text());
				ajax_open(_dataurl,opts.ajax_num-1,_title);
		});
	}	
	
	var ajaxEvent = function() {//ע���¼�
		var _sel = $(opts.ajax_tab).find('>li');
		_sel.each(function(i){
			var _this = $(this),
				 _val = getUrlParam('uid');
				 if(_val == i){				 	
					_this.addClass('active').siblings().removeClass('active');
				 }
			_this.find('a').bind('click',function(){
				var _this = $(this),
					 _dataurl = _this.attr('data-url'),
					 _title = $.trim(_this.text());
				ajax_open(_dataurl,i,_title);
				_this.parent().addClass('active').siblings().removeClass('active');
			});
		});
	}	
	
	var seturl =function(url,id,title){//�޸ĵ�ַ��
		var _title=opts.ajax_title;
		if(title!=undefined){
			_title=opts.ajax_title+'-'+title;
		}
		document.title = _title;


	
	}	
	
	this.init = function() {//��ʼ��
		buildpage();
	}
	var buildpage = function() {
		for(var i =0; i<opts.ajax_num;i++){
			ajax_html(opts.ajax_id+i);
		}
		var _url = getUrlParam('moudel'),
			 _id =getUrlParam('uid'),
			 _title =getUrlParam('title');
		if(_url==null || _url==''){
			_url = opts.default_url;
		}
		if(_id==null || _id==''){
			_id = opts.default_id;
		}
		if(_title==null || _title==''){
			_title = opts.default_title;
		}
		ajax_open(_url,_id,_title);
		ajaxEvent();		
	}
	
	var ajax_html = function(id){//����ҳ��
		var _html = [],sel=$('.'+opts.ajax_content);		
		_html = '<div id="'+id+'" class="'+opts.ajax_content+'_li"></div>';	
		sel.append(_html);
	}		
	
	function getUrlParam(name){//��ȡ��ַ������
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //����һ������Ŀ�������������ʽ����
	var r = window.location.search.substr(1).match(reg);  //ƥ��Ŀ�����
	if (r!=null) return unescape(r[2]); return null; //���ز���ֵ
	} 
}