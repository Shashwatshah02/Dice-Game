var randomnumber1 = Math.floor((Math.random() * 6) + 1);

var randomImage = "dice" + randomnumber1 + ".png";


var image1Name = document.querySelectorAll("img")[0];
image1Name.setAttribute("src" , randomImage);

var randomnumber2 = Math.floor((Math.random() * 6) + 1);

var randomImage2 = "dice" + randomnumber2 + ".png";


var image1Name = document.querySelectorAll("img")[1];
image1Name.setAttribute("src" , randomImage2);

if (randomImage > randomImage2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomImage2 > randomImage) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else
{
  document.querySelector("h1").innerHTML = "Draw";
}
