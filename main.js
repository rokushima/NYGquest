function valueChange(){
    if(element.value=="place1"){
        $('.quiz-img').attr("src","images/image1.png");
        $('.quiz-txt').text("");
        $('.hint1').before("<label　class='hint1_label'><input type='checkbox' id='check1' name='check'/>ヒント1</label>")
        check1 = document.getElementById("check1");
        check1.addEventListener('change', hint1);
    }else if(element.value=="place2"){
        $('.quiz-img').attr("src","");
        $('.quiz-txt').text("ここには何も無いようだ");
    }else if(element.value=="place3"){
        $('.quiz-img').attr("src","images/image3.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place4"){
        $('.quiz-img').attr("src","images/image4.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place5"){
        $('.quiz-img').attr("src","images/image5.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place6"){
        $('.quiz-img').attr("src","images/image6.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place7"){
        $('.quiz-img').attr("src","images/image7.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place8"){
        $('.quiz-img').attr("src","images/image8.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place9"){
        $('.quiz-img').attr("src","");
        $('.quiz-txt').text("ここには何も無いようだ");
    }else if(element.value=="place10"){
        $('.quiz-img').attr("src","images/image10.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place11"){
        $('.quiz-img').attr("src","images/image11.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place12"){
        $('.quiz-img').attr("src","images/image12.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place13"){
        $('.quiz-img').attr("src","images/image13.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place14"){
        $('.quiz-img').attr("src","images/image14.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place15"){
        $('.quiz-img').attr("src","images/image15.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place16"){
        $('.quiz-img').attr("src","images/image16.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place17"){
        $('.quiz-img').attr("src","images/image17.png");
        $('.quiz-txt').text("");
    }
}
function hint1(){
    if(element.value=="place1"){
        if (check1.checked){
            $('.hint1-img').attr("src","images/image1_1.png");
            $('.hint2').before("<label class='hint2_label'><input type='checkbox' class='check2' id='check2' name='check'/>ヒント2</label>");
            check2 = document.getElementById("check2");
            check2.addEventListener('change', hint2);
        }else{
            $('.hint1-img').attr("src","");
            $('.hint2_label').remove();
        }
    }else if(element.value=="place2"){
        $('.quiz-img').attr("src","");
        $('.quiz-txt').text("ここには何も無いようだ");
    }else if(element.value=="place3"){
        $('.quiz-img').attr("src","images/image3.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place4"){
        $('.quiz-img').attr("src","images/image4.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place5"){
        $('.quiz-img').attr("src","images/image5.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place6"){
        $('.quiz-img').attr("src","images/image6.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place7"){
        $('.quiz-img').attr("src","images/image7.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place8"){
        $('.quiz-img').attr("src","images/image8.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place9"){
        $('.quiz-img').attr("src","");
        $('.quiz-txt').text("ここには何も無いようだ");
    }else if(element.value=="place10"){
        $('.quiz-img').attr("src","images/image10.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place11"){
        $('.quiz-img').attr("src","images/image11.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place12"){
        $('.quiz-img').attr("src","images/image12.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place13"){
        $('.quiz-img').attr("src","images/image13.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place14"){
        $('.quiz-img').attr("src","images/image14.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place15"){
        $('.quiz-img').attr("src","images/image15.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place16"){
        $('.quiz-img').attr("src","images/image16.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place17"){
        $('.quiz-img').attr("src","images/image17.png");
        $('.quiz-txt').text("");
    }
}
function hint2(){
    if(element.value=="place1"){
        if (check2.checked){
            $('.hint2-img').attr("src","images/image1_2.png");
        }else{
            $('.hint2-img').attr("src","");
        }
    }else if(element.value=="place2"){
        $('.quiz-img').attr("src","");
        $('.quiz-txt').text("ここには何も無いようだ");
    }else if(element.value=="place3"){
        $('.quiz-img').attr("src","images/image3.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place4"){
        $('.quiz-img').attr("src","images/image4.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place5"){
        $('.quiz-img').attr("src","images/image5.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place6"){
        $('.quiz-img').attr("src","images/image6.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place7"){
        $('.quiz-img').attr("src","images/image7.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place8"){
        $('.quiz-img').attr("src","images/image8.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place9"){
        $('.quiz-img').attr("src","");
        $('.quiz-txt').text("ここには何も無いようだ");
    }else if(element.value=="place10"){
        $('.quiz-img').attr("src","images/image10.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place11"){
        $('.quiz-img').attr("src","images/image11.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place12"){
        $('.quiz-img').attr("src","images/image12.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place13"){
        $('.quiz-img').attr("src","images/image13.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place14"){
        $('.quiz-img').attr("src","images/image14.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place15"){
        $('.quiz-img').attr("src","images/image15.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place16"){
        $('.quiz-img').attr("src","images/image16.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place17"){
        $('.quiz-img').attr("src","images/image17.png");
        $('.quiz-txt').text("");
    }
}
let element = document.getElementById('place');
element.addEventListener('change', valueChange);
let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");


