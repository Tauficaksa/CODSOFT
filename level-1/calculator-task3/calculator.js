// var value = document.getElementById("1");
// var value = document.getElementById("1");
var screen = document.getElementById("ans");
var strings ="";
function display(value){
    screen.textContent += value;
    strings += value.toString();
    // console.log(value);
    // console.log(strings);
}



function displaynone(){
    screen.textContent ="";
    strings = "";
}

function displayans(){
    
    let i;

    let a = "";
    let b = "";
    let index;

    

    if("/*-+.".includes(strings.charAt(0)) )
    {
        screen.textContent ="invalid  input";
        strings="";
    }
    else{
        for(i=0;i<strings.length;i++){
            if("/*-+".includes(strings.charAt(i))== 0){
                a +=strings.charAt(i)
                // console.log(a);
            }
            else if("/*-+".includes(strings.charAt(i))== 1){
                index = i;
                break;
            }
        }

        for(i=index+1;i<strings.length;i++){
            if("/*-+".includes(strings.charAt(i))== 0){
                b +=strings.charAt(i)
            }
            else if("/*-+".includes(strings.charAt(i))== 1){
                screen.textContent ="invalid - one optration at one time ";
                strings="";
                break;
            }
        }

        // console.log("a = "+a);
        // console.log("b = "+b);
        // console.log("oparation = " + strings.charAt(index));
        

        let number1 = Number(a);
        let number2 = Number(b);
        let result;

        if(strings.charAt(index)=='/')
        {
            result = number1/number2;
            displaynone();
            display(result);
        }
        if(strings.charAt(index)=='*')
        {
            result = number1*number2;
            displaynone();
            display(result);
        }
        if(strings.charAt(index)=='-')
        {
            result = number1-number2;
            displaynone();
            display(result);
        }
        if(strings.charAt(index)=='+')
        {
            result = number1+number2;
            displaynone();
            display(result);
        }
    }
    

}

