$('#currentDay').text(moment().format('dddd, MMM Do'));

var auditTasks = function() {
    $('.hour').each(function() {
        var taskTime = moment($(this).text(), 'h A');
        currentTime = moment().startOf('hour');

        if (taskTime < currentTime) {
            $(this).parent().addClass('bg-secondary');
        }

        else if (taskTime > currentTime) {
            $(this).parent().addClass('bg-danger');
        }

        else {
            $(this).parent().addClass('bg-success');
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