import { useNavigate } from 'react-router-dom';

const inputStyle = {
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  flex: '1',
  minWidth: '100px',
};

const buttonStyle = {
  padding: '8px 15px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#0056b3',
  transform: 'scale(1.05)',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
};

const sectionStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginBottom: '20px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '10px',
  overflowX: 'auto',
  display: 'block',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
};

const thTdStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'left',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
  color: '#333',
};

const containerStyle = {
  padding: '20px',
  fontFamily: 'Roboto, Arial, sans-serif',
  color: '#333',
};

const titleStyle = {
  textAlign: 'center',
  color: '#007BFF',
  marginBottom: '20px',
};

export const CPagPrincipal = () => {
  const navigate = useNavigate(); // Hook para redirección

  const registrosEjemplo = [
    {
      servicio: 'Emergencia',
      hab: 'EMER',
      piso: 'Piso 1',
      hc: '21571',
      apellidoPaterno: 'ORTEGA',
      apellidoMaterno: 'REA',
      primerNombre: 'GUILLERMO',
      segundoNombre: 'ALFREDO',
      edad: 55,
      sexo: 'M',
      fechaIngreso: '15/12/2024 07:20',
    },
    {
      servicio: 'Consulta Externa',
      hab: '100C2',
      piso: 'Piso 10',
      hc: '32732',
      apellidoPaterno: 'ACOSTA',
      apellidoMaterno: 'MEZA',
      primerNombre: 'CARLOS',
      segundoNombre: 'ALFREDO',
      edad: 13,
      sexo: 'M',
      fechaIngreso: '15/12/2024 07:15',
    },
    // Otros registros...
  ];

  const handleNuevaAdmision = () => {
    navigate('/nueva-admision'); // Redirigir a la página de nueva admisión
  };

  const handleNuevaAdmision2 = () => {
    navigate('/nueva-admision2'); // Redirigir a la página de nueva admisión
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Pacientes en Atención</h1>

      {/* Tabla de pacientes */}
      <div style={{ marginBottom: '20px', overflowX: 'auto' }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Servicio</th>
              <th style={thTdStyle}>Hab.</th>
              <th style={thTdStyle}>Piso</th>
              <th style={thTdStyle}>H.C.</th>
              <th style={thTdStyle}>Apellido Paterno</th>
              <th style={thTdStyle}>Apellido Materno</th>
              <th style={thTdStyle}>Primer Nombre</th>
              <th style={thTdStyle}>Segundo Nombre</th>
              <th style={thTdStyle}>Edad</th>
              <th style={thTdStyle}>Sexo</th>
              <th style={thTdStyle}>Fecha de Ingreso</th>
            </tr>
          </thead>
          <tbody>
            {registrosEjemplo.map((registro, index) => (
              <tr key={index}>
                <td style={thTdStyle}>{registro.servicio}</td>
                <td style={thTdStyle}>{registro.hab}</td>
                <td style={thTdStyle}>{registro.piso}</td>
                <td style={thTdStyle}>{registro.hc}</td>
                <td style={thTdStyle}>{registro.apellidoPaterno}</td>
                <td style={thTdStyle}>{registro.apellidoMaterno}</td>
                <td style={thTdStyle}>{registro.primerNombre}</td>
                <td style={thTdStyle}>{registro.segundoNombre}</td>
                <td style={thTdStyle}>{registro.edad}</td>
                <td style={thTdStyle}>{registro.sexo}</td>
                <td style={thTdStyle}>{registro.fechaIngreso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Controles inferiores */}
      <div style={sectionStyle}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
          <div>
            <label style={labelStyle}>Plan Social</label>
            <input type="text" style={inputStyle} placeholder="ISSFA" />
          </div>
          <div>
            <label style={labelStyle}>Total deuda sin IVA</label>
            <input type="text" style={inputStyle} placeholder="793.23" />
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            onClick={handleNuevaAdmision} // Agregar la función de redirección
          >
            Nueva Admision
          </button>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            onClick={handleNuevaAdmision2} // Agregar la función de redirección
          >
            Nueva Admision 2
          </button>
          {/* Otros botones... */}
        </div>
      </div>
    </div>
  );
};
