// const { startTime = 0, currentTime = 0, isdebug, message } = props
/**************************
 * Calculation Performance Function
 * 
 * Inspired by html2canvas library
***************************/
const difference = (m: any, st: number, d: boolean = false) => {
  const calc = performance.now() - st;
  return d ? console.log(`${m} ${calc.toFixed()}ms`) : null
};

export default difference;
