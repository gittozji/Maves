$(document).ready(function(){

	$(".waves").mousedown(function(e) {
	
		var box = $(this);
		var wavesDiv = box.find("div");
		
		//��һ��û������div����̬����
		if(wavesDiv[0] == null){
			var div = "<div class='waves-effect'></div>";
			box.append(div);
			wavesDiv = box.find("div");
		}
		
	
		//���ð�ť��ʽΪ��waves-effect����ȥ��������ʽ��waves-effect-animation��
		wavesDiv[0].className = 'waves-effect';
		
		//�����������꣨��������Ͻ�����������ĵ㣩��������С��ȡ���ǩ��ߣ�
		var wH = box.width() > box.height() ? box.width() : box.height();
		var iX = e.pageX - box.offset().left;
		var iY = e.pageY - box.offset().top;
		var nX = iX - wH/2;
		var nY = iY - wH/2;

		//��������div��ʽ��׼�����Ŷ���
		wavesDiv.css({
			width: wH,
			height: wH,
			left: nX,
			top: nY
		}).addClass("waves-effect-animation");//���Ŷ���
	});
});