
class componente{
    constructor(marca,modelo,precio,compatible){
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
        this.compatible=compatible;

    }
}


let procesadores=[new componente("amd","ryzen5",195,"amd"),
                new componente("amd","ryzen7",200,"amd"),
                new componente("intel","corei5",270,"intel"),
                new componente("intel","corei7",280,"intel")];


let motherboard=[new componente("Asrock","AA209",300,"amd"),
                new componente("BIOSTAR","AAE",300,"amd"),
                new componente("Gigabyte","AA209",380,"intel"),
                new componente("AORUS","AA209",480,"intel"),
                ];
let memorias=[new componente("kingston","ddr8-8gb",80,"amd-Intel"),
            new componente("kingston","ddr8-16gb",100,"amd-Intel")
            ];
let discos=[new componente("SONY","estado Solido 250gb",80,"amd-Intel"),
            new componente("kingston","Estado Solido 500",150,"amd-Intel")
        ];
function mostrar_opciones(comp){
    let texto="\n";
    for(let i=0;i<comp.length;i++)
    {
    texto+="opc"+ i+")-"+comp[i].marca+"-"+comp[i].modelo+"\n";
    
}
let opcion=prompt("cual desea:"+texto);
    return opcion;
}
function calculaTotal(pc){
let precioT=0;

console.log("\n\n==========================")
for(let i=0;i<pc.length;i++){
    precioT=parseInt(pc[i].precio)+precioT;
console.log(i+"--"+pc[i].marca+"-"+pc[i].modelo+"-"+pc[i].precio+"US$");
}
iva=precioT*0.22;
subtotal=precioT-iva;
alert("sub-total es:"+subtotal+"US$\n"+"iva 22%:"+iva+"US$\n"+"TOTAL:"+precioT+"US$");



}

let computadora=[];
let op=0;
console.log("ARMANDO TU COMPUTADORA");

op=mostrar_opciones(procesadores);
computadora.push(procesadores[op]);

op=mostrar_opciones(motherboard);
computadora.push(motherboard[op]);

op=mostrar_opciones(memorias);
computadora.push(memorias[op]);

op=mostrar_opciones(discos);
computadora.push(discos[op]);
calculaTotal(computadora);
