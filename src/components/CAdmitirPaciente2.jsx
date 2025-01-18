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
  boxShadow: '0px 10px 20px rgba(0, 38, 77, 0.1)',
  padding: '25px',
  marginBottom: '20px',
  backgroundColor: 'white',
};

const containerStyle = {
  padding: '30px',
  fontFamily: 'Roboto, Arial, sans-serif',
  borderRadius: '12px',
  boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.2)',
};

const titleStyle = {
  textAlign: 'center',
  color: '#00264d',
  fontSize: '28px',
  marginBottom: '30px',
  fontWeight: '700',
};

export const CAdmitirPaciente2 = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Sistema de Información</h1>
      <form>
        {/* Sección de datos personales */}
        <div style={sectionStyle}>
          <h3 style={{ color: '#00264d', marginBottom: '15px' }}>Datos Personales</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input
              type='text'
              placeholder='No'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='H.C. Externo'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='H.C. Interna'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Paciente'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Edad'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Sexo'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Fuerza'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Grado'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Situación'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Dirección Domicilio'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Teléfono'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Admisicionista'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Especialidad de Admisión'
              style={inputStyle}
            />
          </div>
        </div>

        {/* Sección de permanencia y atención */}
        <div style={sectionStyle}>
          <h3 style={{ color: '#00264d', marginBottom: '15px' }}>Permanencia y Atención</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <input
              type='text'
              placeholder='Admitido Para'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Fecha de Ingreso'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Fecha de Transferencia'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Fecha de Alta'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Días de Estadia'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Piso'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Sala'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Cama'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Diagnóstico de Ingreso'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Encargado Desde'
              style={inputStyle}
            />
            <input
              type='text'
              placeholder='Médico'
              style={inputStyle}
            />
          </div>
        </div>

        {/* Sección: Acciones principales */}
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <input
              type='text'
              placeholder='Deuda Total en IVA'
              style={inputStyle}
            />
            <button
              type='button'
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              Autorización
            </button>
            <button
              type='button'
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              Dar de Alta
            </button>
            <button
              type='button'
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              Anular Alta
            </button>
            <button
              type='button'
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              No Admitir
            </button>
            <button
              type='button'
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              Evol. Clínica
            </button>
            <button
              type='button'
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              Hospitalizados
            </button>
          </div>
        </div>

        {/* Sección de botones */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
          <button
            type='button'
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Descargos Botica
          </button>
          <button
            type='button'
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Egresos Subbodega
          </button>
          <button
            type='button'
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Consumos Varios
          </button>
          <button
            type='button'
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Descargos Generales
          </button>
          <button
            type='button'
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Equipos Especiales
          </button>
          <button
            type='button'
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Honorarios
          </button>
          <button
            type='button'
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Planillar
          </button>
        </div>
      </form>
    </div>
  );
};
