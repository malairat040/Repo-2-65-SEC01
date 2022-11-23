var num = 10;
    let name = "fah"
    //let Array = [10,15,"fah"];
    const obj = { name:"fah" , age: 20 };
    const objMix = {
        data:[
            {name:"Dang",gpa:4.3},
            {name:"Dum",gpa:2.8},
        ],
    };

    console.log(num);
    console.log(Array);
    console.log(objMix);

    let string = num + name;
    console.log(string);

    string = objMix.data[1].name + Array[0];
    console.log(string);

    string = "</p>" + Array[2] + "</p>";
    string = `</p>${Array}</p>`;

    console.log(string);

    function Add(a,b) {
        return a + b;
    }

    console.log(Add(3,5));


    document.getElementById("div1").innerHTML = name;


    $(function () {
        //alert("Hello");
        $("#div1").html("malairat");

        $("#bt1").bind("click",function () {
            $("#div1").html("fah");
        });

        $("#bt2").click(function () {
             $("#div1").html("I LOVE IT");
        });


    $("#bt3").click(() => { // Arrow function
    })
    $(".in1").val("BRU");


    $("#bt4").click(() =>{
        $(".in1:odd").addClass("red");
    });


    $("#div_about").load("./pages/about.html");


    }); //jQuery Handle
    
