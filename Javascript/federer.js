class Federer {

    constructor(){

        this.img = new Image ()
        this.img.src = "./imagenes/Federer PNG.png"
        this.x = 200;
        this.y = 400;
        this.w = 50;
        this.h = 50;
    }

    drawFederer = () =>{

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}