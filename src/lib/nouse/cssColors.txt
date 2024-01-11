const cssColors = [
  {
    colorName: "aliceblue",
    colorValue: "#f0f8ff",
  },
  {
    colorName: "antiquewhite",
    colorValue: "#faebd7",
  },
  {
    colorName: "aqua",
    colorValue: "#00ffff",
  },
  {
    colorName: "aquamarine",
    colorValue: "#7fffd4",
  },
  {
    colorName: "azure",
    colorValue: "#f0ffff",
  },
  {
    colorName: "beige",
    colorValue: "#f5f5dc",
  },
  {
    colorName: "bisque",
    colorValue: "#ffe4c4",
  },
  {
    colorName: "black",
    colorValue: "#000000",
  },
  {
    colorName: "blanchedalmond",
    colorValue: "#ffebcd",
  },
  {
    colorName: "blue",
    colorValue: "#0000ff",
  },
  {
    colorName: "blueviolet",
    colorValue: "#8a2be2",
  },
  {
    colorName: "brown",
    colorValue: "#a52a2a",
  },
  {
    colorName: "burlywood",
    colorValue: "#deb887",
  },
  {
    colorName: "cadetblue",
    colorValue: "#5f9ea0",
  },
  {
    colorName: "chartreuse",
    colorValue: "#7fff00",
  },
  {
    colorName: "chocolate",
    colorValue: "#d2691e",
  },
  {
    colorName: "coral",
    colorValue: "#ff7f50",
  },
  {
    colorName: "cornflowerblue",
    colorValue: "#6495ed",
  },
  {
    colorName: "cornsilk",
    colorValue: "#fff8dc",
  },
  {
    colorName: "crimson",
    colorValue: "#dc143c",
  },
  {
    colorName: "cyan",
    colorValue: "#00ffff",
  },
  {
    colorName: "darkblue",
    colorValue: "#00008b",
  },
  {
    colorName: "darkcyan",
    colorValue: "#008b8b",
  },
  {
    colorName: "darkgoldenrod",
    colorValue: "#b8860b",
  },
  {
    colorName: "darkgray",
    colorValue: "#a9a9a9",
  },
  {
    colorName: "darkgreen",
    colorValue: "#006400",
  },
  {
    colorName: "darkgrey",
    colorValue: "#a9a9a9",
  },
  {
    colorName: "darkkhaki",
    colorValue: "#bdb76b",
  },
  {
    colorName: "darkmagenta",
    colorValue: "#8b008b",
  },
  {
    colorName: "darkolivegreen",
    colorValue: "#556b2f",
  },
  {
    colorName: "darkorange",
    colorValue: "#ff8c00",
  },
  {
    colorName: "darkorchid",
    colorValue: "#9932cc",
  },
  {
    colorName: "darkred",
    colorValue: "#8b0000",
  },
  {
    colorName: "darksalmon",
    colorValue: "#e9967a",
  },
  {
    colorName: "darkseagreen",
    colorValue: "#8fbc8f",
  },
  {
    colorName: "darkslateblue",
    colorValue: "#483d8b",
  },
  {
    colorName: "darkslategray",
    colorValue: "#2f4f4f",
  },
  {
    colorName: "darkslategrey",
    colorValue: "#2f4f4f",
  },
  {
    colorName: "darkturquoise",
    colorValue: "#00ced1",
  },
  {
    colorName: "darkviolet",
    colorValue: "#9400d3",
  },
  {
    colorName: "deeppink",
    colorValue: "#ff1493",
  },
  {
    colorName: "deepskyblue",
    colorValue: "#00bfff",
  },
  {
    colorName: "dimgray",
    colorValue: "#696969",
  },
  {
    colorName: "dimgrey",
    colorValue: "#696969",
  },
  {
    colorName: "dodgerblue",
    colorValue: "#1e90ff",
  },
  {
    colorName: "firebrick",
    colorValue: "#b22222",
  },
  {
    colorName: "floralwhite",
    colorValue: "#fffaf0",
  },
  {
    colorName: "forestgreen",
    colorValue: "#228b22",
  },
  {
    colorName: "fuchsia",
    colorValue: "#ff00ff",
  },
  {
    colorName: "gainsboro",
    colorValue: "#dcdcdc",
  },
  {
    colorName: "ghostwhite",
    colorValue: "#f8f8ff",
  },
  {
    colorName: "goldenrod",
    colorValue: "#daa520",
  },
  {
    colorName: "gold",
    colorValue: "#ffd700",
  },
  {
    colorName: "gray",
    colorValue: "#808080",
  },
  {
    colorName: "green",
    colorValue: "#008000",
  },
  {
    colorName: "greenyellow",
    colorValue: "#adff2f",
  },
  {
    colorName: "grey",
    colorValue: "#808080",
  },
  {
    colorName: "honeydew",
    colorValue: "#f0fff0",
  },
  {
    colorName: "hotpink",
    colorValue: "#ff69b4",
  },
  {
    colorName: "indianred",
    colorValue: "#cd5c5c",
  },
  {
    colorName: "indigo",
    colorValue: "#4b0082",
  },
  {
    colorName: "ivory",
    colorValue: "#fffff0",
  },
  {
    colorName: "khaki",
    colorValue: "#f0e68c",
  },
  {
    colorName: "lavenderblush",
    colorValue: "#fff0f5",
  },
  {
    colorName: "lavender",
    colorValue: "#e6e6fa",
  },
  {
    colorName: "lawngreen",
    colorValue: "#7cfc00",
  },
  {
    colorName: "lemonchiffon",
    colorValue: "#fffacd",
  },
  {
    colorName: "lightblue",
    colorValue: "#add8e6",
  },
  {
    colorName: "lightcoral",
    colorValue: "#f08080",
  },
  {
    colorName: "lightcyan",
    colorValue: "#e0ffff",
  },
  {
    colorName: "lightgoldenrodyellow",
    colorValue: "#fafad2",
  },
  {
    colorName: "lightgray",
    colorValue: "#d3d3d3",
  },
  {
    colorName: "lightgreen",
    colorValue: "#90ee90",
  },
  {
    colorName: "lightgrey",
    colorValue: "#d3d3d3",
  },
  {
    colorName: "lightpink",
    colorValue: "#ffb6c1",
  },
  {
    colorName: "lightsalmon",
    colorValue: "#ffa07a",
  },
  {
    colorName: "lightseagreen",
    colorValue: "#20b2aa",
  },
  {
    colorName: "lightskyblue",
    colorValue: "#87cefa",
  },
  {
    colorName: "lightslategray",
    colorValue: "#778899",
  },
  {
    colorName: "lightslategrey",
    colorValue: "#778899",
  },
  {
    colorName: "lightsteelblue",
    colorValue: "#b0c4de",
  },
  {
    colorName: "lightyellow",
    colorValue: "#ffffe0",
  },
  {
    colorName: "lime",
    colorValue: "#00ff00",
  },
  {
    colorName: "limegreen",
    colorValue: "#32cd32",
  },
  {
    colorName: "linen",
    colorValue: "#faf0e6",
  },
  {
    colorName: "magenta",
    colorValue: "#ff00ff",
  },
  {
    colorName: "maroon",
    colorValue: "#800000",
  },
  {
    colorName: "mediumaquamarine",
    colorValue: "#66cdaa",
  },
  {
    colorName: "mediumblue",
    colorValue: "#0000cd",
  },
  {
    colorName: "mediumorchid",
    colorValue: "#ba55d3",
  },
  {
    colorName: "mediumpurple",
    colorValue: "#9370db",
  },
  {
    colorName: "mediumseagreen",
    colorValue: "#3cb371",
  },
  {
    colorName: "mediumslateblue",
    colorValue: "#7b68ee",
  },
  {
    colorName: "mediumspringgreen",
    colorValue: "#00fa9a",
  },
  {
    colorName: "mediumturquoise",
    colorValue: "#48d1cc",
  },
  {
    colorName: "mediumvioletred",
    colorValue: "#c71585",
  },
  {
    colorName: "midnightblue",
    colorValue: "#191970",
  },
  {
    colorName: "mintcream",
    colorValue: "#f5fffa",
  },
  {
    colorName: "mistyrose",
    colorValue: "#ffe4e1",
  },
  {
    colorName: "moccasin",
    colorValue: "#ffe4b5",
  },
  {
    colorName: "navajowhite",
    colorValue: "#ffdead",
  },
  {
    colorName: "navy",
    colorValue: "#000080",
  },
  {
    colorName: "oldlace",
    colorValue: "#fdf5e6",
  },
  {
    colorName: "olive",
    colorValue: "#808000",
  },
  {
    colorName: "olivedrab",
    colorValue: "#6b8e23",
  },
  {
    colorName: "orange",
    colorValue: "#ffa500",
  },
  {
    colorName: "orangered",
    colorValue: "#ff4500",
  },
  {
    colorName: "orchid",
    colorValue: "#da70d6",
  },
  {
    colorName: "palegoldenrod",
    colorValue: "#eee8aa",
  },
  {
    colorName: "palegreen",
    colorValue: "#98fb98",
  },
  {
    colorName: "paleturquoise",
    colorValue: "#afeeee",
  },
  {
    colorName: "palevioletred",
    colorValue: "#db7093",
  },
  {
    colorName: "papayawhip",
    colorValue: "#ffefd5",
  },
  {
    colorName: "peachpuff",
    colorValue: "#ffdab9",
  },
  {
    colorName: "peru",
    colorValue: "#cd853f",
  },
  {
    colorName: "pink",
    colorValue: "#ffc0cb",
  },
  {
    colorName: "plum",
    colorValue: "#dda0dd",
  },
  {
    colorName: "powderblue",
    colorValue: "#b0e0e6",
  },
  {
    colorName: "purple",
    colorValue: "#800080",
  },
  {
    colorName: "rebeccapurple",
    colorValue: "#663399",
  },
  {
    colorName: "red",
    colorValue: "#ff0000",
  },
  {
    colorName: "rosybrown",
    colorValue: "#bc8f8f",
  },
  {
    colorName: "royalblue",
    colorValue: "#4169e1",
  },
  {
    colorName: "saddlebrown",
    colorValue: "#8b4513",
  },
  {
    colorName: "salmon",
    colorValue: "#fa8072",
  },
  {
    colorName: "sandybrown",
    colorValue: "#f4a460",
  },
  {
    colorName: "seagreen",
    colorValue: "#2e8b57",
  },
  {
    colorName: "seashell",
    colorValue: "#fff5ee",
  },
  {
    colorName: "sienna",
    colorValue: "#a0522d",
  },
  {
    colorName: "silver",
    colorValue: "#c0c0c0",
  },
  {
    colorName: "skyblue",
    colorValue: "#87ceeb",
  },
  {
    colorName: "slateblue",
    colorValue: "#6a5acd",
  },
  {
    colorName: "slategray",
    colorValue: "#708090",
  },
  {
    colorName: "slategrey",
    colorValue: "#708090",
  },
  {
    colorName: "snow",
    colorValue: "#fffafa",
  },
  {
    colorName: "springgreen",
    colorValue: "#00ff7f",
  },
  {
    colorName: "steelblue",
    colorValue: "#4682b4",
  },
  {
    colorName: "tan",
    colorValue: "#d2b48c",
  },
  {
    colorName: "teal",
    colorValue: "#008080",
  },
  {
    colorName: "thistle",
    colorValue: "#d8bfd8",
  },
  {
    colorName: "tomato",
    colorValue: "#ff6347",
  },
  {
    colorName: "turquoise",
    colorValue: "#40e0d0",
  },
  {
    colorName: "violet",
    colorValue: "#ee82ee",
  },
  {
    colorName: "wheat",
    colorValue: "#f5deb3",
  },
  {
    colorName: "white",
    colorValue: "#ffffff",
  },
  {
    colorName: "whitesmoke",
    colorValue: "#f5f5f5",
  },
  {
    colorName: "yellow",
    colorValue: "#ffff00",
  },
  {
    colorName: "yellowgreen",
    colorValue: "#9acd32",
  },
];


export default cssColors;