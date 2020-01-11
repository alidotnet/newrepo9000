function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$('body').width(window.innerWidth);
$('body').height(window.innerHeight);

var boundingBoxList = [];
boundingBoxList.push({x1: 430, y1: 600, x2: 540, y2: 690, name: "game1"});
boundingBoxList.push({x1: 870, y1: 500, x2: 1010, y2: 625, name: "game2"});
boundingBoxList.push({x1: 450, y1: 100, x2: 575, y2: 250, name: "game3"});
boundingBoxList.push({x1: 670, y1: 260, x2: 815, y2: 380, name: "game4"});
boundingBoxList.push({x1: 150, y1: 380, x2: 335, y2: 565, name: "game5"});
boundingBoxList.push({x1: 1065, y1: 400, x2: 1200, y2: 445, name: "help"});
boundingBoxList.push({x1: 1065, y1: 455, x2: 1200, y2: 500, name: "about"});
boundingBoxList.push({x1: 1065, y1: 510, x2: 1200, y2: 555, name: "exit"});

$('#imgMenu').click(function (e) { //Default mouse Position 
var x = e.pageX;
var y = e.pageY;
for(var i = 0 ; i < boundingBoxList.length;i++){
if(x>=boundingBoxList[i].x1 && x<=boundingBoxList[i].x2 && y>=boundingBoxList[i].y1 && y<=boundingBoxList[i].y2){
//alert(boundingBoxList[i].name);
location.href = boundingBoxList[i].name+".html";
}
}
});