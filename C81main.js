var mouseEvent = "empty";

var x,y;



canvas = document.getElementById("myCanvas");
 ctx= canvas.getContext("2d");
 
 
 color = "white";
width_of_line=5;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{


    color = document.getElementById("color").value; width_of_line= document.getElementById("width_of_line").value;

mouseEvent="mouseDown";
}


canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e)
 {
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mouseDown") {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width_of_line;

  console.log("La última posición de las coordenadas x, y = ");
  console.log("x = " + x + "y = " 
       + y);
  ctx.moveTo( x,y);

  console.log("Posición actual de las coordenadas x, y = ");
  console.log("x  = " + current_position_of_mouse_x + "y = " 
          + current_position_of_mouse_y);
  ctx.lineTo(current_position_of_mouse_x, 
          current_position_of_mouse_y);
  ctx.stroke();
  }
  x = current_position_of_mouse_x; 
y = current_position_of_mouse_y;
}







canvas.addEventListener("mouseup", my_mouseup); 


function my_mouseup(e) { mouseEvent = "mouseUp";



 } canvas.addEventListener("mouseleave", my_mouseleave); function my_mouseleave(e) { mouseEvent = "mouseLeave";

 }

