var monsterImage;

function resize_canvas(){
	canvas = document.getElementById("canvas");
    if (canvas.width  < window.innerWidth - 25) {
    	canvas.width  = window.innerWidth - 25;
    }
	if (canvas.height < window.innerHeight - 25) {
    	canvas.height = window.innerHeight - 25;
	}
}

function draw_card(canvasContext, card_number, x, y) {
	canvasContext.drawImage(monsterImage, 25, 25, 225, 350, 5 + 155 * x, 5 + 230 * y, 150, 225);
}

function init(){
var canvasElement = $("#canvas")[0];
var ctx = canvasElement.getContext('2d');
monsterImage = new Image();
monsterImage.src = "monsters.jpg";
resize_canvas();

ctx.fillStyle = "#099909";
ctx.beginPath();
ctx.rect(0, 0, canvasElement.width, canvasElement.height);
ctx.closePath();
ctx.fill();

draw_card(ctx, 0, 0, 0);
draw_card(ctx, 0, 1, 0);
draw_card(ctx, 0, 2, 0);
draw_card(ctx, 0, 3, 0);
draw_card(ctx, 0, 4, 0);
draw_card(ctx, 0, 5, 0);
draw_card(ctx, 0, 6, 0);
draw_card(ctx, 0, 7, 0);
draw_card(ctx, 0, 0, 1);
draw_card(ctx, 0, 0, 2);
draw_card(ctx, 0, 0, 3);

}

window.addEventListener("load", init, false);