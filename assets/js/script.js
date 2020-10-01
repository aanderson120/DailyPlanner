$(document).ready(function() {

    //the current day posts to the top of the screen
    $("#currentDay").text( moment().format("ddd MMMM Do, YYYY"))

    //get current time
    var nowTime = (moment().format("H"));
    console.log(nowTime)
    
    //checks local storage for saved items
    for (var i = 9; i< 17; i++) {
        $("#time-"+i).val(localStorage.getItem(i)); 
    }

    $(".input-group").each(function(){

        var time = $(this).attr("data-time");             

        // time blocks change color in cooridination with the time of day (past/present/future)

        if (time < nowTime) {
            $(this).addClass("past")
        }

        if (time === nowTime) {
            $(this).addClass("present")
        }

        if (time > nowTime) {
            $(this).addClass("future")
        }   

    });

    //when the save button is clicked the event will save to storage

    $(".saveBtn").on("click", function(){
        var time = $(this).attr("data-time");
        var value = $("#time-"+time).val();

        localStorage.setItem(time, value);
    });

    //retrieves event from local storage
    $(time, value).append(localStorage.getItem)

 });