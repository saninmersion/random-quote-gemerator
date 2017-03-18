//Variables
var color = ['#eb2b36'];
var singleData = "";


//Functions

//JSON Parsing
function loadData(){
  $.getJSON("http://codepen.io/saninmersion/pen/aJyMWO.js", function(json){
    var count = json.length;
    var random = Math.floor(Math.random() * count);

    json = json.filter(function(val){
      return json.indexOf(val) == random;
    })

    //post json data
    json.forEach(function(val){
      $(".text").html(val.quote);
      $(".author").html("- " + val.author);
      singleData = val.quote;
    });
          });  
}

$(document).ready(function(){
  loadData();
  $("#nxt-quote").on("click", function(){
   loadData();
  });
  $("#twitterlink").on("click",function(){
      $('#twitterlink').prop('href',"https://twitter.com/share?text=" + singleData);    
  });
});