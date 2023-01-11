$(document).ready(function() {

    $("button").click(function(){

        let text = $("input").val() 
        if (text.length>0){
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q="+text+"&appid=0c6e0a28f31149cbfc75483d150a4e1e&units=metric",
                type: "GET",
                dataType: "json",
                success: function(data){
                    console.log(data.main.temp);
                    $("#champtext").html("<p>La température est de "+data.main.temp+"</p>")
                },
                error: function(error){
                    $("#champtext").html("<p>"+error.responseJSON.message+"</p>")
                }
            });
        }
        else{
            alert("Rentrer une ville")
        }
        
    })
}) 