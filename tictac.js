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
		$('#select').toggle();
		$('#game').toggle();
		var userTurn = true;
		var checking;
		var count = 0;
		$('td').click(function click(){
			if($(this).text()){} //if cell is true (has value already), do nothing on click
			else { //otherwise, fill cell

			$(this).text(userAgent);
			count++;
			userTurn = !userTurn;
			checking=userAgent;
			check();
			if (count==9){
				return;
			}
			comp();
			count++;
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
			}
			else if (count==9) {
				console.log('gridlock')
				return;
			}

		}
		}
		function comp(){
			var compIndex=Math.round(Math.random()*8);
			// var target=td:eq(compIndex)
			if ($("td:eq("+compIndex+")").text()){
				comp()
			}
			else{
			$("td:eq("+compIndex+")").text(compAgent)
		}
		}

		})


	}
} )
