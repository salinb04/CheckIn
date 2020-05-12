// Save data into array, save that to local storage

// Each hour description to localStorage
// saves on button click

var hours = []

function createHours() {
    for (var hour = 8; hour <= 23; hour++) {
        var hr = moment().hour(hour)
        hours.push(hr.format('HH'))
    }
}

function createHourBlocks() {
    for (var i = 0; i < hours.length; i++) {
        // "9AM"
        var hour = hours[i];

        // Notes content
        var notes = window.localStorage.getItem(hour);

        // Outer Time Block
        var hourBlock = $('<li/>');
        hourBlock.addClass("collection-item");

        // Hour div
        var hourLabel = $('<div/>').addClass("hour");
        hourLabel.html(moment().hour(hour).format('hA'));

        // Text Area
        var textArea = $('<textarea />').addClass("future");
        textArea.attr('id', hour);
        textArea.html(notes);

        // Decide which class to add depending moment.js
        var currentTime = moment().format("HH");
        var currentTimeInt = parseInt(currentTime);
        console.log("currentTime:" + currentTimeInt);
        console.log("thisHour:" + hour)
        if (currentTime > hour) {
            textArea.removeClass("future");
            textArea.addClass("past");
        } else if (currentTime === hour) {
            textArea.removeClass("future");
            textArea.addClass("present");
        };



        // Save Button
        var saveButton = $("<button/>").addClass("saveBtn");
        saveButton.addClass(hour);

        saveButton.on('click', function (event) {
            var classes = event.target.classList;
            var id = classes[classes.length - 1];
            var nts = $("#" + id).val()

            window.localStorage.setItem(id, nts);
        })

        // Save Icon
        var icon = $("<i/>").addClass("far fa-save");
        icon.addClass(hour);

        // Append Icon to button
        saveButton.append(icon);

        // Append Items to Block
        hourBlock.append(hourLabel);
        hourBlock.append(textArea);
        hourBlock.append(saveButton);

        $(".collection").append(hourBlock);
    };
};

createHours();
createHourBlocks();