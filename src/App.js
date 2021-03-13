import React from 'react';

import Nota from './components/nota';
import './styles.css';

const App = () => {
  const [inputsArr, setInputsArr] = React.useState([0, 0, 0, 0]);
  const [dataArr, setDataArr] = React.useState([0, 0, 0, 0]);
  const [finalPercentage, setFinalPercentage] = React.useState(0);
  const [finalGrade, setFinalGrade] = React.useState(0);
  const [final, setFinal] = React.useState([0, 0]);

  const updateData = (value, index) => {
    const arr = [...dataArr];
    arr[index] = value;
    setDataArr(arr);
  };

  const addNota = () => {
    const arr1 = [...inputsArr];
    const arr2 = [...dataArr];
    arr1.push(0);
    arr2.push(0);
    setInputsArr(arr1);
    setDataArr(arr2);
  };

  const deleteLast = () => {
    const arr1 = [...inputsArr];
    if (arr1.length === 2) {
      alert('you cant delete more items');
      return;
    }
    const arr2 = [...dataArr];
    arr1.pop();
    arr2.pop();
    setInputsArr(arr1);
    setDataArr(arr2);
  };

  /* delete an specific item
  const deleteItem = (index) => {
    let arr1 = [...inputsArr]
    let arr2 = [...dataArr]
    arr1.splice(index, 1)
    arr2.splice(index, 1)
    setInputsArr(arr1)
    setDataArr(arr2)
  }
*/

  const getFinalsPercentage = ({target: {value}}) => {
    setFinalPercentage((+value) / 100);
    const theFinalPercentage = ((100 - (+value)) / 100);
    const finalGrades = getNotas(dataArr);
    const arr = [...final];
    arr[0] = (finalGrades * theFinalPercentage);
    console.log(finalGrade);
    setFinal(arr);
    console.log(arr);
    if (finalGrade !== 0) {
      arr[1] = finalGrade * (+value / 100);
    }
  };

  const getFinalGrade = ({target: {value}}) => {
    setFinalGrade(+value);
    const theFinalGrade = ((+value) * (finalPercentage));
    const arr = [...final];
    arr[1] = theFinalGrade;
    setFinal(arr);
    console.log(arr);
  };

  const getNotas = (arr) => {
    return arr.reduce((acc, curr) => acc + curr);
  };

  const displayInputs = inputsArr.map((number, index) =>
    <Nota
      key={index}
      value={number}
      index={index}
      onChange={updateData}
      // onDestroy={deleteItem}
    />,
  );

  return (
    <div className='main'>
      <div className='content'>
        <div className="grades">
          {displayInputs}
        </div>
        <p id="promedio">Promedio {getNotas(dataArr)} </p>
        <br />
        <div className="buttons">
          <button className="button" onClick={addNota}>+</button>
          <button className="button delete" onClick={deleteLast}>-</button>
        </div>
        <div className="examen">
          <div className="final-inputs">
            Nota examen
            <input onChange={getFinalGrade}/>
            <input onChange={getFinalsPercentage} />
            %
          </div>
          <div className="final-grade">
            Promedio Final {getNotas(final)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
