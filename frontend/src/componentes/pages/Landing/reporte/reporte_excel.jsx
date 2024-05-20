import React from 'react';

class ReporteExcel extends React.Component {
  descargarReporte = () => {
    // Datos de ejemplo
    const datos = [
      ["Nombre", "Edad", "Ciudad"],
      ["Juan", 30, "México"],
      ["María", 25, "Madrid"],
      ["Carlos", 40, "Buenos Aires"]
    ];

    // Construir el contenido del archivo XML Spreadsheet
    let xmlData = '<?xml version="1.0"?>\n';
    xmlData += '<ss:Workbook xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">\n';
    xmlData += '  <ss:Worksheet ss:Name="Reporte">\n';
    xmlData += '    <ss:Table>\n';

    datos.forEach((fila) => {
      xmlData += '      <ss:Row>\n';
      fila.forEach((dato) => {
        xmlData += `        <ss:Cell><ss:Data ss:Type="String">${dato}</ss:Data></ss:Cell>\n`;
      });
      xmlData += '      </ss:Row>\n';
    });

    xmlData += '    </ss:Table>\n';
    xmlData += '  </ss:Worksheet>\n';
    xmlData += '</ss:Workbook>';

    // Crear un objeto Blob
    const blob = new Blob([xmlData], { type: 'application/vnd.ms-excel' });

    // Crear una URL para el archivo Blob
    const url = window.URL.createObjectURL(blob);

    // Crear un enlace y simular el clic para descargar el archivo
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reporte.xls';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Liberar la URL del objeto Blob
    window.URL.revokeObjectURL(url);
  };

  render() {
    return (
      <div>
        <button onClick={this.descargarReporte}>Descargar Reporte Excel</button>
      </div>
    );
  }
}

export default ReporteExcel;
