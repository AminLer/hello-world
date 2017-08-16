
var api = 'https://api.unsplash.com/photos/random?count=';
var image = null;
var imageCount = 30;
var client_id = '&client_id=aa6e4a373d1211586b7daee3fcf22db6a1dd006c8339a2b104eabf959ea533ba';
var url = api + imageCount + client_id;
var i = 0;
var img;
var startUrl = "https://api.unsplash.com/photos/random?client_id=aa6e4a373d1211586b7daee3fcf22db6a1dd006c8339a2b104eabf959ea533ba";
var startImg = null;
var newWidth = 1366;
var newHeight = 0;
function preload(){
   loadJSON(url, gotData);
   loadJSON(startUrl, startData);
   img = document.getElementById("imgView");

}

function setup(){
  noCanvas();
  //print(img);
  //new height so the aspect ratio stays the same
  newHeight = (startImg.height/startImg.width) * newWidth;
  img.setAttribute("height", newHeight);
  img.setAttribute("width", newWidth);
  img.setAttribute("src", startImg.urls.full);
  print(startImg.width);
  print(startImg.height);
  print(newWidth);
  print(newHeight);

  //print(image[0].height);
  if(i < imageCount){
    setInterval(printImage, 5000);
  }else{

  }
}

function gotData(data){
  image = data;
}

function startData(data){
  startImg = data;
}

function printImage(){
  print(i);

  var newH = 0;
  if(i < imageCount){
    var oH = image[i].height;
    var oW = image[i].width;
    if(oH > 5000 && oW > 4000){
      oH = oH / 2;
      oW = oW / 2;
    }
    newH = (oH/oW) * newWidth;
    img.setAttribute("width", newWidth);
    img.setAttribute("height", newH);
    img.setAttribute("src", image[i].urls.full);
    print(newH);
    i++;
  }else{

  }
}
