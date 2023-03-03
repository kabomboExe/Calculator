import { useEffect, useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
    const [calculation, setCalculation] = useState([]);
    const [calcFunction, setCalcFunction] = useState("");
    const [number, setNumber] = useState("");


    function containsNumbers(str) {
        return /\d/.test(str);
    }

    const functionInputHandler = (input) => {
        setNumber("");
        if (containsNumbers(calculation[calculation.length - 1])) {
            setCalculation([...calculation, input]);

        } else {
            setCalculation([...calculation.slice(0, calculation.length-1), input]);
        }
    }

    const numberInputHandler = (input) => {
        if (number.includes(".") && input === "." || number === "" && input === ".") {
            setNumber(number);
        }else {
            setNumber(number + input);
            if (containsNumbers(calculation[calculation.length - 1])) {
                setCalculation([...calculation.slice(0, calculation.length-1), number+input]);
            } else {
                setCalculation([...calculation, number + input]);
            }
        }
    }

    const resultHandler = () => {
        let fert = calculation.map(item => containsNumbers(item) ? parseFloat(item) : item);
        console.log(fert);
        
    }


    return (
        <div className={styles.container}>
            <div className={styles.calculator}>

                <div className={styles.result}>{calculation.map(item => <p>{item}</p>)}</div>

                <div className={styles.calc_row}>
                    <div className={`${styles.function} ${styles.delete}`}>C</div>
                    <div className={styles.function} onClick={() => { functionInputHandler("%") }}>%</div>
                    <div className={styles.function} onClick={() => { functionInputHandler("/") }}>/</div>
                </div>
                <div className={styles.calc_row}>
                    <div className={styles.number} onClick={() => { numberInputHandler("7") }}>7</div>
                    <div className={styles.number} onClick={() => { numberInputHandler("8") }}>8</div>
                    <div className={styles.number} onClick={() => { numberInputHandler("9") }}>9</div>
                    <div className={styles.function} onClick={() => { functionInputHandler("*") }}>x</div>
                </div>
                <div className={styles.calc_row}>
                    <div className={styles.number} onClick={() => { numberInputHandler("4") }}>4</div>
                    <div className={styles.number} onClick={() => { numberInputHandler("5") }}>5</div>
                    <div className={styles.number} onClick={() => { numberInputHandler("6") }}>6</div>
                    <div className={styles.function} onClick={() => { functionInputHandler("-") }}>-</div>
                </div>
                <div className={styles.calc_row}>
                    <div className={styles.number} onClick={() => { numberInputHandler("1") }}>1</div>
                    <div className={styles.number} onClick={() => { numberInputHandler("2") }}>2</div>
                    <div className={styles.number} onClick={() => { numberInputHandler("3") }}>3</div>
                    <div className={styles.function} onClick={() => { functionInputHandler("+") }}>+</div>
                </div>
                <div className={styles.calc_row}>
                    <div className={`${styles.number} ${styles.zero}`} onClick={() => { numberInputHandler("0") }}>0</div>
                    <div className={styles.number} onClick={() => { numberInputHandler(".") }}>.</div>
                    <div className={styles.function} onClick={resultHandler}>=</div>
                </div>
            </div>
        </div>
    );
}

export default Home;