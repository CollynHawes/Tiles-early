var red = 0;
var yellow = 0;
var blue = 0;
var count = 0;
var CollumId = "";
var FinalId = "";
var FillRow = "";
var width = 10;
var hieght = 10;
var gg = 1;
var thisinnerclass = "";
var main = document.getElementById("main");
var clicked = document.getElementById("clicked");
function ColorCount(){
 document.getElementById("RedTiles").innerHTML = red; 
 document.getElementById("YellowTiles").innerHTML = yellow; 
 document.getElementById("BlueTiles").innerHTML = blue; 
}
//
//Change Color of tile
function ChangeTile(j) {
  var SideTileId = document.getElementById(j);
  SideTileclassName = SideTileId.className;
  //get class number of sourounding tiles
  var SideTileClassS = SideTileclassName.substring(7, 9);
  var SideTileClassSI = parseInt(SideTileClassS);
  console.log(SideTileClassSI + " Tile Color number of side tile being ran");

  if (SideTileClassSI === 3) {
    SideTileId.className = "pressed1 innerbit";
    blue--;
    red++;
  } else if (SideTileClassSI === 2) {
    SideTileId.className = "pressed3 innerbit";
    yellow--;
    blue++;
  } else {
    SideTileId.className = "pressed2 innerbit";
  red--;
  yellow++;
  }
ColorCount()
}

//Fill the collums
function collumfill() {
  for (var b = 1; b <= hieght; b++) {
    gg = Math.floor(Math.random() * 3) + 1;
    FinalId = FillRow + "x" + b;
    document.getElementById(CollumId).innerHTML += "<div id='" + FinalId + "' class='pressed" + gg + " innerbit'></div>";
  if (gg === 1){
    red++;
  } else if (gg === 2){
    yellow++;
  } else if (gg === 3){
    blue++;
  }
}}
//Make the collums
for (var i = 1; i <= width; i++) {
  gg = Math.floor(Math.random() * 3) + 1;
  main.innerHTML += "<div id='collum" + i + "' class='collum'></div>";
  //Add id to each collum
  CollumId = "collum" + i;
  //Calls the collumfill function and fills the collum just created
  FillRow = i;
  collumfill()
}
ColorCount()
var inner = document.getElementsByClassName("innerbit");

//Figure out whats being clicked
for (var x = 0; x < inner.length; x++) {
  inner[x].addEventListener("mousedown", function() {
    count++;
    clicked.innerHTML = count;
    var thiskey = this.id;
    thisinnerclass = this.className;

    //Change class of clicked tile
    var CurrentClass = thisinnerclass.substring(7, 9);
    var CurrentClassP = parseInt(CurrentClass);
    console.log(CurrentClassP + " Tile color number of clicked tile");

    //   Change clicked tile by 2
    if (CurrentClassP === 3) {
      this.className = "pressed2 innerbit";
      blue--;
      yellow++;
    } else if (CurrentClassP === 2) {
      this.className = "pressed1 innerbit";
      yellow--;
      red++;
    } else {
      this.className = "pressed3 innerbit";
    red--;
    blue++;
    }

    //Get Id of clicked tile and turn it into Cordonates
    var xDis = thiskey.indexOf("x");
    var FirstCord = thiskey.substring(0, xDis);

    //Turn the Id of each tile into cordinates.
    var xDisPlus = xDis + 1;
    var SecondCord = thiskey.substring(xDisPlus);
    var FirstCordI = parseInt(FirstCord);
    var SecondCordI = parseInt(SecondCord);
    console.log(SecondCordI + " SecondCord");
    console.log(FirstCordI + " FirstCord");

    //Adding and minising from the cords
    var FirstCordM = FirstCordI - 1;
    var SecondCordM = SecondCordI - 1;
    var FirstCordP = FirstCordI + 1;
    var SecondCordP = SecondCordI + 1;
    //Making sure not to send id's of tiles that don't exist, if it does add NaN to it which will stop it from being sent later.
    if (FirstCordM !== 0) {
      var LeftTile = FirstCordM + "x" + SecondCordI;
      //String the tile ids
      var LeftTileS = LeftTile.toString();
         console.log(" Sending LeftTile");
      ChangeTile(LeftTileS);
    }
    if (SecondCordM !== 0) {
      console.log(TopTile + "TopTile");
      var TopTile = FirstCordI + "x" + SecondCordM;
      //String the tile ids
      var TopTileS = TopTile.toString();
      console.log(" Sending TopTile");
      ChangeTile(TopTileS);
    }
    if (FirstCordP !== 11) {
      var RightTile = FirstCordP + "x" + SecondCordI;
      //String the tile ids
      var RightTileS = RightTile.toString();
      console.log(" Sending RightTile");
      ChangeTile(RightTileS);
    }
    if (SecondCordP !== 11) {
      var BottumTile = FirstCordI + "x" + SecondCordP;
      //String the tile ids
      var BottumTileS = BottumTile.toString();

      console.log(" Sending BottumTile");
      ChangeTile(BottumTileS);
    }

  });
}