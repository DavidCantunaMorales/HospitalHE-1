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
  transform: 'scale(1.1)',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
};

const sectionStyle = {
  border: '2px solid #004080',
  borderRadius: '12px',
  boxShadow: '0px 10px 20px rgba(0, 64, 128, 0.1)',
  padding: '20px',
  marginBottom: '20px',
  backgroundColor: '#eaf2ff',
};

const containerStyle = {
  padding: '30px',
  fontFamily: 'Roboto, Arial, sans-serif',
 // backgroundColor: '#f0f8ff',
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

export const CAdmitirPaciente2 = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Sistema de Información</h1>
      <form>
        {/* Sección de datos personales */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {['No', 'H.C. Externo', 'H.C. Interna', 'Paciente', 'Edad', 'Sexo', 'Fuerza', 'Grado', 'Situación', 'Dirección Domicilio', 'Teléfono', 'Admisicionista', 'Especialidad de Admisión'].map(
            (placeholder, index) => (
              <input
                key={index}
                type="text"
                placeholder={placeholder}
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
            )
          )}
        </div>

        {/* Sección de permanencia y atención */}
        <div style={sectionStyle}>
          <h3 style={{ color: '#00264d', marginBottom: '15px' }}>Permanencia y Atención</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {['Admitido Para', 'Fecha de Ingreso', 'Fecha de Transferencia', 'Fecha de Alta', 'Días de Estadia', 'Piso', 'Sala', 'Cama', 'Diagnóstico de Ingreso', 'Encargado Desde', 'Médico', 'Deuda Total en IVA'].map(
              (placeholder, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={placeholder}
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              )
            )}
          </div>
        </div>

        {/* Sección de botones */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
          {['Autorización', 'Dar de Alta', 'Hospitalizados', 'Descargos Botica', 'Egresos Subbodega', 'Consumos Varios', 'Descargos Generales', 'Equipos Especiales', 'Honorarios', 'Planillar'].map(
            (buttonText, index) => (
              <button
                key={index}
                type="button"
                style={buttonStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
              >
                {buttonText}
              </button>
            )
          )}
        </div>
      </form>
    </div>
  );
};
