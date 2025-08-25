function valueChange(){
    if(element.value=="place1"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place2"){
        $('.quiz-img').attr("src","");
        $('.quiz-txt').text("ここには何も無いようだ");
    }else if(element.value=="place3"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place4"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place5"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place6"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place7"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place8"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place9"){
        $('.quiz-img').attr("src","");
        $('.quiz-txt').text("ここには何も無いようだ");
    }else if(element.value=="place10"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place11"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place12"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place13"){
        $('.quiz-img').attr("src","謎解き　上級/体育館.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place14"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place15"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place16"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place17"){
        $('.quiz-img').attr("src","logo.svg");
        $('.quiz-txt').text("");
    }
}
let element = document.getElementById('place');
element.addEventListener('change', valueChange);
