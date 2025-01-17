const inputStyle = {
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  flex: '1',
  minWidth: '150px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export const CAdmitirPaciente2 = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sistema de Información</h1>
      <form>
        {/* Sección de datos personales */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
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

        {/* Sección de permanencia y atención */}
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>Permanencia y Atención</h3>
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
            <input
              type='text'
              placeholder='Deuda Total en IVA'
              style={inputStyle}
            />
          </div>
        </div>

        {/* Sección de botones */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
          <button
            type='button'
            style={buttonStyle}
          >
            Autorización
          </button>
          <button
            type='button'
            style={buttonStyle}
          >
            Dar de Alta
          </button>
          <button
            type='button'
            style={buttonStyle}
          >
            Hospitalizados
          </button>
          <button
            type='button'
            style={buttonStyle}
          >
            Descargos Botica
          </button>
          <button
            type='button'
            style={buttonStyle}
          >
            Egresos Subbodega
          </button>
          <button
            type='button'
            style={buttonStyle}
          >
            Consumos Varios
          </button>
          <button
            type='button'
            style={buttonStyle}
          >
            Descargos Generales
          </button>
          <button
            type='button'
            style={buttonStyle}
          >
            Equipos Especiales
          </button>
          <button
            type='button'
            style={buttonStyle}
          >
            Honorarios
          </button>
          <button
            type='button'
            style={buttonStyle}
          >
            Planillar
          </button>
        </div>
      </form>
    </div>
  );
};
