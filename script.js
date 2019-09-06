var token = "Mu2L1ylVSEPUn4ywI68GWXDq5VuOAu";

var obj4 = 0;
var obj5 = 0;
var gita_all = new XMLHttpRequest();
gita_all.open('GET', 'https://bhagavadgita.io/api/v1/verses?access_token=' + token);
gita_all.send();
gita_all.onload = function () {
    if (gita_all.status == 200) {
        obj4 = gita_all.response;
        obj5 = JSON.parse(obj4)
        display22(obj5)
        console.log(obj5);
    }
    else {
        console.log(gita_all.status)
    }
}

function display22(obj5) {
    var ran = Math.floor(Math.random() * 18)
    $("#random").append("<h2>" + obj5[ran].text + obj5[ran].meaning + "</h2>")
}


var btn = document.getElementById("all");
btn.addEventListener('click', function () {
    var obj1 = 0;
    var obj2 = 0;
    var gita_all = new XMLHttpRequest();
    gita_all.open('GET', 'https://bhagavadgita.io/api/v1/chapters?access_token=' + token);
    gita_all.send();
    gita_all.onload = function () {
        if (gita_all.status == 200) {
            obj1 = gita_all.response;
            obj2 = JSON.parse(obj1)
            display(obj2)
            console.log(obj2);

        }
        else {
            console.log(gita_all.status)
        }
    }
})

function display(obj2) {
    for (key in obj2) {
        $("#create2").empty();
        $("#create").append("<h2>" + obj2[key].chapter_number + ' : ' + obj2[key].name_meaning + "</h2>")
        $("#chapter").append("<option>" + obj2[key].chapter_number + ' : ' + obj2[key].name_meaning + "</option>")
        $("#create").append("<p>" + obj2[key].chapter_summary + "</p>")
        $("h2").css("color", "orange")
    }
}

//    
// 
// 
var btn1 = document.getElementById("al");
btn1.addEventListener('click', function () {
    var obj4 = 0;
    var obj5 = 0;
    var gita_all = new XMLHttpRequest();

    gita_all.open('GET', 'https://bhagavadgita.io/api/v1/verses?access_token=' + token);
    gita_all.send();
    gita_all.onload = function () {
        if (gita_all.status == 200) {
            obj4 = gita_all.response;
            obj5 = JSON.parse(obj4)
            display1(obj5)
            console.log(obj5);

        }
        else {
            console.log(gita_all.status)
        }
    }
})

function display1(obj5) {
    for (key in obj5) {
        $("#create").empty();
        $("#create2").append("<h2>" + obj5[key].chapter_number + ' : ' + obj5[key].text + "</h2>")

        $("h2").css("color", "orange")
    }
}
