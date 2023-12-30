var usertext = document.getElementById("usertext")

var result = document.getElementById("result")

var result = document.createElement("h2")

var body = document.querySelector("body")

function msg()
{
    
    result.classList.add("note")
    
    var uservalue = usertext.value

    result.innerHTML = `${uservalue}`
    
    body.appendChild(result)
}