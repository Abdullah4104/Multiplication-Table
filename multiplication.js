document.body.style.backgroundColor=('lightblue')
    let input1=document.getElementById('input1')
    let input2=document.getElementById('input2')
    let display=document.getElementById('display')
    
    function enter(){
    display.innerHTML=''
        
    }
    function generate(){
        for(let i=Number((input1.value)); i<=Number((input2.value)); i++){
            let div=document.createElement('div')
        for(let a=1; a<=12; a++){
            
        let answer=(i+' x ' + a+' = '+ i*a +'<br>');
        div.innerHTML+=answer; 
        display.appendChild(div)  
        console.log(div);
        
    } 
    }
    if ((input1.value.length==1 && input2.value.length>=2)) {   
            }
            else if(input1.value>input2.value){
                alert('Invalid input')  
            }
    }