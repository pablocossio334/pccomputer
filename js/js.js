
//main
let componentes = document.querySelectorAll(".main__hardware__componente");
for (let componente of componentes) {
  componente.addEventListener("click", function(e){
    filtrar_Items(componente.id)});
}
atualizarCarrito();

//filtra componentes por categoria desde un archivo .json
async function filtrar_Items(categoria){
  const res= await fetch('productos.json');
  const data=await res.json();
 
  let datosFiltradosCat=data.filter(dato=>dato.categoria==categoria);
  
 
 if(categoria=="motherboard"||categoria=="grafica"||categoria=="procesador")
  if(verifico_compatibilidad()=="amd"||verifico_compatibilidad()=="intel")
    {
      let datosFiltradosCatC=datosFiltradosCat[0].items.filter(dato=>dato.compatible==verifico_compatibilidad());
      datosFiltradosCat[0].items=datosFiltradosCatC
    }
window.scroll(0,0);
abreModal(datosFiltradosCat);
}



//carga datos de un componente
function carga_componente(componente,categoria) {
  
  let main__modal__ofertas__item = document.createElement("div");
  main__modal__ofertas__item.className = "main__modal__ofertas__item";
  let main__modal__ofertas__item__titulo = document.createElement("h2");
  main__modal__ofertas__item__titulo.className ="main__modal__ofertas__item__titulo";
  main__modal__ofertas__item__titulo.innerHTML =
    componente.marca + " " + componente.modelo;
  main__modal__ofertas__item.append(main__modal__ofertas__item__titulo);
  let img = document.createElement("img");
  img.src = componente.img;
  main__modal__ofertas__item.append(img);
  let main__modal__ofertas__item__precio = document.createElement("div");
  main__modal__ofertas__item__precio.className ="main__modal__ofertas__item__precio";
  let precio__articulo = document.createElement("h3");
  precio__articulo.className = "precio__articulo";
  precio__articulo.innerHTML = "precio: " + componente.precio + "US$";
  main__modal__ofertas__item__precio.append(precio__articulo);
  main__modal__ofertas__item.append(main__modal__ofertas__item__precio);
  botonAgregar = document.createElement("button");
  botonAgregar.className = "bottonAgregar";
  botonAgregar.innerHTML = "Agregar";
  botonAgregar.addEventListener("click",function() {agregarComp(componente,categoria)});
  main__modal__ofertas__item__precio.append(botonAgregar);
  return main__modal__ofertas__item;
}
//cuando apreto el boton agregar (seleccionar componente)
function agregarComp(componente,categoria) {
document.querySelector(".main__modal__ofertas").remove();
document.querySelector(".main__modal__barraT").remove();
document.querySelector(".main__modal").style.display="none";
console.log("zorete");
localStorage.setItem(categoria, JSON.stringify(componente)); //agrego el articulo al LocalStorage
  atualizarCarrito();
}
//actualizo carrito con los datos que hay en el localStorage
function atualizarCarrito() {
  let total=0;
  mostrarTotales(total);
  if (document.querySelector(".main__carrito__table") != null)
  document.querySelector(".main__carrito__table").remove();
  tabla = document.createElement("table");
  tabla.className = "main__carrito__table";
  document.querySelector(".main__carrito__componentes").append(tabla);
  for (let i = 0; i < localStorage.length; i++) {
    let segundos=i*150;
      setTimeout(()=>{
      categoria=localStorage.key(i);
      articulo =JSON.parse(localStorage.getItem(localStorage.key(i)));
      nuevaFila=cargarEnTabla(articulo,categoria);
      document.querySelector(".main__carrito__table").append(nuevaFila);
      total=total+articulo.precio;
      mostrarTotales(total)
    },segundos);
    
  }
  
}
//actualizo los Totales en pantalla
function mostrarTotales(total) {
  let subTotal = parseFloat(total / 1.21).toFixed(2);
  let iva = parseFloat(total - subTotal).toFixed(2);
  let inputSubototal = document.getElementById("subTotal");
  let inputIva = document.getElementById("iva");
  let inputTotal = document.getElementById("total");
  inputSubototal.value = subTotal + " US$";
  inputIva.value = iva + " US$";
  inputTotal.value = total + " US$";
}
var tiempo=0;
//carga un articulo en la tabla del carrito
function cargarEnTabla(articulo,categoria) {
  let nuevaFila = document.createElement("tr");
  nuevaFila.innerHTML = `<td>${categoria}</td><td><img class="main__carrito__table__img" src="${articulo.img}" alt="" class="header__banner__logo__img" id="logo0"></td><td>${articulo.marca} ${articulo.modelo}</td><td>${articulo.precio} US$</td>`;
  nuevaCelda = document.createElement("td");
  botonEliminar = document.createElement("button");
  botonEliminar.addEventListener("click", function (e) {
  localStorage.removeItem(categoria);
    atualizarCarrito();
  });
  botonEliminar.innerHTML = "<img src='../img/papelera.png'>";
  botonEliminar.className = "botonQuitar";
  nuevaCelda.append(botonEliminar);
  tiempo=tiempo+1;
  nuevaFila.append(nuevaCelda);
  return nuevaFila;
}


//verifico la compatibilidad de lo que hay en localstorage ya sea motherboard ,procesado, o grafica
function verifico_compatibilidad(){
  let tecnologia="all";
  if(localStorage.getItem('motherboard')!=null)
  tecnologia=JSON.parse(localStorage.getItem('motherboard')).compatible;
  else if(localStorage.getItem('procesador')!=null)
  tecnologia=JSON.parse(localStorage.getItem('procesador')).compatible;
  else if(localStorage.getItem('grafica')!=null)
  tecnologia=JSON.parse(localStorage.getItem('grafica')).compatible;
  return tecnologia;
}


//abre la ventana Modal con listado de articulos dada una categoria
function abreModal(items) {

  categoria=items[0].categoria;
  let comp = items;
  //si ya hay una categoria cargada la cierro
  if(document.querySelector(".main__modal__ofertas")!=null)
  {
    document.querySelector(".main__modal__ofertas").remove();
    document.querySelector(".main__modal__barraT").remove();
  }
  let main__modal = document.querySelector(".main__modal");

  let main__modal__barraT = document.createElement("div");
  let main__modal__cerrar = document.createElement("button");
  let h2 = document.createElement("h2");
  let main__modal__ofertas = document.createElement("div");
  main__modal__ofertas.className = "main__modal__ofertas";
  h2.className = "main__modal__categoria";
  h2.innerHTML = items[0].categoria;
  main__modal__cerrar.className = "main__modal__cerrar";
  main__modal__cerrar.innerHTML = "X";
  main__modal__barraT.className = "main__modal__barraT";
  main__modal.className = "main__modal";
  main__hardware = document.querySelector(".main__hardware");
  main__modal.style.display = "flex";
  main__modal.append(main__modal__barraT);
  main__modal__barraT.append(h2);
  main__modal__barraT.append(main__modal__cerrar);
  main__modal__cerrar.addEventListener("click", function (e) {
    main__modal = document.querySelector(".main__modal").style.display="none";
    document.querySelector(".main__modal__ofertas").remove();
    document.querySelector(".main__modal__barraT").remove();
  });
  main__modal.append(main__modal__ofertas);
  cat=comp[0].items;
  for (let componente of cat) {
      item = carga_componente(componente,categoria);
    main__modal__ofertas.append(item);
  }
}
