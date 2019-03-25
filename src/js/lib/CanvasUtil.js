export default class CanvasUtil {
    constructor(canvas){
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
    }
    
    clear(){
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    fillText(text, x, y, maxWidth, font, color){
      if(font != null){
        this.ctx.font = font;
      }
      if(color != null){
        this.ctx.fillStyle = color;
      }
      if(maxWidth != null){
        this.ctx.fillText(text, x, y, maxWidth);
      }else{
        this.ctx.fillText(text, x, y);
      }
    }
    
    strokeLine(x0, y0, x1, y1, lineWidth = 1, color){
      if(color != null){
        this.ctx.strokeStyle = color;
      }
      this.ctx.beginPath();
      this.ctx.lineWidth = lineWidth;
      this.ctx.moveTo(x0, y0);
      this.ctx.lineTo(x1, y1);
      this.ctx.closePath();
      this.ctx.stroke();
    }
    
    fillCircle(x, y, rad, color){
      if(color != null){
        this.ctx.fillStyle = color;
      }
      this.ctx.beginPath();
      this.ctx.arc(x, y, rad, 0, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fill();
    }
    
    fillRect(x, y, w, h, color){
      if(color != null){
        this.ctx.fillStyle = color;
      }
      this.ctx.fillRect(x, y, w, h);
    }
    
    matchSize(){
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
}