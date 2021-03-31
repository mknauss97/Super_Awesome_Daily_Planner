var button = $('.save-button')

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

function changeColor() {
    var currentTime = moment().hours()
    var time = $('.time');

    time.each(function() {
        var hour = parseInt($(this).attr('id'))
        if(hour === currentTime) {
            $(this).children('.schedule-block').attr('class', 'current col-sm-10 schedule-block' )
        } else if(currentTime > hour) {
            $(this).children('.schedule-block').attr('class', 'past col-sm-10 schedule-block')
        }else {
            $(this).children('.schedule-block').attr('class', 'future col-sm-10 schedule-block')
        }
    }) 
}changeColor();

function createPlans() {
    $(".row").each(function () {
        var eventID = $(this).attr("id");
        var plans = localStorage.getItem(eventID);
        if(plans) {
            $(this).children(".schedule-block").val(plans)
        }
    })
}createPlans()

$('.save-button').on("click", function () {
    var currentHour = $(this).parent().attr("id");
    var plans = $(this).siblings(".schedule-block").val();
    localStorage.setItem(currentHour, plans);
})