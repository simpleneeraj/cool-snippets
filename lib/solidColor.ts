import appleColors from "./appleColors";
import googleColors from "./googleColors";
import twitterColors from "./twitterColors";

let combine = [...twitterColors, ...appleColors, ...googleColors];



const solidColor = combine.map((color) => {
    return {
        name: color.colorName,
        deg: 0,
        // gradient: color.colorValue,
        gradient: `linear-gradient(${color.colorValue},${color.colorValue})`,
    };
});

export default solidColor;