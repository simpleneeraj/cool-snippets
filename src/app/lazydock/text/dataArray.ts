
const fontFaces = [{
      "text": "FiraCode",
      get value() {
            return this.text
      }
},
{
      "text": "IBMPlexMono",
      get value() {
            return this.text
      }
},
{
      "text": "Inconsolata",
      get value() {
            return this.text
      }
},
{
      "text": "JetBrainsMono",
      get value() {
            return this.text
      }
},
{
      "text": "MonoLisa",
      get value() {
            return this.text
      }
},
{
      "text": "OperatorMono",
      get value() {
            return this.text
      }
},
{
      "text": "RobotoMono",
      get value() {
            return this.text
      }
},
{
      "text": "SourceCodePro",
      get value() {
            return this.text
      }
},
{
      "text": "UbuntuMono",
      get value() {
            return this.text
      }
},
{
      "text": "VictorMono",
      get value() {
            return this.text
      }
}]



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
      fontFaces: fontFaces,
};


export default dataArray;