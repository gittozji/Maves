$(document).ready(function(){

	$(".mmd-waves").mousedown(function(e) {
		var m = new MavesClass();
		m.showWaves(this,e);
	});
});
//涟漪类，使其相对独立
function MavesClass(){
	if(MavesClass.instance !== undefined){
		return MavesClass.instance;
	}
	MavesClass.instance = this;
	
	this.showWaves = function(_this,e){
		box = $(_this);
		wavesDiv = box.find("div");
		//第一次没有涟漪div，动态生成
		if(wavesDiv[0] == null){
			var div = "<div class='mmd-waves-effect'></div>";
			box.append(div);
			wavesDiv = box.find("div");
		}
		

		//设置按钮样式为’waves-effect‘即去掉动画样式’waves-effect-animation‘
		wavesDiv[0].className = 'mmd-waves-effect';
		
		//计算涟漪坐标（折算成左上角坐标而非中心点），涟漪大小（取外标签最长边）
		var wH = box.width() > box.height() ? box.width() : box.height();
		var iX = e.pageX - box.offset().left;
		var iY = e.pageY - box.offset().top;
		var nX = iX - wH/2;
		var nY = iY - wH/2;

		//设置涟漪div样式，准备播放动画
		wavesDiv.css({
			width: wH,
			height: wH,
			left: nX,
			top: nY
		}).addClass("mmd-waves-effect-animation");//播放动画
	}
}