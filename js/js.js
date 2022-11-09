class componente {
  constructor(cod, marca, modelo, precio, compatible, img) {
    this.codigo = cod;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.img = img;
    this.compatible = compatible;
    
  }
  subTotal(acu, producto) {
    acu = acu + acu + producto.precio;
    return acu;
  }
  existe(num) {
    return this.codigo == num;
  }
  esCompatible(Compatible) {
    return this.compatible == Compatible;
  }
}

//agrego los articulos
const procesadores = [
  new componente(
    "1001",
    "amd",
    "ryzen5",
    195,
    "amd",
    "../img/cpu/amd/ryzen5.png"
   
  ),
  new componente(
    "1002",
    "amd",
    "ryzen7",
    200,
    "amd",
    "../img/cpu/amd/ryzen7.png"
   
  ),
  new componente(
    "1003",
    "intel",
    "corei5",
    270,
    "intel",
    "../img/cpu/intel/core5.png"
    
  ),
  new componente(
    "1004",
    "intel",
    "corei7",
    280,
    "intel",
    "../img/cpu/intel/core7.png"
   
  ),
];

const motherboard = [
  new componente(
    "2001",
    "Asrock",
    "AA209",
    300,
    "amd",
    "../img/motherboard/amd/ASROCK.jpg",
   
  ),
  new componente(
    "2002",
    "BIOSTAR",
    "A320m Am4",
    300,
    "amd",
    "../img/motherboard/amd/BIOSTAR.jpg",
   
  ),
  new componente(
    "2003",
    "Gigabyte",
    "AA209",
    380,
    "intel",
    "img/motherboard/intel/4ef32c54_5-241x241.png",
   
  ),
  new componente(
    "2004",
    "AORUS",
    "AA209",
    480,
    "intel",
    "../img/motherboard/intel/aorus1.jpg"
    
  ),
];
const memorias = [
  new componente(
    "3001",
    "kingston",
    "ddr8-8gb",
    80,
    "amd-Intel",
    "../img/ram/kingstonbeast.jpg"
  ),
  new componente(
    "3002",
    "kingston",
    "ddr8-16gb",
    100,
    "amd-Intel",
    "../img/ram/Kingston-Fury-Beast-DDR5-RGB.webp"
  ),
];
const discos = [
  new componente(
    "4001",
    "SONY",
    "estado Solido 250gb",
    80,
    "amd-Intel",
    "../img/motherboard/disco/kingston 250.jpg"
  ),
  new componente(
    "4002",
    "kingston",
    "Estado Solido 500",
    150,
    "amd-Intel",
    "../img/motherboard/disco/kingston480.jpg"
  ),
];
const video = [
  new componente(
    "5003",
    "ASUS",
    "RADEON RX550",
    249,
    "amd",
    "../img/video/amd/rx-550.jpg"
  ),
  new componente(
    "5002",
    "BIOSTAR",
    "Dual Radeon Rx 6500",
    593,
    "amd",
    "../img/video/amd/rx6500.jpg"
  ),
  new componente(
    "5009",
    "GIGABYTE",
    "GeForce RTX 3060 Gaming",
    389,
    "intel",
    "../img/video/intel/3060.jpg"
  ),
];

