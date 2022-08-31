// get the current date with moment js and display as shown in mockup
$('#currentDay').text(moment().format('dddd, MMM Do'));

// when called, go through time blocks and check whether time has passed
var auditTasks = function() {
    // for each div with class 'hour', check whether the hard-coded hour
    // is less than, equal to, or greater than the start of the current hour
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
$('textarea').on('blur', function() {

    // get current value of textarea
    var text = $(this).val();
    console.log(text);

    // recreate div element
    var originalDiv = $("<div>")
    .addClass("row col-10")
    .text(text);

    // replace textarea with new content
    $(this).replaceWith(originalDiv);
});



// hour content saved to local storage when button clicked; delete any existing content for that hour
$('.saveBtn').on('click', function() {
    var taskText = $(this).parent().find('.row').text().trim();
    var taskTime = $(this).parent().find('.hour').text().trim();

    saveTasks(taskTime, taskText);
});

var savedTasks = [];

var saveTasks = function(taskTime, taskText) {
    savedTasks.push({time: taskTime, task: taskText});
    
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
};



// audit tasks on page load/refresh, eventually add interval to run every 30 minutes
auditTasks();