

var mapimg;
var zoom = 1;
var data;

function preload(){
  data = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv");
  mapimg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1/1200x800?access_token=pk.eyJ1Ijoic3BpbGVvcHMiLCJhIjoiY2o2MHkzbmo0MHB5djJxbnIyb2EzYWY5YiJ9.XMwXX_YjhrWuv1-X005ELw")
}
//see in wikipedia https://en.wikipedia.org/wiki/Web_Mercator
function webMercX(lon, zoom){
  lon = radians(lon);
  return (300 / PI) * pow(2, zoom) * (lon + PI); // doesnt work right normaly it has to be 256 / PI or 512 / PI. ( same for webMercY ) but 300 works for me
}

function webMercY(lat, zoom){
  lat = radians(lat);
  var a = (300 / PI) * pow(2, zoom);
  var b = tan((PI/4)+(lat/2));
  var c = PI- log(b);
  return a*c;
}

var clat = 0;
var clon = 0;

//new york coordinates
var lat = 40.7128;
var lon = -74.0059;

function setup() {
  createCanvas(1200, 800);
  translate(width/2, height/2);
  imageMode(CENTER);
  image(mapimg, 0, 0);
  fill(255, 0, 0, 80);
  noStroke();

  var cx = webMercX(clon, zoom);
  var cy = webMercY(clat, zoom);

  for(var i = 1; i < data.length; i++){
    var stuff = data[i].split(/,/);
    //console.log(stuff[1], stuff[2]);
    lat = stuff[1];
    lon = stuff[2];
    var mag = stuff[4]; // magnetiut of the earthquake
    var x = webMercX(lon, zoom)-cx;
    var y = webMercY(lat, zoom)-cy;
    mag = pow(20, mag);//mag is wrong i think
    mag = sqrt(mag);
    var magmax = sqrt(pow(10, 10));
    var d = map(mag, 0, magmax, 0, 180); // bigger circle if the magnetiued is bigger
    ellipse(x, y, d, d); //change d to 4 so every circle is the same size
  }

}
