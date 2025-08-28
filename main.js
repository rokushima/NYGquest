function valueChange(){
    $('.quiz-img').attr("src","");
    $('.hint1-img').attr("src","");
    $('.hint2-img').attr("src","");
    $('.hint1_label').remove();
    $('.hint2_label').remove();
    $('.quiz-txt').text("");
    if(element.value=="place1"){
        $('.quiz-img').attr("src","images/image1.svg");
        $('.quiz-txt').text("");
        $('.hint1').before("<label class='hint1_label'><input type='checkbox' id='check1' name='check'/>ヒント1</label>")
        check1 = document.getElementById("check1");
        check1.addEventListener('change', hint1);
    }else if(element.value=="place2"){
        $('.quiz-img').attr("src","");
        $('.quiz-txt').text("ここには何も無いようだ");
    }else if(element.value=="place3"){
        $('.quiz-img').attr("src","images/image3.svg");
        $('.quiz-txt').text("");
        $('.hint1').before("<label class='hint1_label'><input type='checkbox' id='check1' name='check'/>ヒント1</label>")
        check1 = document.getElementById("check1");
        check1.addEventListener('change', hint1);
    }else if(element.value=="place4"){
        $('.quiz-img').attr("src","images/image4.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place5"){
        $('.quiz-img').attr("src","images/image5.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place6"){
        $('.quiz-img').attr("src","images/image6.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place7"){
        $('.quiz-img').attr("src","images/image7.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place8"){
        $('.quiz-img').attr("src","images/image8.png");
        $('.quiz-txt').text("");
    }else if(element.value=="place9"){
        $('.quiz-img').attr("src","");
        $('.quiz-txt').text("ここには何も無いようだ");
    }else if(element.value=="place10"){
        $('.quiz-img').attr("src","images/image10.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place11"){
        $('.quiz-img').attr("src","images/image11.svg");
        $('.quiz-txt').text("");
        $('.hint1').before("<label class='hint1_label'><input type='checkbox' id='check1' name='check'/>ヒント1</label>")
        check1 = document.getElementById("check1");
        check1.addEventListener('change', hint1);
    }else if(element.value=="place12"){
        $('.quiz-img').attr("src","images/image12.svg");
        $('.quiz-txt').text("");
        $('.hint1').before("<label class='hint1_label'><input type='checkbox' id='check1' name='check'/>ヒント1</label>")
        check1 = document.getElementById("check1");
        check1.addEventListener('change', hint1);
    }else if(element.value=="place13"){
        $('.quiz-img').attr("src","images/image13.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place14"){
        $('.quiz-img').attr("src","images/image14.svg");
        $('.quiz-txt').text("");
        $('.hint1').before("<label class='hint1_label'><input type='checkbox' id='check1' name='check'/>ヒント1</label>")
        check1 = document.getElementById("check1");
        check1.addEventListener('change', hint1);
    }else if(element.value=="place15"){
        $('.quiz-img').attr("src","images/image15.svg");
        $('.quiz-txt').text("");
        $('.hint1').before("<label class='hint1_label'><input type='checkbox' id='check1' name='check'/>ヒント1</label>")
        check1 = document.getElementById("check1");
        check1.addEventListener('change', hint1);
    }else if(element.value=="place16"){
        $('.quiz-img').attr("src","images/image16.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place17"){
        $('.quiz-img').attr("src","images/image17.svg");
        $('.quiz-txt').text("");
    }
}
function hint1(){
    if(element.value=="place1"){
        if (check1.checked){
            $('.hint1-img').attr("src","images/image1_1.svg");
            $('.hint2').before("<label class='hint2_label'><input type='checkbox' class='check2' id='check2' name='check'/>ヒント2</label>");
            check2 = document.getElementById("check2");
            check2.addEventListener('change', hint2);
        }else{
            $('.hint1-img').attr("src","");
            $('.hint2_label').remove();
        }
    }else if(element.value=="place3"){
        if (check1.checked){
            $('.hint1-img').attr("src","images/image3_1.svg");
        }else{
            $('.hint1-img').attr("src","");
        }
    }else if(element.value=="place4"){
        $('.quiz-img').attr("src","images/image4.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place5"){
        $('.quiz-img').attr("src","images/image5.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place6"){
        $('.quiz-img').attr("src","images/image6.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place7"){
        $('.quiz-img').attr("src","images/image7.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place8"){
        $('.quiz-img').attr("src","images/image8.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place10"){
        $('.quiz-img').attr("src","images/image10.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place11"){
        if (check1.checked){
            $('.hint1-img').attr("src","images/image11_1.svg");
            $('.hint2').before("<label class='hint2_label'><input type='checkbox' class='check2' id='check2' name='check'/>ヒント2</label>");
            check2 = document.getElementById("check2");
            check2.addEventListener('change', hint2);
        }else{
            $('.hint1-img').attr("src","");
            $('.hint2_label').remove();
        }
    }else if(element.value=="place12"){
        if (check1.checked){
            $('.hint1-img').attr("src","images/image12_1.svg");
            $('.hint2').before("<label class='hint2_label'><input type='checkbox' class='check2' id='check2' name='check'/>ヒント2</label>");
            check2 = document.getElementById("check2");
            check2.addEventListener('change', hint2);
        }else{
            $('.hint1-img').attr("src","");
            $('.hint2_label').remove();
        }
    }else if(element.value=="place13"){
        $('.quiz-img').attr("src","images/image13.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place14"){
        if (check1.checked){
            $('.hint1-img').attr("src","images/image14_1.svg");
            $('.hint2').before("<label class='hint2_label'><input type='checkbox' class='check2' id='check2' name='check'/>ヒント2</label>");
            check2 = document.getElementById("check2");
            check2.addEventListener('change', hint2);
        }else{
            $('.hint1-img').attr("src","");
            $('.hint2_label').remove();
        }
    }else if(element.value=="place15"){
        if (check1.checked){
            $('.hint1-img').attr("src","images/image15_1.svg");
        }else{
            $('.hint1-img').attr("src","");
        }
    }else if(element.value=="place16"){
        $('.quiz-img').attr("src","images/image16.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place17"){
        $('.quiz-img').attr("src","images/image17.svg");
        $('.quiz-txt').text("");
    }
}
function hint2(){
    if(element.value=="place1"){
        if (check2.checked){
            $('.hint2-img').attr("src","images/image1_2.svg");
        }else{
            $('.hint2-img').attr("src","");
        }
    }else if(element.value=="place3"){
        $('.quiz-img').attr("src","images/image3.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place4"){
        $('.quiz-img').attr("src","images/image4.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place5"){
        $('.quiz-img').attr("src","images/image5.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place6"){
        $('.quiz-img').attr("src","images/image6.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place7"){
        $('.quiz-img').attr("src","images/image7.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place8"){
        $('.quiz-img').attr("src","images/image8.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place10"){
        $('.quiz-img').attr("src","images/image10.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place11"){
        if (check2.checked){
            $('.hint2-img').attr("src","images/image11_2.svg");
        }else{
            $('.hint2-img').attr("src","");
        }
    }else if(element.value=="place12"){
        if (check2.checked){
            $('.hint2-img').attr("src","images/image12_2.svg");
        }else{
            $('.hint2-img').attr("src","");
        }
    }else if(element.value=="place13"){
        $('.quiz-img').attr("src","images/image13.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place14"){
        if (check2.checked){
            $('.hint2-img').attr("src","images/image14_2.svg");
        }else{
            $('.hint2-img').attr("src","");
        }
    }else if(element.value=="place15"){
        $('.quiz-img').attr("src","images/image15.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place16"){
        $('.quiz-img').attr("src","images/image16.svg");
        $('.quiz-txt').text("");
    }else if(element.value=="place17"){
        $('.quiz-img').attr("src","images/image17.svg");
        $('.quiz-txt').text("");
    }
}
$(document).ready(function(){
    const img = new Image();
    img.src = "https://rokushima.github.io/NYGquest/images/image6.png"
    const img1 = new Image();
    img1.src = "https://rokushima.github.io/NYGquest/images/image8.png"
    let element = document.getElementById('place');
    element.addEventListener('change', valueChange);
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
}

