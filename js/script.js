let cel = document.getElementById('cel');
let far = document.getElementById('far');

cel.addEventListener('input',function(){
    let c = this.value;
    f = (c * 9/5) + 32;
    if(!Number.isInteger(f)){
        f = f.toFixed(1)
    }
    far.value = f;
    
})

far.addEventListener('input',function(){
    let f = this.value;
    c = (f - 32) * 5/9 
    if(!Number.isInteger(c)){
        c = c.toFixed(1)
    }
    cel.value = c;

})