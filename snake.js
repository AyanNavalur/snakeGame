function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 0;
	this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.len = 1;
  this.body = [];
  this.body[0] = createVector(0,0);

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(pos) {
    //  console.log('ok');
      var d = dist(this.body[this.body.length-1].x, this.body[this.body.length-1].y, pos.x, pos.y);
      if (d<1) {
        this.total++;
        return true;
      }
      else {
        return false;
      }
  }

  this.reset = function() {
    this.len = 1;
    this.body = [];
    this.body[0] = createVector(0,0);
    this.xspeed = 1;
  	this.yspeed = 0;
  }
  this.death = function() {
    // for (var i = 0; i<this.tail.length; i++) {
    //   var pos = this.tail[i];
    //   var d = dist(this.x, this.y, pos.x, pos.y);
    //   if (d < 1) {
    //     console.log('Killed')
    //     this.total = 0;
    //     this.tail = [];
    //   }
    // }
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if (x>width-scl || x<0 || y>height-scl || y<0)
    {
      console.log('Killed');
      this.reset();
    }
    for (var i=0; i <this.body.length-1; i++) {
      let  part = this.body[i];
      if(part.x == x && part.y == y) {
        console.log('Killed');
        this.reset();
      }
    }

  }

  this.grow = function() {
    let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }

	this.update = function() {
    // if(this.total === this.tail.length){
    //   for (var i = 0; i<this.tail.length-1; i++){
    //     this.tail[i] = this.tail[i+1];
    //   }
    // }
    // this.tail[this.total-1] = createVector(this.x, this.y);


    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xspeed*scl;
    head.y += this.yspeed*scl;
    this.body.push(head);
		// this.body[0].x += this.xspeed*scl;
		// this.body[0].y += this.yspeed*scl;

    //this.x = constrain(this.x, 0, width-scl);
    //this.y = constrain(this.y, 0, height-scl);

    // if (this.xspeed !== 0) {
    //   //console.log('In x');
    //   //console.log(this.tail.length)
    //   for (var i = 0; i<this.tail.length-1; i++) {
    //     //console.log('Inside2');
    //     this.tail[i].x = constrain(this.tail[i].x, scl*i, width - scl*i);
    //   }
    // }
    // if (this.yspeed !== 0) {
    //   for (var i = 0; i<this.tail.length-1; i++) {
    //     this.tail[i].y = constrain(this.tail[i].y, scl*i, height - scl*i);
    //   }
    // }




	}

	this.show = function() {
    fill(255);
    for(var i = 0; i<this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, scl, scl);
    }


		//rect(this.x, this.y, scl, scl);
	}
}
