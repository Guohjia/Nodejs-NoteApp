function init(){

  //estrelas
  var style = ["style1", "style2", "style3", "style4"];
  var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
  
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;  //取整包括min,不包括max
  }

  var estrela = "";
  var noite = document.querySelector(".constelacao");
  var widthWindow = window.innerWidth;
  var heightWindow = window.innerHeight;

  for (var i = 0; i <150; i++) {  //i代表星星的数量,随机添加class和style，利用box-shadow动画使星星闪烁
      estrela += "<span class='estrela "  + style[getRandomArbitrary(0, 4)] +" " + opacity[getRandomArbitrary(0, 6)] + " "
    + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
    + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
  }

  noite.innerHTML = estrela;



}

window.onload = init;

