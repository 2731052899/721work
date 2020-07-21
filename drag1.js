function drag(selector){
    this.set = document.querySelector(selector)
    this.x = true;
    this.y = true;
    this.move();
    this.side = {x1:"",x2:"",y1:"",y2:""}
} 
drag.prototype = {
    side(){
        var that = this;
        this.side = that.side;
    },
    move(){
        var that = this;
        console.log(that.side)
        this.set.onmouseover = function(ev){
            var cx = ev.clientX;
            var cy = ev.clientY;
            var ox = that.set.offsetLeft;
            var oy = that.set.offsetTop;
            var downx = cx - ox ;
            var downy = cy - oy;
            
            document.onmousemove = function(ev){
                var mvx = ev.clientX;
                var mvy = ev.clientY;
                var x = mvx - downx;
                var y = mvy - downy;
                if (that.side.x1 > x) {
                    if (x) {
                        x = that.side.x1;
                    }
                }
                if (that.side.x2 < x) {
                    if(x){
                    x = that.side.x2;
                 }
                }
               
               
                if(that.x){                 
                that.set.style.left = x + "px";                   
            }
                
                    
                if (that.side.y1 > y) {
                    y = that.side.y1;
                   
                }
                if (that.side.y2 < y) {
                    y = that.side.y2;
                }
               
                if(that.y){
                    
                that.set.style.top = y + "px";
            }
            }
            document.onmouseup = function(ev){
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    } ,
    
    big(){
        
    }
}