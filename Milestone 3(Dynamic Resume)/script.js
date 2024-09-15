//Get reference to the form & diaplay area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
//Handle form submittion
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById("name").value;
    var Dob = document.getElementById("Dob").value;
    var Address = document.getElementById("Address").value;
    var Email = document.getElementById("email").value;
    var mobile = document.getElementById("phone").value;
    var Education = document.getElementById("education").value;
    var Skills = document.getElementById("skills").value;
    var Experience = document.getElementById("experience").value;
    //generate the resume content dynamically
    var resumeHTML = "\n  <h2><b> Resume </b></h2>\n  <h3> Personal Information </h3>\n  <p><b> Name:</b>".concat(name, "</p>\n  <p><b> Dob:</b>").concat(Dob, "</p>\n  <p><b> Address:</b>").concat(Address, "</p>\n  <p><b> Email:</b>").concat(Email, "</p>\n  <p><b> mobile:</b>").concat(mobile, "</p>\n  \n  <h3> Education </h3>\n  <p> ").concat(Education, " </p>\n\n  <h3> Skills </h3>\n  <p> ").concat(Skills, " </p>\n\n  <h3> Experience </h3>\n  <p> ").concat(Experience, " </p> ");
    //Display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume diaplay element is missing");
    }
});
