const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let speed = document.querySelector(".slider");
let speedValue = document.querySelector(".speed-value");


let layer_1 = new Image();
layer_1.src = "images/layer-1.png";

let layer_2 = new Image();
layer_2.src = "images/layer-2.png";

let layer_3 = new Image();
layer_3.src = "images/layer-3.png";

let layer_4 = new Image();
layer_4.src = "images/layer-4.png";

let layer_5 = new Image();
layer_5.src = "images/layer-5.png";

class BackGround {
    constructor(velocidad) {
        this.velocidad = velocidad * 1.5;
        this.position = 0;
        this.posicionCity = 0;
        this.positionClouds = 0;
        this.positionBack = 0;

    }

    // START
    start() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.front();

    }


    // DELANTERA
    front() {



        //CREANDO POSICIONES PARA CADA IMAGEN

        this.posicionCity += this.velocidad * 0.5;
        this.position += this.velocidad;
        this.positionClouds += this.velocidad * 0.2;
        this.positionBack += this.velocidad * 0.3;
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);


        //DIBUJANDO EDIFICIOS TRASEROS 
        ctx.drawImage(layer_2,
            0, -680, layer_2.width * 2, layer_2.height * 2,
            -this.positionBack, 0, layer_2.width, layer_2.height)
        ctx.drawImage(layer_2,
            0, -680, layer_2.width * 2, layer_2.height * 2,
            -this.positionBack + layer_2.width / 2, 0, layer_2.width, layer_2.height)
        
        if (this.positionBack >= layer_2.width / 2) {
            this.positionBack = 0
        }






        //CREANDO LAS NUBES


        ctx.drawImage(layer_3,
            0, 0, layer_3.width, layer_3.height,
            - this.positionClouds, 0, layer_3.width, layer_3.width * 0.3)
        ctx.drawImage(layer_3,
            0, 0, layer_3.width, layer_3.height,
            - this.positionClouds + layer_3.width, 0, layer_3.width, layer_3.width * 0.3)
        
        if (this.positionClouds >= layer_3.width) {
            this.positionClouds = 0;
        }

        //DIBUJANDO LA CIUDAD
        ctx.drawImage(layer_4,
            0, -19, layer_4.width, layer_4.height,
            -this.posicionCity, 0, layer_4.width, layer_4.height);


        ctx.drawImage(layer_4,
            0, -19, layer_4.width, layer_4.height,
            -this.posicionCity + layer_4.width, 0, layer_4.width, layer_4.height);


        if (this.posicionCity >= layer_4.width) {
            this.posicionCity = 0;
        }



        //DIBUJANDO EL CAMINO DESPLAZANDOSE

        ctx.drawImage(layer_5,
            0, 0, layer_5.width, layer_5.height,
            -this.position, -20, layer_5.width, layer_5.height);

        ctx.drawImage(layer_5,
            0, 0, layer_5.width, layer_5.height,
            -this.position + layer_5.width, -20, layer_5.width, layer_5.height);


        if (this.position >= layer_5.width) {
            this.position = 0;
        }


        requestAnimationFrame(() => this.front());
    }


}
let mapa1 = new BackGround(10);
mapa1.start();



speed.addEventListener("change", ()=>{
    speedValue.innerHTML = speed.value;
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    mapa1 = new BackGround(Number( speed.value));
    mapa1.start();
})




