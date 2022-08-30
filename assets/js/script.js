$('#currentDay').text(moment().format('dddd, MMM Do'));

var auditTasks = function() {
    $('.hour').each(function() {
        console.log($(this).text());
        var taskTime = moment($(this).text(), 'h A');
        console.log(taskTime);
        currentTime = moment().startOf('hour');
        console.log(currentTime);

        if (taskTime < currentTime) {
            console.log('past hours');
        }

        else if (taskTime > currentTime) {
            console.log('future hours');
        }

        else {
            console.log('curren hour');
        }
    });
};

// time slot content area is clicked, add new content or edit existing content
$('.row').on('click', function() {
    var text = $(this)
    .text()
    .trim();

    // replace div element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// editable textarea is unfocused
$(".row").on("blur", function() {
    // get current value of textarea
    var text = $(this).val();

    // recreate div element
    var taskDiv = $("<div>")
    .addClass("row col-10")
    .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskDiv);
});

auditTasks();