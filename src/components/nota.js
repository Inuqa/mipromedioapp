import React from 'react'

const Nota = ({ value, index, onChange, onDestroy}) => {
  const [grade, setGrade] = React.useState(0)
  const [percentage, setPercentage] = React.useState(0)

  const gradeChangeHandler = ({target:{value}}) => {
    setGrade(+value);
    calculate(+value, percentage);
  }

  const percentageChangeHandler = ({ target:{value} }) => {
    setPercentage(+value);
    calculate(grade, +value);
  }

  const calculate = (_grade, _percentage) => {
    onChange(_grade * _percentage / 100, index);
  }

  const onClickHandler = (e) => {
    onDestroy(index)
  }

  return(
    <div>
      <input onChange={gradeChangeHandler} />
      <input onChange={percentageChangeHandler} />
      <button onClick={onClickHandler}>X</button>
    </div>
  );
}

export default Nota
