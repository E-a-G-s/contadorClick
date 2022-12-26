let btn = document.getElementById("btnClick");
let contadorClick = document.getElementById("contadorClick");
let btnClickReset = document.getElementById("btnClickReset");
let contador = 0;
contadorClick.textContent = 0;

btn.onclick = () => {
  contador++;
  contadorClick.textContent = contador;
};

btnClickReset.onclick = () => {
  contadorClick.textContent = 0;
};
