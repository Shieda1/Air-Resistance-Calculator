// https://calculator.swiftutors.com/air-resistance-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const dragForceRadio = document.getElementById('dragForceRadio');
const dragCoefficientRadio = document.getElementById('dragCoefficientRadio');
const fluidsDensityRadio = document.getElementById('fluidsDensityRadio');
const crosssectionalAreaPerpendiculartoFlowRadio = document.getElementById('crosssectionalAreaPerpendiculartoFlowRadio');
const objectsVelocityRadio = document.getElementById('objectsVelocityRadio');

let dragForce;
let dragCoefficient = v1;
let fluidsDensity = v2;
let crosssectionalAreaPerpendiculartoFlow = v3;
let objectsVelocity = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

dragForceRadio.addEventListener('click', function() {
  variable1.textContent = '(CD) Drag Coefficient';
  variable2.textContent = '(ρ) Fluid\'s Density (kg/m³)';
  variable3.textContent = '(A) Cross-sectional Area Perpendicular to Flow (m²)';
  variable4.textContent = '(V) Object\'s Velocity (m/s)';
  dragCoefficient = v1;
  fluidsDensity = v2;
  crosssectionalAreaPerpendiculartoFlow = v3;
  objectsVelocity = v4;
  result.textContent = '';
});

dragCoefficientRadio.addEventListener('click', function() {
  variable1.textContent = '(FD) Drag Force (N)';
  variable2.textContent = '(ρ) Fluid\'s Density (kg/m³)';
  variable3.textContent = '(A) Cross-sectional Area Perpendicular to Flow (m²)';
  variable4.textContent = '(V) Object\'s Velocity (m/s)';
  dragForce = v1;
  fluidsDensity = v2;
  crosssectionalAreaPerpendiculartoFlow = v3;
  objectsVelocity = v4;
  result.textContent = '';
});

fluidsDensityRadio.addEventListener('click', function() {
  variable1.textContent = '(FD) Drag Force (N)';
  variable2.textContent = '(CD) Drag Coefficient';
  variable3.textContent = '(A) Cross-sectional Area Perpendicular to Flow (m²)';
  variable4.textContent = '(V) Object\'s Velocity (m/s)';
  dragForce = v1;
  dragCoefficient = v2;
  crosssectionalAreaPerpendiculartoFlow = v3;
  objectsVelocity = v4;
  result.textContent = '';
});

crosssectionalAreaPerpendiculartoFlowRadio.addEventListener('click', function() {
  variable1.textContent = '(FD) Drag Force (N)';
  variable2.textContent = '(CD) Drag Coefficient';
  variable3.textContent = '(ρ) Fluid\'s Density (kg/m³)';
  variable4.textContent = '(V) Object\'s Velocity (m/s)';
  dragForce = v1;
  dragCoefficient = v2;
  fluidsDensity = v3;
  objectsVelocity = v4;
  result.textContent = '';
});

objectsVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(FD) Drag Force (N)';
  variable2.textContent = '(CD) Drag Coefficient';
  variable3.textContent = '(ρ) Fluid\'s Density (kg/m³)';
  variable4.textContent = '(A) Cross-sectional Area Perpendicular to Flow (m²)';
  dragForce = v1;
  dragCoefficient = v2;
  fluidsDensity = v3;
  crosssectionalAreaPerpendiculartoFlow = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(dragForceRadio.checked)
    result.textContent = `Drag Force = ${computeDragForce().toFixed(2)} N`;

  else if(dragCoefficientRadio.checked)
    result.textContent = `Drag Coefficient = ${computeDragCoefficient().toFixed(2)}`;

  else if(fluidsDensityRadio.checked)
    result.textContent = `Fluid's Density = ${computeFluidsDensity().toFixed(2)} kg/m³`;

  else if(crosssectionalAreaPerpendiculartoFlowRadio.checked)
    result.textContent = `Cross-sectional Area Perpendicular to Flow = ${computeCrosssectionalAreaPerpendiculartoFlow().toFixed(2)} m²`;

  else if(objectsVelocityRadio.checked)
    result.textContent = `Object's Velocity = ${computeObjectsVelocity().toFixed(2)} m/s`;
})

// calculation

function computeDragForce() {
  return 0.5 * Number(dragCoefficient.value) * Number(fluidsDensity.value) * Number(crosssectionalAreaPerpendiculartoFlow.value) * Math.pow(Number(objectsVelocity.value), 2);
}

function computeDragCoefficient() {
  return (Number(dragForce.value) * 2) / (Number(fluidsDensity.value) * Number(crosssectionalAreaPerpendiculartoFlow.value) * Math.pow(Number(objectsVelocity.value), 2));
}

function computeFluidsDensity() {
  return (Number(dragForce.value) * 2) / (Number(dragCoefficient.value) * Number(crosssectionalAreaPerpendiculartoFlow.value) * Math.pow(Number(objectsVelocity.value), 2));
}

function computeCrosssectionalAreaPerpendiculartoFlow() {
  return (Number(dragForce.value) * 2) / (Number(dragCoefficient.value) * Number(fluidsDensity.value) * Math.pow(Number(objectsVelocity.value), 2));
}

function computeObjectsVelocity() {
  return Math.sqrt((Number(dragForce.value) * 2) / (Number(dragCoefficient.value) * Number(fluidsDensity.value) * Number(crosssectionalAreaPerpendiculartoFlow.value)));
}