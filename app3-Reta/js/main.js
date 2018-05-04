$(document).ready(function(){
			$("#buscar").keyup(function(){
				var nombre = $("#buscar").val();
				if ($.trim(nombre) != "") {
					$("#nombres li:not(:contains('"+nombre+"'))").hide();
				}else{
					$("#nombres li").show();

				}
			});
});