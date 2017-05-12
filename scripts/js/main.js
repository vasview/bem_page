$(document).ready(function(){

  //email mask
  $('#mail').inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        cardinality: 1,
        casing: "lower"
      }
    }
  });


 var error_txt = 'Это поле нужно заполнить';

 $('.req').focusout(function(){
   if($(this).val() != ''){          
    $(this).removeClass('error').addClass('active');
    // $(this).css('background','#fff');
    // $(this).css('color', "#000");    
   }else{
    $(this).addClass('error').removeClass('active');    
   }
  }); 


 $('.btn').click(function(){
   var this_form = $(this).parents('form');
   var inp_req = $(this).parents('form').find('.req');

   //console.log(inp_req);
   
   count_error = 0
   inp_req.each(function(){
    if($(this).val()==''){
     $(this).addClass('error');
     $(this).attr("placeholder", error_txt);
     count_error += 1;     
    }    
   });

   if (count_error != 0) {
     return false 
    } else{
     this_form.submit();
    }

  });

});