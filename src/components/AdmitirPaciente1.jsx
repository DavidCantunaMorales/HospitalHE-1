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
  
  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
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
  
  const tableHeaderStyle = {
    backgroundColor: '#f4f4f4',
    fontWeight: 'bold',
    textAlign: 'left',
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
  
  export const AdmitirPaciente1 = () => {
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>Admitir Paciente</h1>
        <form>
          {/* Fila 1 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>H.C.</label>
              <input type="text" style={inputStyle} placeholder="H.C." />
            </div>
            <div>
              <label style={labelStyle}>Apellido Paterno</label>
              <input type="text" style={inputStyle} placeholder="Apellido Paterno" />
            </div>
            <div>
              <label style={labelStyle}>Apellido Materno</label>
              <input type="text" style={inputStyle} placeholder="Apellido Materno" />
            </div>
            <div>
              <label style={labelStyle}>Primer Nombre</label>
              <input type="text" style={inputStyle} placeholder="Primer Nombre" />
            </div>
            <div>
              <label style={labelStyle}>Segundo Nombre</label>
              <input type="text" style={inputStyle} placeholder="Segundo Nombre" />
            </div>
            <div>
              <label style={labelStyle}>Cédula/Pasaporte</label>
              <input type="text" style={inputStyle} placeholder="Cédula/Pasaporte" />
            </div>
          </div>
  
          {/* Recuadro grande */}
          <div style={sectionStyle}>
            <h3>Información del Paciente</h3>
  
            {/* Tabla */}
            <div style={{ marginBottom: '20px', overflowX: 'auto' }}>
              <table style={tableStyle}>
                <thead>
                  <tr style={tableHeaderStyle}>
                    <th style={thTdStyle}>HC Int</th>
                    <th style={thTdStyle}>Cédula/Pasaporte</th>
                    <th style={thTdStyle}>Apellido Paterno</th>
                    <th style={thTdStyle}>Apellido Materno</th>
                    <th style={thTdStyle}>Primer Nombre</th>
                    <th style={thTdStyle}>Segundo Nombre</th>
                    <th style={thTdStyle}>Tipo Id</th>
                    <th style={thTdStyle}>Sexo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={thTdStyle}><input type="text" style={inputStyle} /></td>
                    <td style={thTdStyle}><input type="text" style={inputStyle} /></td>
                    <td style={thTdStyle}><input type="text" style={inputStyle} /></td>
                    <td style={thTdStyle}><input type="text" style={inputStyle} /></td>
                    <td style={thTdStyle}><input type="text" style={inputStyle} /></td>
                    <td style={thTdStyle}><input type="text" style={inputStyle} /></td>
                    <td style={thTdStyle}><input type="text" style={inputStyle} /></td>
                    <td style={thTdStyle}><input type="text" style={inputStyle} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            {/* Fila 2.2 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>Estado Civil</label>
                <input type="text" style={inputStyle} placeholder="Estado Civil" />
              </div>
              <div>
                <label style={labelStyle}>Tipo Sangre</label>
                <input type="text" style={inputStyle} placeholder="Tipo Sangre" />
              </div>
              <div>
                <label style={labelStyle}>Fecha de Nacimiento</label>
                <input type="date" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Edad</label>
                <input type="text" style={inputStyle} placeholder="Edad" />
              </div>
              <div>
                <label style={labelStyle}>Lugar de Nacimiento</label>
                <input type="text" style={inputStyle} placeholder="Lugar de Nacimiento" />
              </div>
            </div>
  
            {/* Fila 2.3 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>Nacionalidad</label>
                <input type="text" style={inputStyle} placeholder="Nacionalidad" />
              </div>
              <div>
                <label style={labelStyle}>Zona</label>
                <input type="text" style={inputStyle} placeholder="Zona" />
              </div>
              <div>
                <label style={labelStyle}>Barrio</label>
                <input type="text" style={inputStyle} placeholder="Barrio" />
              </div>
              <div>
                <label style={labelStyle}>Fecha de Afiliación</label>
                <input type="date" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Código IESS</label>
                <input type="text" style={inputStyle} placeholder="Código IESS" />
              </div>
            </div>
  
            {/* Fila 2.4 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>Provincia</label>
                <input type="text" style={inputStyle} placeholder="Provincia" />
              </div>
              <div>
                <label style={labelStyle}>Cantón</label>
                <input type="text" style={inputStyle} placeholder="Cantón" />
              </div>
              <div>
                <label style={labelStyle}>Parroquia</label>
                <input type="text" style={inputStyle} placeholder="Parroquia" />
              </div>
              <button
                type="button"
                style={buttonStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
              >
                Completar Datos
              </button>
              <button
                type="button"
                style={buttonStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
              >
                Ver Cuenta
              </button>
            </div>
  
            {/* Fila 2.5 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>Dirección Domicilio</label>
                <input type="text" style={inputStyle} placeholder="Dirección Domicilio" />
              </div>
              <div>
                <label style={labelStyle}>Teléfono</label>
                <input type="text" style={inputStyle} placeholder="Teléfono" />
              </div>
            </div>
          </div>
  
          {/* Datos ISSFA */}
          <div style={sectionStyle}>
            <h3>Datos ISSFA</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <label style={labelStyle}>ID ISSFA</label>
                <input type="text" style={inputStyle} placeholder="ID ISSFA" />
              </div>
              <div>
                <label style={labelStyle}>Fuerza</label>
                <input type="text" style={inputStyle} placeholder="Fuerza" />
              </div>
              <div>
                <label style={labelStyle}>Grado</label>
                <input type="text" style={inputStyle} placeholder="Grado" />
              </div>
              <div>
                <label style={labelStyle}>Situación</label>
                <input type="text" style={inputStyle} placeholder="Situación" />
              </div>
            </div>
          </div>
  
          {/* Referentes */}
          <div style={sectionStyle}>
            <h3>Referentes</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <label style={labelStyle}>Nombre</label>
                <input type="text" style={inputStyle} placeholder="Nombre" />
              </div>
              <div>
                <label style={labelStyle}>Dirección Domicilio</label>
                <input type="text" style={inputStyle} placeholder="Dirección Domicilio" />
              </div>
              <div>
                <label style={labelStyle}>Teléfono</label>
                <input type="text" style={inputStyle} placeholder="Teléfono" />
              </div>
              <div>
                <label style={labelStyle}>Relación</label>
                <input type="text" style={inputStyle} placeholder="Relación" />
              </div>
              <button
                type="button"
                style={buttonStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
              >
                Admitir
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  