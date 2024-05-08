function changeTextSize() {
    document.getElementById("textbox").style.fontSize = "24pt";
}

function boringStyle() {
    //alert("Boring Betty Style selected.");
    let textbox = document.getElementById("textbox");
    textbox.style.fontWeight = "normal";
    textbox.style.color = "black";
    textbox.style.textDecoration = "none";
}

function fancyStyle() {
    //alert("Fancy Shmancy Style selected.");
    let textbox = document.getElementById("textbox");
    textbox.style.fontWeight = "bold";
    textbox.style.color = "blue";
    textbox.style.textDecoration = "underline";
}

function moo() {
    var textbox = document.getElementById("textbox");
    textbox.value = textbox.value.toUpperCase();
    var textInput = textbox.value;
    var parts = textInput.split(".");
    textInput = parts.join(".-Moo");
    textbox.value = textInput;
}