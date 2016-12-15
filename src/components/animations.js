// TweenMax.from("h1", 1.5, {x:-250});
// TweenMax.from(this.refs.citi, 1.5, {x:-250});
 //TweenMax.from("#app", 1.5, {x:-250, rotation:360});

 TweenMax.fromTo('#app', 1.0, {
  rotation: 360, 
},
{
  rotation: -360,
  // delay: 1,
  // repeat: -1,
  // repeatDelay: 1,
   // yoyo: true,
  // immediateRender:false,
  // paused:true
});

// when wanting something to rotate in place, like in the code above, you have to align the html element to be centered as in align="center"

