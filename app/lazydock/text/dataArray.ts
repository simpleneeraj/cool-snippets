

const number = Array.from(Array(20).keys())
const dataArray = {
      fontSizes: number.slice(0, 5).map((_, i) => {
            return ({ text: `${i + 12}px`, get value() { return `${this.text}` }, })
      }),
      fontWeight: number.slice(0, 5).map((_, i) => {
            return ({ text: (i + 3) * 100, get value() { return this.text } })
      }),
      lineHeight: number.slice(0, 20).map((_, i) => {
            return ({
                  text: ((i + 2) / 10).toFixed(1), get value() { return this.text }
            })
      }),
      letterSpacing: number.map((_, i) => {
            return ({ text: `${((i + 1) / 10).toFixed(1)}px`, get value() { return this.text } })
      }),

};


export default dataArray;