var token;
var arr = []

var xhr1 = new XMLHttpRequest();

var result;

xhr1.onload = function () {

    if (xhr1.status == 200) {

        console.log(JSON.parse(xhr1.response))
        result = JSON.parse(xhr1.response)
        token = result.access_token;
        myfunc(token)

        arr[0] = result.access_token

    }
    else {
        console.log("Error Code is:" + xhr1.status);
    }
}

xhr1.open('POST', 'https://bhagavadgita.io/auth/oauth/token?client_id=KGfqjoXQ7o2CM3PnfgHPe4mLOV5sHtnjA869dd6M&client_secret=cXAfAA7W35ufAbpJPjROIfBO1PgGr19iLuT8qaIDtnDxG1E1GB&grant_type=client_credentials&scope=verse chapter')
xhr1.setRequestHeader('accept', 'application/json');
xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr1.send();
console.log(token)
var obj4 = 0;
var obj5 = 0;
var gita_all = new XMLHttpRequest();

const myfunc = tok => {
    console.log('start of myfunc', token)
    gita_all.open('GET', 'https://bhagavadgita.io/api/v1/verses?access_token=' + tok);
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


console.log('end of program')