function display(num) {
    textbox.value += num
  
}

function ac() {
    textbox.value = ""
}

function back() {
    textbox.value =  textbox.value.slice(0,-1)
}

function equal() {
    try{
    textbox.value = eval(textbox.value)
}
catch (error){
    textbox.value = 'Error'
    setTimeout(() => {
       textbox.value="" 
    },1000);
}
}