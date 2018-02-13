/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
   $(this).parent().fadeOut(400,function(){
       $(this).remove();
   });
   event.stopPropagation();
});

$(".fa-plus-circle").click(function(){
    $("#input_container").fadeToggle();
});


$("#event").keypress(function(event){
    if(event.which===13){
        var todoText=$(this).val();
        $(this).val("");
        $("ul").append("<li> <i class='fa fa-circle-o'></i> " + todoText+"<span><i class='fa fa-trash'></i></span></li>")
    }
});

 $(function(){
    $ ("#datepicker").datepicker({
        firstDay: 1,
        changeMonth: true,
        changeYear: true,
        yearRange: "-10:+20",
    });
     $('.fa-calendar').click(function() {
         $("#datepicker").focus();
 })
  });

