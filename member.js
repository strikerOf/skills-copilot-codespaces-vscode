function skillsMember() {
    var skills = document.getElementById("skills").value;
    var skillsError = document.getElementById("skillsError");
    var skillsRegex = /^[a-zA-Z0-9\s]+$/;
    if (skills == "") {
        skillsError.innerHTML = "Skills cannot be empty";
        return false;
    } else if (!skillsRegex.test(skills)) {
        skillsError.innerHTML = "Skills must be alphanumeric";
        return false;
    } else {
        skillsError.innerHTML = "";
        return true;
    }
}
    