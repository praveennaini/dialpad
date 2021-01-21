
var res="";
// function display1(num){

    

//     if(num==="1"){

//         res=res+num;
//     }
//     else if(num==="2"){
//         res=res+num;
//     }
//     else if(num==="3"){

//         res=res+num;
//     }else if(num==="4"){

//         res=res+num;
//     }else if(num==="5"){

//         res=res+num;
//     }else if(num==="6"){

//         res=res+num;
//     }else if(num==="7"){

//         res=res+num;
//     }
//     else if(num==="8"){

//         res=res+num;
//     }else if(num==="9"){

//         res=res+num;
//     }
//     else if(num==="0"){

//         res=res+num;
//     }
//     document.getElementById("calling").innerText=res;
// }

    
//     function call(){

//         if(res.length>11){

//             document.getElementById("calling").innerText="Invalid Number"+res;
//         }
//         else{
//             document.getElementById("calling").innerText="calling..."+res;

//         }
      
//     }
   


function display1(str){
    switch(str){  
        case "1":  
        res=res+str;  
        break; 
        case "1":  
        res=res+str;  
        break; 
        case "2":  
        res=res+str;  
        break; 
        case "3":  
        res=res+str;  
        break; 
        case "4":  
        res=res+str;  
        break; 
        case "5":  
        res=res+str;  
        break; 
        case "6":  
        res=res+str;  
        break; 
        case "7":  
        res=res+str;  
        break; 
        case "8":  
        res=res+str;  
        break; 
        case "9":  
        res=res+str;  
        break; 
        case "0":  
        res=res+str;  
        break; 
        
      
        
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
       
        function deleteKey(num){

            res=res.substring(0,res.length-1);
            document.getElementById("calling").innerText=res;
        }

