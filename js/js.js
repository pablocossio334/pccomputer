
class componente{
    constructor(cod,marca,modelo,precio,compatible){
        this.codigo=cod;
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
        this.compatible=compatible;

    }
    subTotal(acu,producto)
    {
    
    acu=acu+acu+producto.precio;
    return acu;
    }
    existe(num){
        return this.codigo==num;
    }
    esCompatible(Compatible){
    return this.compatible==Compatible
    }
  
}

//agrego los articulos 
const procesadores=[new componente("1001","amd","ryzen5",195,"amd"),
                new componente("1002","amd","ryzen7",200,"amd"),
                new componente("1003","intel","corei5",270,"intel"),
                new componente("1004","intel","corei7",280,"intel")];


const motherboard=[new componente("2O001","Asrock","AA209",300,"amd"),
                new componente("2002","BIOSTAR","AAE",300,"amd"),
                new componente("2003","Gigabyte","AA209",380,"intel"),
                new componente("2004","AORUS","AA209",480,"intel"),
                ];
const memorias=[new componente("3001","kingston","ddr8-8gb",80,"amd-Intel"),
            new componente("3002","kingston","ddr8-16gb",100,"amd-Intel")
            ];
const discos=[new componente("4001","SONY","estado Solido 250gb",80,"amd-Intel"),
            new componente("4002","kingston","Estado Solido 500",150,"amd-Intel")
        ];


//retorna un elemento por el codigo
function buscarC(comp,cod){
return  comp.find(Comp => Comp.existe(cod));
}

//filtra elementos por compatibilidad
function filtraC(comp,compatible){
return comp.filter(Comp => Comp.esCompatible(compatible));

}
//Calcula el total dado un arreglo con articulos
function subTotal(acu,prod)
{
acu=acu+prod.precio;
return acu;
}

function calcula_total(productos)
{
console.log(productos);
const suma = productos.reduce(subTotal,0);
return suma;
}

function mostrar_item(item){
    return `codigo:${item.codigo} ${item.marca} ${item.modelo} precio ${item.precio}`+"US$ \n";
}

/*MUESTRA OPCIONES DE ARTICULOS*/
function mostrar_opciones(comp){
let codigo=prompt("OPCIONES DISPONIBLES\n"+comp.map(mostrar_item)+"escriba codigo de el item deseado");
return codigo;
}
//selecciono componente por codigo en caso de no existir sigo pidiendolo
function agrego_comp(componentes)
{let op;
    do{
        op=mostrar_opciones(componentes);
    }while(buscarC(componentes,op)==undefined)
return buscarC(componentes,op);
}

//ejecucion 1001
let armoPc=[];
armoPc.push(agrego_comp(procesadores));
armoPc.push(agrego_comp(filtraC(motherboard,armoPc[0].compatible)));
armoPc.push(agrego_comp(memorias));
armoPc.push(agrego_comp(discos));


let total=calcula_total(armoPc);
let subtotal=total/1.22;
1let iva=total-subtotal;
alert("RESUMEN DE LA COMPRA\n"+ armoPc.map(mostrar_item)+"Subtotal "+parseInt(subtotal)+"US$\niva 22%  "+parseInt(iva)+"US$\nTOTAL:"+total+"us$");
console.log(armoPc);






