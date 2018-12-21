var rain = [];

function setup() {
  createCanvas(400, 400);
  console.log(rain)
}

function draw() {
     for (var i = 0; i < 1; i++) {
          if (random() > 0.5) {
               rain.push({
                    x : random(width),
                    y : 0,
                    //c : [random(256), random(256), random(256)]
                    c : [255, 0, 0]
               })
          } else {
               rain.push({
                    x : random(width),
                    y : 0,
                    //c : [random(256), random(256), random(256)]
                    c : [0, 255, 0]
               })
          }

     }
     background(0)
     for (var i = 0; i < rain.length; i++) {
          fill(rain[i].c[0], rain[i].c[1], rain[i].c[2])
          // text("E", rain[i].x, rain[i].y)
          // text("T", rain[i].x + 8, rain[i].y)
          // text("H", rain[i].x + 16, rain[i].y)
          // text("A", rain[i].x + 25, rain[i].y)
          // text("N", rain[i].x + 32, rain[i].y)
          // text("$", rain[i].x, rain[i].y)
          rect(rain[i].x, rain[i].y, 3, 8)
     }
     for (var i = 0; i < rain.length; i++) {
          if(rain[i].y > height){
               rain.splice(i,1);
          } else {
               rain[i].y++;
          }

     }
}
