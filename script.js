

function confirmation(){

    Correct=false;

    Name=document.getElementById("name").value;
    CardNum=document.getElementById("cardnum").value;
    ExpMonth=document.getElementById("exp-month").value;
    ExpYear=document.getElementById("exp-year").value;
    Cvc=document.getElementById("cvc").value;

    regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    //  remove spaces from number
    CardNum = CardNum.replace (/\s/g, "");



    //Name checker

    if(Name!=false){
        if(!regName.test(Name)){
            //wrong format
            document.getElementById("name-error").innerHTML="Wrong format";
            Correct=false;
            errorStyle("name");
            } 
            // correct
            else {
            Correct=true;
            clear("name-error");
            }
        } 

        // blank
        else {
        document.getElementById("name-error").innerHTML="Can't be blank";
        Correct=false;
        errorStyle("name");
        }



        //card checker

        if(CardNum!=false){
            if(CardNum.toString().length!=16){
                //wrong format
                document.getElementById("card-error").innerHTML="Wrong format";
                Correct=false;
                errorStyle("cardnum");
                } 
                // correct
                else {
                Correct=true;
                clear("card-error");
                }
            } 
    
            // blank
            else {
            document.getElementById("card-error").innerHTML="Can't be blank";
            Correct=false;
            errorStyle("cardnum");

            }



        //date checker    

        if(ExpMonth!=false){
            if(ExpMonth>0 && ExpMonth<=12){
                //correct
                Correct=true;
                clear("exp-error");
                } 
                
                else {
                //wrong format
                document.getElementById("exp-error").innerHTML="Wrong format";
                Correct=false;
                errorStyle("exp-month");

                }
            } 
    
            // blank
            else {
            document.getElementById("exp-error").innerHTML="Can't be blank";
            Correct=false;
            errorStyle("exp-month");
            }


          //year checker

          if(ExpYear!=false){
            if(ExpYear>0 && ExpYear<100){
                //correct
                Correct=true;
                clear("exp-error");
                } 
                
                else {
                //wrong format
                document.getElementById("exp-error").innerHTML="Wrong format";
                Correct=false;
                errorStyle("exp-year");
                }
            } 
    
            // blank
            else {
            document.getElementById("exp-error").innerHTML="Can't be blank";
            Correct=false;
            errorStyle("exp-year");
            }


            //check date
            ExpYear=2000+ExpYear;
            ExpDate = new Date(ExpYear, ExpMonth - 1); 
            CurDate = new Date();

            if(ExpDate>CurDate){
                Correct=true;
                clear("exp-error");
            }
                else{
                    Correct=false;
                    document.getElementById("exp-error").innerHTML="Expired";
                    errorStyle("exp-month");
                    errorStyle("exp-year");
                }



        // CVC checker

          if(Cvc!=false){
            if(Cvc>=100 && Cvc<=999){
                //correct
                Correct=true;
                clear("cvc-error");
                } 
                
                else {
                //wrong format
                document.getElementById("cvc-error").innerHTML="Wrong format";
                Correct=false;
                errorStyle("cvc");

                }
            } 
    
            // blank
            else {
            document.getElementById("cvc-error").innerHTML="Can't be blank";
            Correct=false;
            errorStyle("cvc");

            }
    

            if(Correct==true){
                    document.getElementById("interactive-box").innerHTML = `
                        <div class="accepted-hidden">
                            <img src="./images/icon-complete.svg">
                            <h1>Thank you!</h1>
                            <p>We've added your card details</p>
                        </div>

                        <div class="_btn">
                            <input type="button" id="confirm" name="confirm" value="Continue" onclick="">
                        </div>
    `;

            }
        
}


function clear(id){
    document.getElementById(id).innerHTML="";
    document.getElementById(id).style.borderColor=""
}




function errorStyle(id){
    document.getElementById(id).style.borderColor="hsl(0, 100%, 66%)";
}

