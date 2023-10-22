import { series } from './data.js';
var seriesTable = document.getElementById("series");
var promedioElemento = document.getElementById("promedio");
mostrarSeries(series);
mostrarPromedio(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n     <td>").concat(serie.titulo, "</td>\n        <td>").concat(serie.plataforma, "</td>\n       <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
function promedio(series) {
    var temporadas = 0;
    for (var index = 0; index < series.length; index++) {
        var curso = series[index];
        temporadas += curso.temporadas;
    }
    return temporadas;
}
function mostrarPromedio(series) {
    var prom = promedio(series);
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Promedio por temporada: </b></td><td>".concat(prom, "</td>");
    promedioElemento.appendChild(trElement);
}
