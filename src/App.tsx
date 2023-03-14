import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Setting/Settings";


// TODO:
//** 1 - Дизэйбл set после введения и сохранения значений до тех пор, пока новое значение не будет введено
// 2- Проверка на отрицательные числа, выпадение ошибки в связи с этим, подстветка инпута и дизэйбл кнопок
// 3 - Проверка на корректные стартовые и максимальные значения, выпадение ошибки, подстветка инпута  и дизэйбл кнопки в связи с этим
// 4 - Сохранение стартовых настроек в localStorage
//** 5 - Дизэйбл кнопок счетчика при введении стартовых значений
// 6 - Верстка

function App() {
    const [count, setCount] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [errorDisplay, setErrorDisplay] = useState<null | 'Incorrect value!'>(null)
    const [settingDisplay, setSettingDisplay] = useState<null | 'Enter values and press "set"'>(null)

    return (
        <div className="App">
            <Settings setMaxValue={setMaxValue} setStartValue={(num)=>setStartValue((prev)=>num)} startValue={startValue} maxValue={maxValue} setSettingDisplay={setSettingDisplay} setErrorDisplay={setErrorDisplay} setCount={setCount} settingDisplay={settingDisplay} errorDisplay={errorDisplay}/>
            <Counter count={count} setCount={setCount} maxValue={maxValue} startValue={startValue} settingDisplay={settingDisplay} errorDisplay={errorDisplay}/>
        </div>
    );
}

export default App;
