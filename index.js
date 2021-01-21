
var res="";
function display1(num){

    

    if(num==="1"){

        res=res+num;
    }
    else if(num==="2"){
        res=res+num;
    }
    else if(num==="3"){

        res=res+num;
    }else if(num==="4"){

        res=res+num;
    }else if(num==="5"){

        res=res+num;
    }else if(num==="6"){

        res=res+num;
    }else if(num==="7"){

        res=res+num;
    }
    else if(num==="8"){

        res=res+num;
    }else if(num==="9"){

        res=res+num;
    }
    else if(num==="0"){

        res=res+num;
    }
    document.getElementById("calling").innerText=res;
}

    
    function call(){

        if(res.length>11){

            document.getElementById("calling").innerText="Invalid Number"+res;
        }
        else{
            document.getElementById("calling").innerText="calling..."+res;

        }
      
    }
   






