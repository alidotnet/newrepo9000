var index = 0;
var names = [];
names.push({EN: "COCK", FA: "خروس"});
names.push({EN: "CAT", FA: "گربه"});

var places = [];
places.push(0);
places.push(0);
places.push(0);
places.push(0);
places.push(0);
places.push(0);
places.push(0);
places.push(0);
places.push(0);
var initialPositions = [];
initialPositions.push({left: 50, top: 500, angle: 10});
initialPositions.push({left: 150, top: 500, angle: -25});
initialPositions.push({left: 250, top: 500, angle: 30});
initialPositions.push({left: 350, top: 500, angle: -30});
initialPositions.push({left: 50, top: 650, angle: -10});
initialPositions.push({left: 150, top: 650, angle: 15});
initialPositions.push({left: 250, top: 650, angle: 25});
initialPositions.push({left: 350, top: 650, angle: 35});
initialPositions.push({left: 450, top: 500, angle: -25});
var boundingBoxList = [];
boundingBoxList.push({x1: 1060, y1: 50, x2: 1235, y2: 185, name: "back"});

function GoToNextPuzzle(){
places[0]=0;
places[1]=0;
places[2]=0;
places[3]=0;
places[4]=0;
places[5]=0;
places[6]=0;
places[7]=0;
places[8]=0;
if(index<names.length){
index++;

$('#lblNameEnglish').html(names[index-1].EN);
$('#lblNamePersian').html(names[index-1].FA);
$('#lblNameEnglish').hide();
$('#lblNamePersian').hide();
for(var i = 1 ; i < 10;i++){
document.getElementById('img'+i).src='images/game3/'+index+'-'+i+'.png';
document.getElementById('img'+i).style.left = initialPositions[i-1].left+"px";
document.getElementById('img'+i).style.top = initialPositions[i-1].top+"px";
document.getElementById('img'+i).style.transform = 'rotate('+initialPositions[i-1].angle+'deg)';
}
}
}

$('#imgMenu').click(function (e) { //Default mouse Position 
    var x = e.pageX;
    var y = e.pageY;
    for(var i = 0 ; i < boundingBoxList.length;i++){
    if(x>=boundingBoxList[i].x1 && x<=boundingBoxList[i].x2 && y>=boundingBoxList[i].y1 && y<=boundingBoxList[i].y2){
if(boundingBoxList[i].name=="back"){
    location.href = "index.html";
}

    }
    }
    });

var nodeList = document.getElementsByClassName('draggable');

 for(var i=0;i<nodeList.length;i++) {
   var obj = nodeList[i];
   obj.addEventListener('touchmove', function(event) {
     var touch = event.targetTouches[0];
     var _v = event.target.id.replace('img','');
for(var k = 0 ; k < places.length;k++){
    if(places[k]==_v){
        places[k] = 0;
    }
}

     // Place element where the finger is
     event.target.style.left = touch.pageX + 'px';
     event.target.style.top = touch.pageY + 'px';

     var x = event.target.style.left.replace('px','');
     var y = event.target.style.top.replace('px','');
 
     for(var i = 188;i<188+308;i+=102){
 for(var j = 173;j<173+244;j+=81){
 if(x>=i && x<i+102){

    event.target.style.left = i + 'px';
 }
 if(y>=j && y<j+81){
     event.target.style.top = j+'px';
 }
 }
}
 

     event.preventDefault();
   }, false);

   obj.addEventListener('touchend', function(event) {
    event.target.style.transform = 'rotate(0deg)';
    var x = event.target.style.left.replace('px','');
    var y = event.target.style.top.replace('px','');
var _i=-1;
var _j=-1;
var _v = event.target.id.replace('img','');
    for(var i = 188;i<188+308;i+=102){
for(var j = 173;j<173+244;j+=81){
if(x>=i && x<i+102){
    event.target.style.left = i + 'px';
    _i = (i-188)/102;
}
if(y>=j && y<j+81){
    event.target.style.top = j+'px';
    _j = (j-173)/81;
}
}
}
var _ind = (_j*3)+_i;
if(places[_ind]!=0){//already filled? return item to its original place
event.target.style.left = initialPositions[_v-1].left+"px";
event.target.style.top = initialPositions[_v-1].top+"px";

}
else
    {
if(_i!=-1 && _j!=-1){
FillPlace(_ind,_v);
}
    }

//188,173
//308,244
//102x81
   }, false);
 }

function FillPlace(index, value){
    places[index] = value;
var finished = true;
for(var i = 0 ; i < places.length;i++){
   if(places[i]==0) {
    finished = false;
    break;
   }
}
if(finished){
    var correct = true;
    for(var i = 0 ; i < places.length;i++){
if(places[i]!=i+1){
correct=false;
break;
}
    }
    if(correct){
        alert('Well done!');
        document.getElementById('lblNameEnglish').style.display = 'block';
        document.getElementById('lblNamePersian').style.display = 'block';
        setTimeout(function() {
            GoToNextPuzzle();
        }, 5000);
    }
    else{
        alert('Try again.');
    }
}
}

GoToNextPuzzle();