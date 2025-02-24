function convertirPolaresARectangulares() {
    const r = parseFloat(document.getElementById('r').value);
    const theta = parseFloat(document.getElementById('theta').value);

    if (isNaN(r) || isNaN(theta)) {
        document.getElementById('resultadoPolares').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }
    [xx,yy] =convertir2PolaresARectangulares(r, theta)

 
    document.getElementById('resultadoPolares').innerText = `Coordenadas Rectangulares: X = ${xx.toFixed(2)}, Y = ${yy.toFixed(2)}`;
}
function convertir2PolaresARectangulares(r,theta){
    const thetaRad = theta * (Math.PI / 180);
    
    // Convertir coordenadas polares a rectangulares
    const x = r * Math.cos(thetaRad);
    const y = r * Math.sin(thetaRad);
    return[x,r];


}
function convertirRectangularesAPolares() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    if (isNaN(x) || isNaN(y)) {
        document.getElementById('resultadoRectangulares').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }

    // Convertir coordenadas rectangulares a polares
    const r = Math.sqrt(x * x + y * y);
    const thetaRad = Math.atan2(y, x);
    const theta = thetaRad * (180 / Math.PI); // Convertir θ de radianes a grados

    document.getElementById('resultadoRectangulares').innerText = `Coordenadas Polares: Radio (r) = ${r.toFixed(2)}, Ángulo (θ) = ${theta.toFixed(2)} grados`;
}