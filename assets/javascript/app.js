
$("#submit").on("click", function(){
  var score= 0;
console.log("Hi")
  //var radioValue = $("input[name='q1']:checked").val();

  $("input:radio[name=q11]:checked").each(function() { 
    score += parseInt($("input[name='q11']:checked").val());
  }); 
  $("input:radio[name=q12]:checked").each(function() { 
     score += parseInt($("input[name='q12']:checked").val());
  }); 
  $("input:radio[name=q12]:checked").each(function() { 
     score += parseInt($("input[name='q13']:checked").val());
  }); 
  $("input:radio[name=q12]:checked").each(function() { 
     score += parseInt($("input[name='q14']:checked").val());
  }); 
  $("input:radio[name=q12]:checked").each(function() { 
     score += parseInt($("input[name='q15']:checked").val());
  }); 
  $("input:radio[name=q12]:checked").each(function() { 
     score += parseInt($("input[name='q16']:checked").val());
  }); 
  $("input:radio[name=q12]:checked").each(function() { 
     score += parseInt($("input[name='q17']:checked").val());
  }); 
  $("input:radio[name=q12]:checked").each(function() { 
     score += parseInt($("input[name='q18']:checked").val());
  }); 
  $("input:radio[name=q12]:checked").each(function() { 
     score += parseInt($("input[name='q19']:checked").val());
  }); 
  $("input:radio[name=q12]:checked").each(function() { 
     score += parseInt($("input[name='q110']:checked").val());
  }); 
  
  
  $("#answer").text("Final Score is " + score) ;                
  console.log("final score" + score*100 + "%")
});
