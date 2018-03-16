$(document).ready(function(){
	var userAgent, compAgent;

	$('#selectX').click(function(){
	userAgent = 'X';
	compAgent = 'O';
	game();
	})

	$('#selectO').click(function(){
	userAgent = 'O';
	compAgent = 'X';
	game();
	})

	function game(){
		$('.select').toggle();
		$('.game').toggle();
		var userTurn = true;
		var checking;
		$('td').click(function click(){
			if($(this).text()){}
			// if(userTurn==true){
			else {

			$(this).text(userAgent);
			userTurn = !userTurn;
			checking=userAgent;
			check();
			//}
			// else{
			comp();
			// $(this).text(compAgent)
			userTurn = !userTurn;
			checking=compAgent;
			check();

			function check(){
				if(
				$('#1').text()==checking&&
				$('#2').text()==checking&&
				$('#3').text()==checking||
				$('#1').text()==checking&&
				$('#4').text()==checking&&
				$('#7').text()==checking||
				$('#1').text()==checking&&
				$('#5').text()==checking&&
				$('#9').text()==checking||
				$('#7').text()==checking&&
				$('#8').text()==checking&&
				$('#9').text()==checking||
				$('#3').text()==checking&&
				$('#6').text()==checking&&
				$('#9').text()==checking||
				$('#2').text()==checking&&
				$('#5').text()==checking&&
				$('#8').text()==checking||
				$('#4').text()==checking&&
				$('#5').text()==checking&&
				$('#6').text()==checking||
				$('#3').text()==checking&&
				$('#5').text()==checking&&
				$('#7').text()==checking
			){
				if(!userTurn){
				console.log("user win");
				}
				else{
					console.log('comp win')
				}
			}}
		}
		function comp(){
			var compIndex=Math.round(Math.random()*8);
			// var target=td:eq(compIndex)
			if ($("td:eq("+compIndex+")").text()){
				comp()
			}
			else{
			$("td:eq("+compIndex+")").text(compAgent)
			console.log(compIndex);
		}
 			// for(i=1;i<10;i++){
			// 	// if(true){
			// 	// 	console.log('bb');
			// 	// }
			// 	if($('td:eq(i)').text()=="X"){
			// 		console.log('titi');
			// 	}
 			// }
			// console.log($('td:eq(0)').text())
		}

		})


	}
	// $('.game').hide();
} )
