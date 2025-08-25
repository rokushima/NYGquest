function valueChange(){
    if(element.value=="place1"){
        $('.quiz-img').attr("src","/images/囲碁将棋.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place2"){
        $('.quiz-img').attr("src","");
        $('.quiz-txt').text("ここには何も無いようだ");
    }else if(element.value=="place3"){
        $('.quiz-img').attr("src","/images/折り紙.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place4"){
        $('.quiz-img').attr("src","/images/科学.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place5"){
        $('.quiz-img').attr("src","/images/クイズ.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place6"){
        $('.quiz-img').attr("src","/images/現代美術研究.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place7"){
        $('.quiz-img').attr("src","/images/コンピューター.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place8"){
        $('.quiz-img').attr("src","/images/写真.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place9"){
        $('.quiz-img').attr("src","");
        $('.quiz-txt').text("ここには何も無いようだ");
    }else if(element.value=="place10"){
        $('.quiz-img').attr("src","/images/食堂.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place11"){
        $('.quiz-img').attr("src","/images/書道.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place12"){
        $('.quiz-img').attr("src","/images/数学.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place13"){
        $('.quiz-img').attr("src","/images/体育館.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place14"){
        $('.quiz-img').attr("src","/images/地歴.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place15"){
        $('.quiz-img').attr("src","/images/鉄道.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place16"){
        $('.quiz-img').attr("src","/images/百人一首競技かるた.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place17"){
        $('.quiz-img').attr("src","/images/リズム館.png");
        $('.quiz-txt').text("");
    }
}
let element = document.getElementById('place');
element.addEventListener('change', valueChange);
