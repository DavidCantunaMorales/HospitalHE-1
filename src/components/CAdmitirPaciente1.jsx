const inputStyle = {
  padding: '10px',
  border: '2px solid #004080',
  borderRadius: '8px',
  flex: '1',
  minWidth: '120px',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.3s',
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
  backgroundColor: '#001a33',
};

const sectionStyle = {
  border: '2px solid #004080',
  borderRadius: '12px',
  boxShadow: '0px 10px 20px rgba(0, 64, 128, 0.1)',
  padding: '25px',
  marginBottom: '20px',
  backgroundColor: 'white',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontWeight: 'bold',
  color: '#004080',
  fontSize: '14px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '0 10px',
  marginBottom: '20px',
  backgroundColor: '#f0f8ff',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
};

const thTdStyle = {
  padding: '15px',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '500',
};

const tableHeaderStyle = {
  backgroundColor: '#004080',
  color: 'white',
  fontWeight: 'bold',
};

const containerStyle = {
  padding: '30px',
  fontFamily: 'Roboto, Arial, sans-serif',
  //backgroundColor: '#e6f2ff',
  borderRadius: '12px',
  boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.2)',
};

const titleStyle = {
  textAlign: 'center',
  color: '#004080',
  fontSize: '28px',
  marginBottom: '30px',
  fontWeight: '700',
};

export const CAdmitirPaciente1 = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Admitir Paciente</h1>
      <form>
        {/* Fila 1 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          <div>
            <label style={labelStyle}>H.C.</label>
            <input
              type='text'
              style={inputStyle}
              placeholder='H.C.'
            />
          </div>
          <div>
            <label style={labelStyle}>Apellido Paterno</label>
            <input
              type='text'
              style={inputStyle}
              placeholder='Apellido Paterno'
            />
          </div>
          <div>
            <label style={labelStyle}>Apellido Materno</label>
            <input
              type='text'
              style={inputStyle}
              placeholder='Apellido Materno'
            />
          </div>
          <div>
            <label style={labelStyle}>Primer Nombre</label>
            <input
              type='text'
              style={inputStyle}
              placeholder='Primer Nombre'
            />
          </div>
          <div>
            <label style={labelStyle}>Segundo Nombre</label>
            <input
              type='text'
              style={inputStyle}
              placeholder='Segundo Nombre'
            />
          </div>
          <div>
            <label style={labelStyle}>Cédula/Pasaporte</label>
            <input
              type='text'
              style={inputStyle}
              placeholder='Cédula/Pasaporte'
            />
          </div>
        </div>

        {/* Recuadro grande */}
        <div style={sectionStyle}>
          <h3 style={{ color: '#00264d', marginBottom: '15px' }}>Información del Paciente</h3>

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
                  <td style={thTdStyle}>
                    <input
                      type='text'
                      style={inputStyle}
                    />
                  </td>
                  <td style={thTdStyle}>
                    <input
                      type='text'
                      style={inputStyle}
                    />
                  </td>
                  <td style={thTdStyle}>
                    <input
                      type='text'
                      style={inputStyle}
                    />
                  </td>
                  <td style={thTdStyle}>
                    <input
                      type='text'
                      style={inputStyle}
                    />
                  </td>
                  <td style={thTdStyle}>
                    <input
                      type='text'
                      style={inputStyle}
                    />
                  </td>
                  <td style={thTdStyle}>
                    <input
                      type='text'
                      style={inputStyle}
                    />
                  </td>
                  <td style={thTdStyle}>
                    <input
                      type='text'
                      style={inputStyle}
                    />
                  </td>
                  <td style={thTdStyle}>
                    <input
                      type='text'
                      style={inputStyle}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Fila 2.2 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>Estado Civil</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Estado Civil'
              />
            </div>
            <div>
              <label style={labelStyle}>Tipo Sangre</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Tipo Sangre'
              />
            </div>
            <div>
              <label style={labelStyle}>Fecha de Nacimiento</label>
              <input
                type='date'
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Edad</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Edad'
              />
            </div>
            <div>
              <label style={labelStyle}>Lugar de Nacimiento</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Lugar de Nacimiento'
              />
            </div>
          </div>

          {/* Fila 2.3 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>Nacionalidad</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Nacionalidad'
              />
            </div>
            <div>
              <label style={labelStyle}>Zona</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Zona'
              />
            </div>
            <div>
              <label style={labelStyle}>Barrio</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Barrio'
              />
            </div>
            <div>
              <label style={labelStyle}>Fecha de Afiliación</label>
              <input
                type='date'
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Código IESS</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Código IESS'
              />
            </div>
          </div>

          {/* Fila 2.4 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>Provincia</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Provincia'
              />
            </div>
            <div>
              <label style={labelStyle}>Cantón</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Cantón'
              />
            </div>
            <div>
              <label style={labelStyle}>Parroquia</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Parroquia'
              />
            </div>
            <button
              type='button'
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              Completar Datos
            </button>
            <button
              type='button'
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
              <input
                type='text'
                style={inputStyle}
                placeholder='Dirección Domicilio'
              />
            </div>
            <div>
              <label style={labelStyle}>Teléfono</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Teléfono'
              />
            </div>
          </div>
        </div>

        {/* Datos ISSFA */}
        <div style={sectionStyle}>
          <h3>Datos ISSFA</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <label style={labelStyle}>ID ISSFA</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='ID ISSFA'
              />
            </div>
            <div>
              <label style={labelStyle}>Fuerza</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Fuerza'
              />
            </div>
            <div>
              <label style={labelStyle}>Grado</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Grado'
              />
            </div>
            <div>
              <label style={labelStyle}>Situación</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Situación'
              />
            </div>
          </div>
        </div>

        {/* Referentes */}
        <div style={sectionStyle}>
          <h3>Referentes</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <label style={labelStyle}>Nombre</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Nombre'
              />
            </div>
            <div>
              <label style={labelStyle}>Dirección Domicilio</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Dirección Domicilio'
              />
            </div>
            <div>
              <label style={labelStyle}>Teléfono</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Teléfono'
              />
            </div>
            <div>
              <label style={labelStyle}>Relación</label>
              <input
                type='text'
                style={inputStyle}
                placeholder='Relación'
              />
            </div>
            <button
              type='button'
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
