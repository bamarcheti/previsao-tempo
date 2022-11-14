const ResultSearch = (props) => {
  return (
    <div>
      <p>{props.temp}</p>
      <p>{props.county}</p>
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default ResultSearch;