// Prints to the console the width and height of the canvas of id="can"
let canvasPos = () => {

    console.log(`\ncanvas width:\t${can.width}\ncanvas height:\t ${can.height}`);
    
}

// Needs a ctx (and can) var that kind of looks like this --> ctx = can.getContext("2d"); | can = document.getElementById("can");
let clearCanv = () => {

    ctx.clearRect(0, 0, can.width, can.height);

};

// Cosine of a degree
let cos = (num) => {

    return Math.cos(num * Math.PI / 180);

};

// Sine of a degree
let sin = (num) => {

    return Math.sin(num * Math.PI / 180);

};

// Returns a random value between a range of 2 numbers
let randomRange = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1) + min);
    
};

// Hash color generator | Returns a string of random values
let randColor = () => {

	let r = Math.floor(Math.random()*10);
	let g = Math.floor(Math.random()*10);
	let b = Math.floor(Math.random()*10);

	let rgb = `#${r}${g}${b}`;
	rgb.toString();

    return rgb;
    
}