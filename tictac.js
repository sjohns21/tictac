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
				
				checking=userAgent;
				check();
				if (count==9 || $("#message").text() ){
					return;
				}
				comp();
				count++;
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
						if(userTurn){
							$("#message").text("user wins");
							over();
							return;
						}
						else{
							$("#message").text("computer wins");
							over();
							return;
						}
					}
					else if (count==9) {
						$("#message").text("gridlock");
						over();
						return;
					}
					userTurn = !userTurn;
				}
			}
			function comp(){
				var compIndex=Math.round(Math.random()*8);
				if ($("td:eq("+compIndex+")").text()){
					comp()
				}
				else{
					$("td:eq("+compIndex+")").text(compAgent)
				}
			}

		})
		function over(){
			$("#actions").show()
			$("#yes").click(function(){
				for (i = 1; i < 10; i++) {
					$("#"+i).text("");
				}
				count=0;
				userTurn=true;
				$("#message").text("");
				$("#actions").hide();
			})
			$("#no").click(function(){
				$("#message").text("goodbye!");
				$("#actions").hide();
			})			
			// $("#yes").on("click",clear())

				// $("#game").hide();
				// $("#message #actions").show();
				// $("#yes").click(game())S
			}
		// function clear(){
		// 	for (i = 1; i < 10; i++) {
		// 		$("#"+i).text("");
		// 	}
		// 	count=0;
		}

	})
