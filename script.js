let string = "";
let buttons=document.querySelectorAll('.column');
Array.from(buttons).forEach((column)=>{
    column.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C' || e.target.innerHTML == 'AC' ){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})