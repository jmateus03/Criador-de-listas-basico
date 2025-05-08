const compras = document.getElementById("compras");
const btnAdd = document.getElementById("adicionar");
const btnRmv = document.getElementById("retirar");
const btnlimpar = document.getElementById("limpar");
const Lista = document.getElementById("LDC");
btnAdd.addEventListener("click" , ()=>{
    const texto = 
    compras.value.trim();
    if(texto !== ""){
        const item = 
        document.createElement("li");
        item.innerHTML = texto;
        Lista.appendChild(item);
        compras.value = " ";
    }
});
btnRmv.addEventListener("click" , ()=>{
    if (Lista.lastChild) {
        Lista.removeChild(Lista.lastChild);
    }
});
btnlimpar.addEventListener("click" , ()=>{
    Lista.innerHTML = "";
});

