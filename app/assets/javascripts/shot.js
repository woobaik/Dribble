Dropzone.options.myAwesomeDropzone = { // The camelized version of the ID of the form element
    paramName: "shot[user_shot]",
    autoProcessQueue: false,
    init: function () {

        var myAwesomeDropzone = this;
        //now we will submit the form when the button is clicked
        document.getElementById("submit").addEventListener('click', function (e) {
            e.preventDefault();
            myAwesomeDropzone.processQueue();
            // this will submit your form to the specified action path
            // after this, your whole form will get submitted with all the inputs + your files and the php code will remain as usual
            //REMEMBER you DON'T have to call ajax or anything by yourself, dropzone will take care of that
            window.location.reload() 
        }); 

    } // init end
    



};