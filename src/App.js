import React from 'react'

import Nota from './components/nota'

const App = () => {
  const [inputsArr, setInputsArr] = React.useState([0])
  const [dataArr, setDataArr] = React.useState([0,0])

  const updateData = (value ,index) => {
    let arr = [...dataArr]
    arr[index] = value
    setDataArr(arr)
  }

  const addNota = () => {
    let arr = [...inputsArr]
    arr.push(0)
    setInputsArr(arr)
  }

  const displayInputs = inputsArr.map((number,index) => 
    <Nota 
      value={number}
      index={index}
      onChange={updateData}
      />
    );

  return(
    <div>
      {displayInputs}
      <p>promedio final {dataArr.reduce((acc, curr) => acc + curr)} </p>
      <br />
      <button onClick={addNota}>+</button>
    </div>
  )
}

export default App
