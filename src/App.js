import React from 'react'

import Nota from './components/nota'

const App = () => {
  const [inputsArr, setInputsArr] = React.useState([0, 0, 0, 0])
  const [dataArr, setDataArr] = React.useState([0,0])
  const [finalPercentage, setFinalPercentage] = React.useState(0)
  const [finalGrade, setFinalGrade] = React.useState(0)
  const [final, setFinal] = React.useState([0,0])

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

  const deleteItem = (index) => {
    let arr1 = [...inputsArr]
    let arr2 = [...dataArr]
    arr1.splice(index, 1)
    arr2.splice(index, 1)
    setInputsArr(arr1)
    setDataArr(arr2)
  }

  const getFinalsPercentage = ({target:{value}}) => {
    setFinalPercentage((+value) / 100)
    const theFinalPercentage = ((100 - (+value)) / 100)
    const finalGrades = getNotas(dataArr)
    let arr = [...final]
    arr[0] = (finalGrades * theFinalPercentage)
    console.log(finalGrade)
    setFinal(arr)
    console.log(arr)
    if (finalGrade !== 0){
      arr[1] = finalGrade * (+value / 100)
    }
  }

  const getFinalGrade = ({target:{value}}) => {
    setFinalGrade(+value)
    const theFinalGrade = ((+value) * (finalPercentage))
    let arr = [...final]
    arr[1] = theFinalGrade
    setFinal(arr)
    console.log(arr)
  }

  const getNotas = (arr) => {
    return arr.reduce((acc, curr) => acc + curr)
  }

  const displayInputs = inputsArr.map((number,index) => 
    <Nota 
      value={number}
      index={index}
      onChange={updateData}
      onDestroy={deleteItem}
      />
    );

  return(
    <div>
      {displayInputs}
      <p>promedio {getNotas(dataArr)} </p>
      <br />
      <button onClick={addNota}>+</button>
      <div className="examen">
        <input onChange={getFinalGrade}/>
        <input onChange={getFinalsPercentage} />
        <p>Promedio Final {getNotas(final)}</p>
      </div>
    </div>
  )
}

export default App
