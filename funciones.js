function mostrarFormulario() {
    const calculo = document.getElementById("calculo").value;
    const formulario = document.getElementById("formulario");
    formulario.innerHTML = ""; // Limpiar formulario anterior

    if (calculo === "puntoEquilibrio") {
        formulario.innerHTML = `
            <h2>Punto de Equilibrio</h2>
            <input type="number" id="costoFijo" placeholder="Costo Fijo" required>
            <input type="number" id="precioVenta" placeholder="Precio de Venta" required>
            <input type="number" id="costoVariable" placeholder="Costo Variable" required>
            <button onclick="calcularPuntoEquilibrio()">Calcular</button>
            <p id="resultado"></p>
        `;
    } else if (calculo === "eficiencia") {
        formulario.innerHTML = `
            <h2>Eficiencia de Línea</h2>
            <input type="number" id="produccionReal" placeholder="Producción Real" required>
            <input type="number" id="produccionTeorica" placeholder="Producción Teórica" required>
            <button onclick="calcularEficiencia()">Calcular</button>
            <p id="resultado"></p>
        `;
    } else if (calculo === "roi") {
        formulario.innerHTML = `
            <h2>ROI</h2>
            <input type="number" id="ganancia" placeholder="Ganancia" required>
            <input type="number" id="inversion" placeholder="Inversión" required>
            <button onclick="calcularROI()">Calcular</button>
            <p id="resultado"></p>
        `;
    } else if (calculo === "costoUnitario") {
        formulario.innerHTML// JavaScript Document