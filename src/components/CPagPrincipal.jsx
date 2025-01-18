import { useNavigate } from 'react-router-dom';

const inputStyle = {
  padding: '10px',
  border: '2px solid #004080',
  borderRadius: '8px',
  flex: '1',
  minWidth: '150px',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.3s',
};

const inputHoverFocusStyle = {
  borderColor: '#00264d',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#004080',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'transform 0.2s, background-color 0.3s',
};

const buttonHoverStyle = {
  backgroundColor: '#00264d',
};

const sectionStyle = {
  border: '2px solid #004080',
  borderRadius: '12px',
  boxShadow: '0px 10px 20px rgba(0, 64, 128, 0.1)',
  padding: '20px',
  marginBottom: '20px',
  backgroundColor: '#eaf2ff',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '10px',
  backgroundColor: 'white',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
};

const thTdStyle = {
  border: '1px solid #d1d1d1',
  padding: '15px',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '500',
  backgroundColor: '#f7f7f7',
  color: '#333',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontWeight: 'bold',
  color: '#004080',
  fontSize: '14px',
};

const containerStyle = {
  padding: '30px',
  fontFamily: 'Roboto, Arial, sans-serif',
  borderRadius: '12px',
  boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.2)',
};

const titleStyle = {
  textAlign: 'center',
  color: '#004080',
  fontSize: '28px',
  marginBottom: '20px',
  fontWeight: '700',
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
    navigate('/nueva-admision');
  };

  const handleNuevaAdmision2 = () => {
    navigate('/nueva-admision2');
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Pacientes en Atención</h1>

      {/* Tabla de pacientes */}
      <div style={{ marginBottom: '20px', overflowX: 'auto' }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              {[
                'Servicio',
                'Hab.',
                'Piso',
                'H.C.',
                'Apellido Paterno',
                'Apellido Materno',
                'Primer Nombre',
                'Segundo Nombre',
                'Edad',
                'Sexo',
                'Fecha de Ingreso',
              ].map((header, index) => (
                <th
                  key={index}
                  style={thTdStyle}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {registrosEjemplo.map((registro, index) => (
              <tr key={index}>
                {Object.values(registro).map((value, idx) => (
                  <td
                    key={idx}
                    style={thTdStyle}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Controles inferiores */}
      <div style={sectionStyle}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={labelStyle}>Plan Social</label>
            <input
              type='text'
              style={inputStyle}
              placeholder='ISSFA'
              onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
          </div>
          <div>
            <label style={labelStyle}>Total deuda sin IVA</label>
            <input
              type='text'
              style={inputStyle}
              placeholder='793.23'
              onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {[
            'Evol. Clínica',
            'Solicitar Constancia',
            'Importes',
            'Ver H. Clínica',
            'Emergencias',
            'Signos Vitales',
            'Actualizar ISSFA',
          ].map((buttonText, index) => (
            <button
              key={index}
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              {buttonText}
            </button>
          ))}
        </div>
      </div>

      {/* Sección de botones */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {['Nueva Admision', 'Nueva Admision 2'].map((buttonText, index) => (
          <button
            key={index}
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            onClick={index === 0 ? handleNuevaAdmision : handleNuevaAdmision2}
          >
            {buttonText}
          </button>
        ))}
      </div>
    </div>
  );
};
