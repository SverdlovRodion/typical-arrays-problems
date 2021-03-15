
exports.min = function min (array) {
      var min = arr[0];
for(var i=1; i<arr.length; i++){
if(arr[i] < min){
min = arr[i];
}
}
return min;
}

exports.max = function max (array) {
  var max = arr[0];
for(var i=1; i<arr.length; i++){
if(arr[i] > max){
max = arr[i];
}
}
return max;
}

exports.avg = function avg (array) {
  var avg;
var sum = 0;
for(var i=0; i<arr.length; i++){
sum+=arr[i];
}
return avg=sum/arr.length;
}
