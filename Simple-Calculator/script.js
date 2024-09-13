const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const result = document.getElementById("result");



function inputPresenceCheck(){
    if (input1.value===""||input2.value===""){
        alert("Please enter a value")
    }
    result.textContent = 0;
end  
}

    function addition(){
 
        result.textContent = Number(input1.value) + Number(input2.value)
    }
    function subtract(){
     
        result.textContent = Number(input1.value) - Number(input2.value)
    }
    function multiplication(){
     
        result.textContent = Number(input1.value) * Number(input2.value)
    }
    function division(){
     
        result.textContent = (Number(input1.value) / Number(input2.value)).toFixed(2)
    }


    

    document.getElementById("myButton").addEventListener("click", function() {
        // You can dynamically determine the value based on your logic
        var onClickValue = "caseTwo";
      
        switch (onClickValue) {
          case "caseOne":
            caseOne();
            break;
      
          case "caseTwo":
            caseTwo();
            break;
      
          case "caseThree":
            caseThree();
            break;
      
          default:
            console.log("Default case");
        }
      });