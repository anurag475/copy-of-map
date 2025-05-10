function vap(arr,fnc){
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        
        newarr.push(fnc(arr[i]))
    }
    return newarr;


}
var ans=vap([2,3,4,5,6],function(value){
    return value+3;
})
console.log(ans)