var slowSongs=[
  "Never Be Alone",
  "Life Of The Party",
  "The Weight",
  "Lost In Japan",
  "Where Were You In The Morning?",
  "Imagination",
  "Why?",
  "I Don't Know What Is Like To Be You",
  "Fallin' All In You",
  "Don't Be A Fool",
  "A Little Too Much",
  "Bring It Back",
  "Ruin",
  "Three Empty Words",
  "This Is What It Takes",
  "Kid in Love",
  "I Don't Even Know Your Name",
  "Air",
  "When You're Ready"];

var fastSongs=[
  "Youth",
  "Treat You Better",
  "There's Nothing Holdin' Me Back",
  "Strings",
  "Stitches",
  "Something Big",
  "Show You",
  "Señorita",
  "Queen",
  "Particular Taste",
  "Oh Cecilia (Breaking My Heart)",
  "Mercy",
  "Lost",
  "In My Blood",
  "If I Can't Have You",
  "I Know What You Did Last Summer",
  "Don't Want Your Love",
  "Aftertaste"
]

var slowLinks = [
  "https://www.youtube.com/embed/eVa9KBrInbg"
]

var fastLinks = [
"https://www.youtube.com/embed/Bs-Hr-gEJAU",
"https://www.youtube.com/watch?v=lY2yjAdbvdQ",
"https://www.youtube.com/watch?v=dT2owtxkU8k",
"https://www.youtube.com/watch?v=o9Z-0v67-tE",
"https://www.youtube.com/watch?v=VbfpW0pbvaU",
"https://www.youtube.com/watch?v=mytLRy32Viw",
"https://www.youtube.com/watch?v=sIWgF4QB89A",
"https://www.youtube.com/watch?v=Pkh8UtuejGw",
"https://www.youtube.com/watch?v=DGzy8FE1Rhk",
"https://www.youtube.com/watch?v=rBmFHFlKql4",
"https://www.youtube.com/watch?v=COwkCW38J54",
"https://www.youtube.com/watch?v=KkGVmN68ByU",
"https://www.youtube.com/watch?v=NbXj0YL7Y1k",
"https://www.youtube.com/watch?v=36tggrpRoTI",
"https://www.youtube.com/watch?v=oTJ-oqwxdZY",
"https://www.youtube.com/watch?v=ngORmvyvAaI",
"https://www.youtube.com/watch?v=aDMb6cgmc2A",
"https://www.youtube.com/watch?v=cNvrW9a_aLs",
]
var button = document.getElementById('button1');
var video = document.getElementById('links');

button.addEventListener("click", function(){
  // alert("The button works");
  var number = randNum(slowSongs);
  changeSong(number);
})

function randNum(array){
  var randDeci = Math.random();
  var randBig = randDeci * array.length;
  var random = Math.floor(randBig);
  return random;
}

// var number = randNum(slowSongs);

function changeSong(someNum){
  var newsong = document.getElementById('songName');
  songName.innerHTML = slowSongs[someNum];
  video.src = slowLinks[someNum];

}







var button2 = document.getElementById('button2');

button2.addEventListener("click", function(){
  // alert("The button works");
  var number = randNum(fastSongs);
  changeSong2(number);
})
//
// function randNum(array2){
// var randDeci = Math.random();
// var randBig = randDeci * array.length;
// var random = Math.floor(randBig);
// return random2
// }

// var number2 = randNum(fastSongs);
function changeSong2(someNum){
var newsong = document.getElementById('songName');
songName.innerHTML = fastSongs[someNum];
video.src = fastLinks[someNum];
}



// var number = randNum(diceFaces); //Test to see if the random number generator works
//
// function changeImg(someNum){
//   var dieImage = document.getElementById ('dieImage');
//
//   dieImage.src = diceFaces[someNum];