const gabinetes = [
  new componente(
    "6002",
    "Nzxt",
    "H510 Elite 2",
    259,
    "amd,intel",
    "../img/gabinete/Nzxt H510.jpg"
  ),
  new componente(
    "6003",
    "Xigmatek",
    "Venom X Arctic E-atx 4",
    129,
    "amd,intel",
    "../img/gabinete/venom.jpg"
  ),
];
const monitores = [
  new componente(
    "7003",
    "LG ",
    "UltraGear 24GN600 ",
    249,
    "amd,intel",
    "../img/monitor/24GN600.jpg"
  ),
  new componente(
    "7002",
    "SAMSUMG",
    "F390 Series C24F390FH",
    593,
    "amd,intel",
    "../img/monitor/C24F390FH.jpg"
  ),
];
const teclados = [
  new componente(
    "8003",
    "COUGAR",
    " Core Sp",
    50,
    "amd,intel",
    "../img/teclado/Teclado-Mecanico-Cougar.webp"
  ),
  new componente(
    "8002",
    "KOLKE",
    "DKet-1203",
    25,
    "amd,intel",
    "../img/teclado/042020-O.jpg"
  ),
];
const ratones = [
  new componente(
    "9003",
    "MSI",
    "CLUTCH GM40",
    15,
    "amd,intel",
    "../img/raton/raton1.jpg"
  ),
  new componente(
    "9002",
    "IMice",
    "T96Gamer",
    10,
    "amd,intel",
    "../img/raton/raton2.webp"
  ),
];
let inventario = [
  {
    categoria: "motherboard",
    items: motherboard,
  },
  {
    categoria: "procesador",
    items: procesadores,
  },
  {
    categoria: "memoria",
    items: memorias,
  },
  {
    categoria: "almacenamiento",
    items: discos,
  },
  { categoria: "grafica", items: video },
  { categoria: "gabinete", items: gabinetes },
  { categoria: "monitor", items: monitores },
  { categoria: "teclado", items: teclados },
  { categoria: "raton", items: ratones },
];
//retorna un elemento por el codigo
function buscarC(comp, cod) {
  return comp.find((Comp) => Comp.existe(cod));
}



//ejecucion inicial

let componentes = document.querySelectorAll(".main__hardware__componente");
for (let componente of componentes) {
  componente.addEventListener("click", abreModal);
}
atualizarCarrito();

