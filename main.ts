import {Serie} from './Serie.js'
import {series} from './data.js'

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioElemento : HTMLElement = document.getElementById("promedio")!;

mostrarSeries(series);
mostrarPromedio(series);

function mostrarSeries(series:Serie[]) :void{
    let seriesTbody :HTMLElement =document.createElement("tbody");
    for (let serie of series)
    {
        let trElement:HTMLElement=document.createElement("tr");
        trElement.innerHTML=`<td>${serie.id}</td>
     <td>${serie.titulo}</td>
        <td>${serie.plataforma}</td>
       <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    }

    seriesTable.appendChild(seriesTbody);

}

function promedio(series:Serie[]):number{
        let temporadas:number = 0;
        for(let index = 0; index < series.length; index++){
            let curso = series[index];
            temporadas+=curso.temporadas; 
        }
        temporadas = temporadas / series.length;
        return temporadas;
}   

function mostrarPromedio(series:Serie[]):void{
    let prom:number=promedio(series);
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Promedio por temporada: </b></td><td>${prom}</td>`;
    promedioElemento.appendChild(trElement);
}
