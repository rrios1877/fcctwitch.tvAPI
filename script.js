//run the jQuery
$(document).ready(function(){
  
  $.ajax({
    type:'GET',
    url:"https://api.twitch.tv/kraken/streams/freecodecamp",
    headers:{
      'Client-ID':'8s6u7kaixzb42z5pmlbr6qku65a0e5o'
    },
    success: function(data1){
      if(data1.stream === null){
        //if freecodecamp is offline
        $('#fccStatus').html("FREE CODE CAMP IS CURRENTLY <i>OFFLINE</i> !");
      }
      //if freecodecamp is online
      else{
        $('#fccStatus').html("FREE CODE CAMP IS CURRENTLY <i>ONLINE</i> !");
      }
    }
  });
  // the channels freecodecamp follows
 $.ajax({
    type:'GET',
    url:"https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/",
    headers:{
      'Client-ID':'8s6u7kaixzb42z5pmlbr6qku65a0e5o'
    },
    success: function(data2){
      for(var i = 0; i < data2.follows.length; i++){
        //gets the display names of who Freecodecamp follows
        var displayName = data2.follows[i].channel.display_name;
        var logo = data2.follows[i].channel.logo;
        var status = data2.follows[i].channel.status;
        if(logo == null){
              logo ="http://cdn.technotest.com.ua/images/feature_variant/14/NoLogo.jpg";
            }
        $('#followerInfo').prepend("<div class = 'row'>" + "<div class = 'col-md-4'>" + "<img src = '" + logo + "'>" + "</div>" +  "<div class = 'col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
      }
    }
 });
  // deleted followers
  var deletedFollowers = ['brunofin','comster404'];
  for(var i = 0; i < deletedFollowers.length; i++){
    $.ajax({
      type:'GET',
      url:"https://api.twitch.tv/kraken/streams/"+deletedFollowers[i],
      headers:{ 'Client-ID':'8s6u7kaixzb42z5pmlbr6qku65a0e5o'
        },
      error:function(data3){
        var logo = "https://mlblogsbensbiz.files.wordpress.com/2008/12/nologo2.jpg";
        var displayName = data3.statusText;
        var status = data3.status;
        $('#followerInfo').prepend("<div class = 'row'>" + "<div class = 'col-md-4'>" + "<img src = '" + logo + "'>" + "</div>" +  "<div class = 'col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
      }
    });
  }
   });
  
  
  