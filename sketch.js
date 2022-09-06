function compareprob (a,b){
  if (a.prob > b.prob){
    return -1
  }
  if (a.prob < b.prob){
    return 1
  }
  return 0
}

class Smorgasboard{
  constructor(teamlist){
    teamlist.sort(compareprob)
    this.teamlist =teamlist
    this.teamstring = ""
    this.mypulses = []
    this.buf=100
    this.spacing = 3
    let cumprob=0
    for (let i=0;i<teamlist.length;i++){
      cumprob = cumprob + teamlist[i].prob


    }
    print(cumprob)
    this.cumprob = cumprob
    
  }
  show(){

    fill('green')
    text('click anywhere below for random team, except up here refreshes',0,30)
    text(this.teamstring,0,80)
    let cury=this.buf
    let curx=50
    let tempteamstring = ""
    for (let i=0;i<this.teamlist.length;i++){
      let tt = this.teamlist[i]
      let delta = tt.prob*(height-this.buf)/this.cumprob
      fill(tt.c1)
      stroke(tt.c2)
      rect(1,cury+1,width,cury+delta-1)
      textSize(delta)
      fill(tt.c2)
      stroke(tt.c1)
      strokeWeight(1)
      if (tt.prob > .005)
      {
        text(tt.name,curx,cury+(delta)/4*3)
      }

      for (let j=0;j<this.mypulses.length;j++){
        let curval = this.mypulses[j]
        if (curval > cury && curval < cury + delta){
          tempteamstring = tempteamstring + tt.name + ", "
          stroke('lime')
          strokeWeight(3)
          line(0,curval,width,curval)

        }
      }
      curx = curx + (.95*width)/this.teamlist.length
      cury = delta + cury
      this.teamstring = tempteamstring

      
    }
  }
  pulse(mx){
    if (mx < this.buf)
    {
      this.mypulses = []
    }
    else{
      let randomYline = random(this.buf,height);
      print(randomYline)
      // line(0,randomYline,width,randomYline)
      this.mypulses.push(randomYline)

    }
    

  }
}

let bn;
function intro(){
  
}
function setup() {
  createCanvas(400, 600);
  
  function createam(name,prob,c1,c2){
    let teamobj = {name:name,prob:prob,c1:c1,c2:c2}
    return teamobj
  }

  let myteamlist = [
  createam('ari',0,color('red'),color('white')),
  createam('atl',0,color('black'),color('red')),
  createam('bal',.17,color('purple'),color('black')),
  createam('buf',.016,color('blue'),color('red')),
  createam('car',.018,color('lightblue'),color('white')),
  createam('chi',.0001,color('blue'),color('orange')),
  createam('cin',.08,color('orange'),color('black')),
  createam('cle',.0003,color('brown'),color('orange')),
  createam('dal',.00001,color('silver'),color('blue')),
  createam('den',.11,color('orange'),color('darkblue')),
  createam('det',.000,color('dodgerblue'),color('silver')),
  createam('gb',.005,color('green'),color('yellow')),
  createam('hou',.001,color('blue'),color('red')),
  createam('ind',.19,color('white'),color('blue')),
  createam('jax',.004,color('darkseagreen'),color('black')),
  createam('kc',.01,color('orangered'),color('white')),
  createam('lac',.01,color('skyblue'),color('wheat')),
  createam('lar',.006,color('blue'),color('yellow')),
  createam('lv',.0001,color('black'),color('gainsboro')),
  createam('mia',.01,color('orange'),color('green')),
  createam('min',.0001,color('purple'),color('yellow')),
  createam('ne',.0001,color('darkblue'),color('darkgrey')),
  createam('no',.045,color('palegoldenrod'),color('black')),
  createam('nyg',.0001,color('darkblue'),color('re')),
  createam('nyj',.0001,color('darkgreen'),color('white')),
  createam('phi',.04,color('oldlace'),color('seagreen')),
  createam('pit',.001,color('yellow'),color('black')),
  createam('sea',.001,color('blue'),color('green')),
  createam('sf',.09,color('red'),color('yellow')),
  createam('tb',.006,color('red'),color('brown')),
  createam('ten',.14,color('blue'),color('paleturquoise')),
  createam('was',.03,color('maroon'),color('goldenrod')),

]
  bn = new Smorgasboard(myteamlist)


  
  
}

function draw() {
  background(220);
  bn.show()
  // noLoop();
}

function mousePressed(){
  bn.pulse(mouseY)
  
}