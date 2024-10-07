
var userNameInput = document.getElementById("userName")
var userIdInput = document.getElementById("userId")
var courseName = document.getElementById("courseName")
var userEmail = document.getElementById("userEmail")
var phoneNo = document.getElementById("phoneNo")

var cardContainer = document.getElementById("cardContainer")

function submit(){
        
    if(userNameInput.value === ""){
        var userError = document.getElementById("userError")
        userError.innerHTML = "Please Enter Your Full Name !"
        userError.style.color = "red"
        setTimeout(() => {
            userError.innerHTML = ""
        }, 1700);
    } else if(userIdInput.value === ""){
        var idError = document.getElementById("idError")
        idError.innerHTML = "Please Enter Your ID !"
        idError.style.color = "red"
        setTimeout(() => {
            idError.innerHTML = ""
        }, 1700);
    } else if(userIdInput.length < 8 && userIdInput.length > 0){
        document.getElementById("idError").innerHTML = "Please Enter Your ID at-least 8 Characters !"
        document.getElementById("idError").style.color = "red"
        setTimeout(() => {
            document.getElementById("idError").innerHTML = ""
        }, 2000);
    } else if(courseName.value === ""){
        var courseError = document.getElementById("courseError")
        courseError.innerHTML = "Please Enter Your Course Name !"
        courseError.style.color = "red"
        setTimeout(() => {
            courseError.innerHTML = ''
        }, 2000);
    } else if(userEmail.value === ""){
        var emailError = document.getElementById("emailError")
        emailError.innerHTML = "Please Enter Your Email With Vaild Format !"
        emailError.style.color = "red"
        setTimeout(() => {
            emailError.innerHTML = ""
        }, 2500);
    } else if(phoneNo.value === ""){
        var phoneError = document.getElementById("phoneError")
        phoneError.innerHTML = "Please Enter Your Phone Number !"
        phoneError.style.color = "red"
        phoneError.style.marginTop = "10px"
        setTimeout(() => {
            phoneError.innerHTML = ""
        }, 2500);
    } else if(phoneNo.value.length < 11 && phoneNo.value.length > 2){
        document.getElementById("phoneError").innerHTML = "Please Enter Your Phone Number In 11 Digit !"
        document.getElementById("phoneError").style.color = "red"
        document.getElementById("phoneError").style.marginTop = "10px"
        setTimeout(() => {
            document.getElementById("phoneError").innerHTML = ""
        }, 2500);
    } else{
        
        var valueSaved = [{
            names: userNameInput.value,
            idName: userIdInput.value,
            email: userEmail.value,
            course:courseName.value,
            phone:phoneNo.value
        }]

        var firstLetterName = userNameInput.value.charAt(0).toUpperCase()
        
        userNameInput.value = ""
        userIdInput.value = ""
        userEmail.value = ""
        courseName.value = ""
        phoneNo.value = ""
        
        var mainCard = document.createElement("div")
        mainCard.setAttribute("class","mainCard")
        
        var profileImg = document.createElement("div")
        profileImg.setAttribute("class","profileImg")
        
        var details = document.createElement("div")
        details.setAttribute("class","detailsDiv")
        
        var p1 = document.createElement("p")
        p1.setAttribute("class","para")
        p1.innerHTML = "Name : "
        
        var p2 = document.createElement("p")
        p2.setAttribute("class","para")
        p2.innerHTML = "ID : "

        var p3 = document.createElement("h3")
        p3.setAttribute("class","para")
        p3.id = "headline"
        p3.innerHTML = ""
        
        var p4 = document.createElement("p")
        p4.setAttribute("class","para")
        p4.innerHTML = "Email : "

        var p5 = document.createElement("p")
        p5.setAttribute("class","para")
        p5.innerHTML = "Phone : "

        mainCard.appendChild(profileImg)
        mainCard.appendChild(p3)
        mainCard.appendChild(details)
        details.appendChild(p1)
        details.appendChild(p2)
        details.appendChild(p4)
        details.appendChild(p5)
        
        cardContainer.appendChild(mainCard)
        
        profileImg.innerHTML = firstLetterName
        
        for(var i = 0; i < valueSaved.length;i++){
            p1.innerHTML += " " + valueSaved[i].names
            p2.innerHTML += " " + valueSaved[i].idName
            p3.innerHTML = " " + valueSaved[i].course
            p4.innerHTML += " " + valueSaved[i].email
            p5.innerHTML += " " + valueSaved[i].phone
        }
        cardContainer.style.display = "flex"
    }
    
}
