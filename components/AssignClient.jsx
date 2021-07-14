import Select from 'react-select'

const clients = [
  { id: 1, name: 'Paul' },
  { id: 2, name: 'Pablo' },
  { id: 3, name: 'Mario' }
]

const AssignClient = () => {

  const _handleChange = (...rest) => {
    console.log("🚀 ~ NewOrder ~ rest", rest)
  }

  return (
    <>
      <Select
        isMulti
        options={clients}
        onChange={_handleChange}
        getOptionValue={({ id }) => id}
        getOptionLabel={({ name }) => name}
        placeholder="Busque o Seleccione el Cliente"
        noOptionsMessage={() => "No hay resultados"}
      />
    </>
  )
}

export default AssignClient