//carga la descripcion de un componente
function carga_componente(componente) {
  let main__modal__ofertas__item = document.createElement("div");
  main__modal__ofertas__item.className = "main__modal__ofertas__item";
  let main__modal__ofertas__item__titulo = document.createElement("h2");
  main__modal__ofertas__item__titulo.className =
    "main__modal__ofertas__item__titulo";
  main__modal__ofertas__item__titulo.innerHTML =
    componente.marca + " " + componente.modelo;
  main__modal__ofertas__item.append(main__modal__ofertas__item__titulo);
  let img = document.createElement("img");
  img.src = componente.img;
  img.addEventListener("click",function(){
    let texto="<li>SORETES DE PU</li>";
for(let i=0;i<10;i++)
texto+="<li>"+i+"</li>"

    Swal.fire({
      title: '<strong>'+componente.marca+" "+componente.modelo+'</strong>',
      icon: 'componente.img',
      html:
      '<div class="swal2-html">'+
        '<img src="'+img.src+'">' +
        '<ul>'
        +texto+
        
        
        
        
        '</ul> ' +
        
        '</div>',
        confirmButtonText:
    'OKAY',
  
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      
    })





  })
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
  botonAgregar.setAttribute("id", componente.codigo);
  botonAgregar.innerHTML = "Agregar";
  botonAgregar.addEventListener("click", agregarComp);
  main__modal__ofertas__item__precio.append(botonAgregar);
 
  return main__modal__ofertas__item;
}
//cuando apreto el boton agregar (seleccionar componente)
function agregarComp(e) {
  document.querySelector(".main__modal").remove();
  let articulo = buscarEnInventario(e.target.id);
  localStorage.setItem(articulo.categoria, JSON.stringify(articulo)); //agrego el articulo al LocalStorage
  atualizarCarrito();
}
//actualizo carrito con los datos que hay en el localStorage
function atualizarCarrito() {
  if (document.querySelector(".main__carrito__table") != null)
    document.querySelector(".main__carrito__table").remove();
  tabla = document.createElement("table");
  tabla.className = "main__carrito__table";
  document.querySelector(".main__carrito__componentes").append(tabla);
  let total = 0;

  for (let i = 0; i < localStorage.length; i++) {
    let articulo = JSON.parse(localStorage.getItem(localStorage.key(i)));
    nuevaFila=cargarEnTabla(articulo);
    
    tabla.append(nuevaFila)
    total = articulo.item.precio + total;
  }
  mostrarTotales(total);
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
function cargarEnTabla(articulo) {
  let nuevaFila = document.createElement("tr");
  nuevaFila.innerHTML = `<td>${articulo.categoria}</td><td><img class="main__carrito__table__img" src="${articulo.item.img}" alt="" class="header__banner__logo__img" id="logo0"></td><td>${articulo.item.marca} ${articulo.item.modelo}</td><td>${articulo.item.precio} US$</td>`;
  nuevaCelda = document.createElement("td");

  botonEliminar = document.createElement("button");
  botonEliminar.addEventListener("click", function (e) {
    localStorage.removeItem(articulo.categoria);
    atualizarCarrito();
  });
  botonEliminar.innerHTML = "<img src='../img/papelera.png'>";
  botonEliminar.className = "botonQuitar";
  nuevaCelda.append(botonEliminar);
  
  tiempo=tiempo+1;
  nuevaFila.append(nuevaCelda);
  
  return nuevaFila;
}

//busca un elemento en el inventario por numerodeCodigo
function buscarEnInventario(num) {
  for (comp of inventario) {
    categoria = comp.categoria;
    comP = buscarC(comp.items, num);
    if (comP != undefined) {
      let articulo = { categoria: categoria, item: comP };
      return articulo;
    }
  }
}
//verifico la compatibilidad de lo que hay en memoria ya sea motherboard ,procesado, o grafica
function verifico_compatibilidad(){
  let tecnologia="all";
  if(localStorage.getItem('motherboard')!=null)
  tecnologia=JSON.parse(localStorage.getItem('motherboard')).item.compatible;
  else if(localStorage.getItem('procesador')!=null)
  tecnologia=JSON.parse(localStorage.getItem('procesador')).item.compatible;
  else if(localStorage.getItem('grafica')!=null)
  tecnologia=JSON.parse(localStorage.getItem('grafica')).item.compatible;
  return tecnologia;
}


//abre la ventana Modal con listado de articulos dada una categoria
function abreModal(e) {
  categoria = e.target.id;
  if (e.target.className == "") categoria = e.target.innerHTML;
  let main__modal = document.createElement("div");
  let main__modal__barraT = document.createElement("div");
  let main__modal__cerrar = document.createElement("button");
  let h2 = document.createElement("h2");
  let main__modal__ofertas = document.createElement("div");
  main__modal__ofertas.className = "main__modal__ofertas";
  h2.className = "main__modal__categoria";
  h2.innerHTML = categoria;
  main__modal__cerrar.className = "main__modal__cerrar";
  main__modal__cerrar.innerHTML = "X";
  main__modal__barraT.className = "main__modal__barraT";
  main__modal.className = "main__modal";
  main__hardware = document.querySelector(".main__hardware");
  main__modal.style.display = "flex";
  main__hardware.append(main__modal);
  main__modal.append(main__modal__barraT);
  main__modal__barraT.append(h2);
  main__modal__barraT.append(main__modal__cerrar);
  main__modal__cerrar.addEventListener("click", function (e) {
    e.target.parentNode.parentNode.remove();
  });

  main__modal.append(main__modal__ofertas);
  let comp = inventario.filter(
    (item) => item.categoria == categoria.toLowerCase()
  );
  

if(categoria.toLowerCase()=='motherboard' ||categoria.toLowerCase()=='procesador'||categoria.toLowerCase()=="grafica" )
tecnologia=verifico_compatibilidad();
 else
 tecnologia="amd,intel"

 if(tecnologia!="all" && tecnologia!="amd,intel")
  cat=comp[0].items.filter(
    (item) =>item.compatible==tecnologia);
  else
  cat=comp[0].items;
  
 
  //let filter=comp[0].filter((item) => item.categoria == categoria.toLowerCase());
  //console.log(filter);
  for (let componente of cat) {
      item = carga_componente(componente);
    main__modal__ofertas.append(item);
  }
}
