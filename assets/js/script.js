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
}
changeColor();