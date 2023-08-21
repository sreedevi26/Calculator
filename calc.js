function displaydata(data){
    txt.value+=data
}
function ac(){
    txt.value=""
}
function oper(){
    try {
        op = txt.value
        txt.value=eval(op) 
    } catch (error) {
        txt.value="Invalid!!!!!!!"
    }
}
function backspace(){
        data=txt.value
        txt.value=data.slice(0,-1)
    }