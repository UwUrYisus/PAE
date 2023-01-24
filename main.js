function inicioReloj(){
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    ap = (hr<12)? "<span>A.M</span>": "<span>P.M</span>";
    hr = (hr==0)? hr-112:hr;

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("hora").innerHTML=hr;
    document.getElementById("minutos").innerHTML=min;
    document.getElementById("segundos").innerHTML=sec;
    document.getElementById("ampm").innerHTML=ap;

    var time = setTimeout(function(){inicioReloj()}, 500);


}

function checkTime(i){
    if (i<10){
        i="0"+i;
    }

    return i;
}
let mostrarFecha = document.getElementById('fecha');

let fecha = new Date ();


let diaSemana = ['Domingo', 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
console.log(diaSemana[fecha.getDay()]);

let mesAnyo=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre', 'Dciembre'];
console.log(mesAnyo[fecha.getMonth()]);

mostrarFecha.innerHTML= `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} de ${fecha.getFullYear()}`;
