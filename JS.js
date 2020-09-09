
function newDog(){
  $.getJSON("https://api.thedogapi.com/v1/images/search", function(data,status){
    //put data from API call into variables
    img = data[0]['url'];
    name = data[0]["breeds"][0]["name"];
    life = data[0]["breeds"][0]["life_span"];
    temp = data[0]["breeds"][0]["temperament"];
    weight = data[0]["breeds"][0]["weight"]["imperial"]
    height = data[0]["breeds"][0]["height"]["imperial"]
    // put data in html document
    $("#name").text("type: "+name);
    $("#life").text("life expextancy: "+life);
    $("#temp").text("temperament: "+temp);
    $("#weight").text("Weight: "+weight + " LBS");
    $("#height").text("Height: "+height+" inches")
    //change img source to the URL from the API call
    $("img#dogImage").attr('src', img);

  })
}
