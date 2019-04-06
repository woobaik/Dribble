$(function () {

    $(".shot-form").submit(function (e) {
        e.preventDefault();
        return false;
    })

})

Dropzone.options.myAwesomeDropzone = {
    paramName: "shot[user_shot]",
    autoProcessQueue: false,
    
    init: function () {
        var submitButton = document.querySelector("#submit")
        myDropzone = this; 

        submitButton.addEventListener("click", function () {
            myDropzone.processQueue(); // Tell Dropzone to process all queued files.
            myDropzone.on("complete", function (file) {
                myDropzone.removeFile(file);
                window.location.href="localhost:3000/shots";
            });
        });
    }

};