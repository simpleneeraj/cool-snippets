import appleColors from "./appleColors";
import googleColors from "./googleColors";
import twitterColors from "./twitterColors";
import gra from "./gradient.json"

let combine = [...twitterColors, ...appleColors, ...googleColors];

export let gradientFromUI = gra.map((data) => {
    return {
        name: data.name,
        deg: 0,
        gradient: `linear-gradient(${data.colors.join(',')})`,
    }
})

const solidColor = combine.map((color) => {
    return {
        name: color.colorName,
        deg: 0,
        // gradient: color.colorValue,
        gradient: `linear-gradient(${color.colorValue},${color.colorValue})`,
    };
});

export default solidColor;