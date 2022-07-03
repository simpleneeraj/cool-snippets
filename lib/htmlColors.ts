const htmlColors = [
  {
    colorName: "1C Enterprise",
    colorValue: "#814CCC",
  },
  {
    colorName: "4D",
    colorValue: "#004289",
  },
  {
    colorName: "ABAP",
    colorValue: "#E8274B",
  },
  {
    colorName: "ABAP CDS",
    colorValue: "#555e25",
  },
  {
    colorName: "ActionScript",
    colorValue: "#882B0F",
  },
  {
    colorName: "Ada",
    colorValue: "#02f88c",
  },
  {
    colorName: "Adobe Font Metrics",
    colorValue: "#fa0f00",
  },
  {
    colorName: "Agda",
    colorValue: "#315665",
  },
  {
    colorName: "AGS Script",
    colorValue: "#B9D9FF",
  },
  {
    colorName: "AIDL",
    colorValue: "#34EB6B",
  },
  {
    colorName: "AL",
    colorValue: "#3AA2B5",
  },
  {
    colorName: "Alloy",
    colorValue: "#64C800",
  },
  {
    colorName: "Alpine Abuild",
    colorValue: "#0D597F",
  },
  {
    colorName: "Altium Designer",
    colorValue: "#A89663",
  },
  {
    colorName: "AMPL",
    colorValue: "#E6EFBB",
  },
  {
    colorName: "AngelScript",
    colorValue: "#C7D7DC",
  },
  {
    colorName: "Ant Build System",
    colorValue: "#A9157E",
  },
  {
    colorName: "ANTLR",
    colorValue: "#9DC3FF",
  },
  {
    colorName: "ApacheConf",
    colorValue: "#d12127",
  },
  {
    colorName: "Apex",
    colorValue: "#1797c0",
  },
  {
    colorName: "API Blueprint",
    colorValue: "#2ACCA8",
  },
  {
    colorName: "APL",
    colorValue: "#5A8164",
  },
  {
    colorName: "Apollo Guidance Computer",
    colorValue: "#0B3D91",
  },
  {
    colorName: "AppleScript",
    colorValue: "#101F1F",
  },
  {
    colorName: "Arc",
    colorValue: "#aa2afe",
  },
  {
    colorName: "AsciiDoc",
    colorValue: "#73a0c5",
  },
  {
    colorName: "ASP.NET",
    colorValue: "#9400ff",
  },
  {
    colorName: "AspectJ",
    colorValue: "#a957b0",
  },
  {
    colorName: "Assembly",
    colorValue: "#6E4C13",
  },
  {
    colorName: "Astro",
    colorValue: "#ff5a03",
  },
  {
    colorName: "Asymptote",
    colorValue: "#ff0000",
  },
  {
    colorName: "ATS",
    colorValue: "#1ac620",
  },
  {
    colorName: "Augeas",
    colorValue: "#9CC134",
  },
  {
    colorName: "AutoHotkey",
    colorValue: "#6594b9",
  },
  {
    colorName: "AutoIt",
    colorValue: "#1C3552",
  },
  {
    colorName: "Avro IDL",
    colorValue: "#0040FF",
  },
  {
    colorName: "Awk",
    colorValue: "#c30e9b",
  },
  {
    colorName: "Ballerina",
    colorValue: "#FF5000",
  },
  {
    colorName: "BASIC",
    colorValue: "#ff0000",
  },
  {
    colorName: "Batchfile",
    colorValue: "#C1F12E",
  },
  {
    colorName: "Beef",
    colorValue: "#a52f4e",
  },
  {
    colorName: "BibTeX",
    colorValue: "#778899",
  },
  {
    colorName: "Bicep",
    colorValue: "#519aba",
  },
  {
    colorName: "Bison",
    colorValue: "#6A463F",
  },
  {
    colorName: "BitBake",
    colorValue: "#00bce4",
  },
  {
    colorName: "Blade",
    colorValue: "#f7523f",
  },
  {
    colorName: "BlitzBasic",
    colorValue: "#00FFAE",
  },
  {
    colorName: "BlitzMax",
    colorValue: "#cd6400",
  },
  {
    colorName: "Bluespec",
    colorValue: "#12223c",
  },
  {
    colorName: "Boo",
    colorValue: "#d4bec1",
  },
  {
    colorName: "Boogie",
    colorValue: "#c80fa0",
  },
  {
    colorName: "Brainfuck",
    colorValue: "#2F2530",
  },
  {
    colorName: "Brightscript",
    colorValue: "#662D91",
  },
  {
    colorName: "Browserslist",
    colorValue: "#ffd539",
  },
  {
    colorName: "C",
    colorValue: "#555555",
  },
  {
    colorName: "C#",
    colorValue: "#178600",
  },
  {
    colorName: "C++",
    colorValue: "#f34b7d",
  },
  {
    colorName: "Cabal Config",
    colorValue: "#483465",
  },
  {
    colorName: "Cap'n Proto",
    colorValue: "#c42727",
  },
  {
    colorName: "Ceylon",
    colorValue: "#dfa535",
  },
  {
    colorName: "Chapel",
    colorValue: "#8dc63f",
  },
  {
    colorName: "ChucK",
    colorValue: "#3f8000",
  },
  {
    colorName: "Cirru",
    colorValue: "#ccccff",
  },
  {
    colorName: "Clarion",
    colorValue: "#db901e",
  },
  {
    colorName: "Classic ASP",
    colorValue: "#6a40fd",
  },
  {
    colorName: "Clean",
    colorValue: "#3F85AF",
  },
  {
    colorName: "Click",
    colorValue: "#E4E6F3",
  },
  {
    colorName: "CLIPS",
    colorValue: "#00A300",
  },
  {
    colorName: "Clojure",
    colorValue: "#db5855",
  },
  {
    colorName: "Closure Templates",
    colorValue: "#0d948f",
  },
  {
    colorName: "Cloud Firestore Security Rules",
    colorValue: "#FFA000",
  },
  {
    colorName: "CMake",
    colorValue: "#DA3434",
  },
  {
    colorName: "CodeQL",
    colorValue: "#140f46",
  },
  {
    colorName: "CoffeeScript",
    colorValue: "#244776",
  },
  {
    colorName: "ColdFusion",
    colorValue: "#ed2cd6",
  },
  {
    colorName: "ColdFusion CFC",
    colorValue: "#ed2cd6",
  },
  {
    colorName: "COLLADA",
    colorValue: "#F1A42B",
  },
  {
    colorName: "Common Lisp",
    colorValue: "#3fb68b",
  },
  {
    colorName: "Common Workflow Language",
    colorValue: "#B5314C",
  },
  {
    colorName: "Component Pascal",
    colorValue: "#B0CE4E",
  },
  {
    colorName: "Coq",
    colorValue: "#d0b68c",
  },
  {
    colorName: "Crystal",
    colorValue: "#000100",
  },
  {
    colorName: "CSON",
    colorValue: "#244776",
  },
  {
    colorName: "Csound",
    colorValue: "#1a1a1a",
  },
  {
    colorName: "Csound Document",
    colorValue: "#1a1a1a",
  },
  {
    colorName: "Csound Score",
    colorValue: "#1a1a1a",
  },
  {
    colorName: "CSS",
    colorValue: "#563d7c",
  },
  {
    colorName: "CSV",
    colorValue: "#237346",
  },
  {
    colorName: "Cuda",
    colorValue: "#3A4E3A",
  },
  {
    colorName: "CUE",
    colorValue: "#5886E1",
  },
  {
    colorName: "CWeb",
    colorValue: "#00007a",
  },
  {
    colorName: "Cython",
    colorValue: "#fedf5b",
  },
  {
    colorName: "D",
    colorValue: "#ba595e",
  },
  {
    colorName: "Dafny",
    colorValue: "#FFEC25",
  },
  {
    colorName: "Darcs Patch",
    colorValue: "#8eff23",
  },
  {
    colorName: "Dart",
    colorValue: "#00B4AB",
  },
  {
    colorName: "DataWeave",
    colorValue: "#003a52",
  },
  {
    colorName: "Dhall",
    colorValue: "#dfafff",
  },
  {
    colorName: "DirectX 3D File",
    colorValue: "#aace60",
  },
  {
    colorName: "DM",
    colorValue: "#447265",
  },
  {
    colorName: "Dockerfile",
    colorValue: "#384d54",
  },
  {
    colorName: "Dogescript",
    colorValue: "#cca760",
  },
  {
    colorName: "Dylan",
    colorValue: "#6c616e",
  },
  {
    colorName: "E",
    colorValue: "#ccce35",
  },
  {
    colorName: "Earthly",
    colorValue: "#2af0ff",
  },
  {
    colorName: "Easybuild",
    colorValue: "#069406",
  },
  {
    colorName: "eC",
    colorValue: "#913960",
  },
  {
    colorName: "Ecere Projects",
    colorValue: "#913960",
  },
  {
    colorName: "ECL",
    colorValue: "#8a1267",
  },
  {
    colorName: "ECLiPSe",
    colorValue: "#001d9d",
  },
  {
    colorName: "EditorConfig",
    colorValue: "#fff1f2",
  },
  {
    colorName: "Eiffel",
    colorValue: "#4d6977",
  },
  {
    colorName: "EJS",
    colorValue: "#a91e50",
  },
  {
    colorName: "Elixir",
    colorValue: "#6e4a7e",
  },
  {
    colorName: "Elm",
    colorValue: "#60B5CC",
  },
  {
    colorName: "Emacs Lisp",
    colorValue: "#c065db",
  },
  {
    colorName: "EmberScript",
    colorValue: "#FFF4F3",
  },
  {
    colorName: "EQ",
    colorValue: "#a78649",
  },
  {
    colorName: "Erlang",
    colorValue: "#B83998",
  },
  {
    colorName: "F#",
    colorValue: "#b845fc",
  },
  {
    colorName: "F*",
    colorValue: "#572e30",
  },
  {
    colorName: "Factor",
    colorValue: "#636746",
  },
  {
    colorName: "Fancy",
    colorValue: "#7b9db4",
  },
  {
    colorName: "Fantom",
    colorValue: "#14253c",
  },
  {
    colorName: "Faust",
    colorValue: "#c37240",
  },
  {
    colorName: "Fennel",
    colorValue: "#fff3d7",
  },
  {
    colorName: "FIGlet Font",
    colorValue: "#FFDDBB",
  },
  {
    colorName: "Filebench WML",
    colorValue: "#F6B900",
  },
  {
    colorName: "fish",
    colorValue: "#4aae47",
  },
  {
    colorName: "Fluent",
    colorValue: "#ffcc33",
  },
  {
    colorName: "FLUX",
    colorValue: "#88ccff",
  },
  {
    colorName: "Forth",
    colorValue: "#341708",
  },
  {
    colorName: "Fortran",
    colorValue: "#4d41b1",
  },
  {
    colorName: "Fortran Free Form",
    colorValue: "#4d41b1",
  },
  {
    colorName: "FreeBasic",
    colorValue: "#867db1",
  },
  {
    colorName: "FreeMarker",
    colorValue: "#0050b2",
  },
  {
    colorName: "Frege",
    colorValue: "#00cafe",
  },
  {
    colorName: "Futhark",
    colorValue: "#5f021f",
  },
  {
    colorName: "G-code",
    colorValue: "#D08CF2",
  },
  {
    colorName: "Game Maker Language",
    colorValue: "#71b417",
  },
  {
    colorName: "GAML",
    colorValue: "#FFC766",
  },
  {
    colorName: "GAMS",
    colorValue: "#f49a22",
  },
  {
    colorName: "GAP",
    colorValue: "#0000cc",
  },
  {
    colorName: "GCC Machine Description",
    colorValue: "#FFCFAB",
  },
  {
    colorName: "GDScript",
    colorValue: "#355570",
  },
  {
    colorName: "GEDCOM",
    colorValue: "#003058",
  },
  {
    colorName: "Gemfile.lock",
    colorValue: "#701516",
  },
  {
    colorName: "Genie",
    colorValue: "#fb855d",
  },
  {
    colorName: "Genshi",
    colorValue: "#951531",
  },
  {
    colorName: "Gentoo Ebuild",
    colorValue: "#9400ff",
  },
  {
    colorName: "Gentoo Eclass",
    colorValue: "#9400ff",
  },
  {
    colorName: "Gerber Image",
    colorValue: "#d20b00",
  },
  {
    colorName: "Gherkin",
    colorValue: "#5B2063",
  },
  {
    colorName: "Git Attributes",
    colorValue: "#F44D27",
  },
  {
    colorName: "Git Config",
    colorValue: "#F44D27",
  },
  {
    colorName: "GLSL",
    colorValue: "#5686a5",
  },
  {
    colorName: "Glyph",
    colorValue: "#c1ac7f",
  },
  {
    colorName: "Gnuplot",
    colorValue: "#f0a9f0",
  },
  {
    colorName: "Go",
    colorValue: "#00ADD8",
  },
  {
    colorName: "Go Checksums",
    colorValue: "#00ADD8",
  },
  {
    colorName: "Go Module",
    colorValue: "#00ADD8",
  },
  {
    colorName: "Golo",
    colorValue: "#88562A",
  },
  {
    colorName: "Gosu",
    colorValue: "#82937f",
  },
  {
    colorName: "Grace",
    colorValue: "#615f8b",
  },
  {
    colorName: "Gradle",
    colorValue: "#02303a",
  },
  {
    colorName: "Grammatical Framework",
    colorValue: "#ff0000",
  },
  {
    colorName: "GraphQL",
    colorValue: "#e10098",
  },
  {
    colorName: "Graphviz (DOT)",
    colorValue: "#2596be",
  },
  {
    colorName: "Groovy",
    colorValue: "#4298b8",
  },
  {
    colorName: "Groovy Server Pages",
    colorValue: "#4298b8",
  },
  {
    colorName: "Hack",
    colorValue: "#878787",
  },
  {
    colorName: "Haml",
    colorValue: "#ece2a9",
  },
  {
    colorName: "Handlebars",
    colorValue: "#f7931e",
  },
  {
    colorName: "HAProxy",
    colorValue: "#106da9",
  },
  {
    colorName: "Harbour",
    colorValue: "#0e60e3",
  },
  {
    colorName: "Haskell",
    colorValue: "#5e5086",
  },
  {
    colorName: "Haxe",
    colorValue: "#df7900",
  },
  {
    colorName: "HiveQL",
    colorValue: "#dce200",
  },
  {
    colorName: "HLSL",
    colorValue: "#aace60",
  },
  {
    colorName: "HolyC",
    colorValue: "#ffefaf",
  },
  {
    colorName: "HTML",
    colorValue: "#e34c26",
  },
  {
    colorName: "HTML+ECR",
    colorValue: "#2e1052",
  },
  {
    colorName: "HTML+EEX",
    colorValue: "#6e4a7e",
  },
  {
    colorName: "HTML+ERB",
    colorValue: "#701516",
  },
  {
    colorName: "HTML+PHP",
    colorValue: "#4f5d95",
  },
  {
    colorName: "HTML+Razor",
    colorValue: "#512be4",
  },
  {
    colorName: "HTTP",
    colorValue: "#005C9C",
  },
  {
    colorName: "HXML",
    colorValue: "#f68712",
  },
  {
    colorName: "Hy",
    colorValue: "#7790B2",
  },
  {
    colorName: "IDL",
    colorValue: "#a3522f",
  },
  {
    colorName: "Idris",
    colorValue: "#b30000",
  },
  {
    colorName: "Ignore List",
    colorValue: "#000000",
  },
  {
    colorName: "IGOR Pro",
    colorValue: "#0000cc",
  },
  {
    colorName: "ImageJ Macro",
    colorValue: "#99AAFF",
  },
  {
    colorName: "INI",
    colorValue: "#d1dbe0",
  },
  {
    colorName: "Inno Setup",
    colorValue: "#264b99",
  },
  {
    colorName: "Io",
    colorValue: "#a9188d",
  },
  {
    colorName: "Ioke",
    colorValue: "#078193",
  },
  {
    colorName: "Isabelle",
    colorValue: "#FEFE00",
  },
  {
    colorName: "Isabelle ROOT",
    colorValue: "#FEFE00",
  },
  {
    colorName: "J",
    colorValue: "#9EEDFF",
  },
  {
    colorName: "JAR Manifest",
    colorValue: "#b07219",
  },
  {
    colorName: "Jasmin",
    colorValue: "#d03600",
  },
  {
    colorName: "Java",
    colorValue: "#b07219",
  },
  {
    colorName: "Java Properties",
    colorValue: "#2A6277",
  },
  {
    colorName: "Java Server Pages",
    colorValue: "#2A6277",
  },
  {
    colorName: "JavaScript",
    colorValue: "#f1e05a",
  },
  {
    colorName: "JavaScript+ERB",
    colorValue: "#f1e05a",
  },
  {
    colorName: "Jest Snapshot",
    colorValue: "#15c213",
  },
  {
    colorName: "JFlex",
    colorValue: "#DBCA00",
  },
  {
    colorName: "Jinja",
    colorValue: "#a52a22",
  },
  {
    colorName: "Jison",
    colorValue: "#56b3cb",
  },
  {
    colorName: "Jison Lex",
    colorValue: "#56b3cb",
  },
  {
    colorName: "Jolie",
    colorValue: "#843179",
  },
  {
    colorName: "jq",
    colorValue: "#c7254e",
  },
  {
    colorName: "JSON",
    colorValue: "#292929",
  },
  {
    colorName: "JSON with Comments",
    colorValue: "#292929",
  },
  {
    colorName: "JSON5",
    colorValue: "#267CB9",
  },
  {
    colorName: "JSONiq",
    colorValue: "#40d47e",
  },
  {
    colorName: "JSONLD",
    colorValue: "#0c479c",
  },
  {
    colorName: "Jsonnet",
    colorValue: "#0064bd",
  },
  {
    colorName: "Julia",
    colorValue: "#a270ba",
  },
  {
    colorName: "Jupyter Notebook",
    colorValue: "#DA5B0B",
  },
  {
    colorName: "Kaitai Struct",
    colorValue: "#773b37",
  },
  {
    colorName: "KakouneScript",
    colorValue: "#6f8042",
  },
  {
    colorName: "KiCad Layout",
    colorValue: "#2f4aab",
  },
  {
    colorName: "KiCad Legacy Layout",
    colorValue: "#2f4aab",
  },
  {
    colorName: "KiCad Schematic",
    colorValue: "#2f4aab",
  },
  {
    colorName: "Kotlin",
    colorValue: "#A97BFF",
  },
  {
    colorName: "KRL",
    colorValue: "#28430A",
  },
  {
    colorName: "LabVIEW",
    colorValue: "#fede06",
  },
  {
    colorName: "Lark",
    colorValue: "#2980B9",
  },
  {
    colorName: "Lasso",
    colorValue: "#999999",
  },
  {
    colorName: "Latte",
    colorValue: "#f2a542",
  },
  {
    colorName: "Less",
    colorValue: "#1d365d",
  },
  {
    colorName: "Lex",
    colorValue: "#DBCA00",
  },
  {
    colorName: "LFE",
    colorValue: "#4C3023",
  },
  {
    colorName: "LilyPond",
    colorValue: "#9ccc7c",
  },
  {
    colorName: "Liquid",
    colorValue: "#67b8de",
  },
  {
    colorName: "Literate Agda",
    colorValue: "#315665",
  },
  {
    colorName: "Literate CoffeeScript",
    colorValue: "#244776",
  },
  {
    colorName: "Literate Haskell",
    colorValue: "#5e5086",
  },
  {
    colorName: "LiveScript",
    colorValue: "#499886",
  },
  {
    colorName: "LLVM",
    colorValue: "#185619",
  },
  {
    colorName: "Logtalk",
    colorValue: "#295b9a",
  },
  {
    colorName: "LOLCODE",
    colorValue: "#cc9900",
  },
  {
    colorName: "LookML",
    colorValue: "#652B81",
  },
  {
    colorName: "LSL",
    colorValue: "#3d9970",
  },
  {
    colorName: "Lua",
    colorValue: "#000080",
  },
  {
    colorName: "Macaulay2",
    colorValue: "#d8ffff",
  },
  {
    colorName: "Makefile",
    colorValue: "#427819",
  },
  {
    colorName: "Mako",
    colorValue: "#7e858d",
  },
  {
    colorName: "Markdown",
    colorValue: "#083fa1",
  },
  {
    colorName: "Marko",
    colorValue: "#42bff2",
  },
  {
    colorName: "Mask",
    colorValue: "#f97732",
  },
  {
    colorName: "Mathematica",
    colorValue: "#dd1100",
  },
  {
    colorName: "MATLAB",
    colorValue: "#e16737",
  },
  {
    colorName: "Max",
    colorValue: "#c4a79c",
  },
  {
    colorName: "MAXScript",
    colorValue: "#00a6a6",
  },
  {
    colorName: "mcfunction",
    colorValue: "#E22837",
  },
  {
    colorName: "Mercury",
    colorValue: "#ff2b2b",
  },
  {
    colorName: "Meson",
    colorValue: "#007800",
  },
  {
    colorName: "Metal",
    colorValue: "#8f14e9",
  },
  {
    colorName: "Mirah",
    colorValue: "#c7a938",
  },
  {
    colorName: "mIRC Script",
    colorValue: "#3d57c3",
  },
  {
    colorName: "MLIR",
    colorValue: "#5EC8DB",
  },
  {
    colorName: "Modelica",
    colorValue: "#de1d31",
  },
  {
    colorName: "Modula-2",
    colorValue: "#10253f",
  },
  {
    colorName: "Modula-3",
    colorValue: "#223388",
  },
  {
    colorName: "MoonScript",
    colorValue: "#ff4585",
  },
  {
    colorName: "Motoko",
    colorValue: "#fbb03b",
  },
  {
    colorName: "Motorola 68K Assembly",
    colorValue: "#005daa",
  },
  {
    colorName: "MQL4",
    colorValue: "#62A8D6",
  },
  {
    colorName: "MQL5",
    colorValue: "#4A76B8",
  },
  {
    colorName: "MTML",
    colorValue: "#b7e1f4",
  },
  {
    colorName: "mupad",
    colorValue: "#244963",
  },
  {
    colorName: "Mustache",
    colorValue: "#724b3b",
  },
  {
    colorName: "nanorc",
    colorValue: "#2d004d",
  },
  {
    colorName: "NCL",
    colorValue: "#28431f",
  },
  {
    colorName: "Nearley",
    colorValue: "#990000",
  },
  {
    colorName: "Nemerle",
    colorValue: "#3d3c6e",
  },
  {
    colorName: "nesC",
    colorValue: "#94B0C7",
  },
  {
    colorName: "NetLinx",
    colorValue: "#0aa0ff",
  },
  {
    colorName: "NetLinx+ERB",
    colorValue: "#747faa",
  },
  {
    colorName: "NetLogo",
    colorValue: "#ff6375",
  },
  {
    colorName: "NewLisp",
    colorValue: "#87AED7",
  },
  {
    colorName: "Nextflow",
    colorValue: "#3ac486",
  },
  {
    colorName: "Nginx",
    colorValue: "#009639",
  },
  {
    colorName: "Nim",
    colorValue: "#ffc200",
  },
  {
    colorName: "Nit",
    colorValue: "#009917",
  },
  {
    colorName: "Nix",
    colorValue: "#7e7eff",
  },
  {
    colorName: "NPM Config",
    colorValue: "#cb3837",
  },
  {
    colorName: "Nu",
    colorValue: "#c9df40",
  },
  {
    colorName: "NumPy",
    colorValue: "#9C8AF9",
  },
  {
    colorName: "Nunjucks",
    colorValue: "#3d8137",
  },
  {
    colorName: "NWScript",
    colorValue: "#111522",
  },
  {
    colorName: "Objective-C",
    colorValue: "#438eff",
  },
  {
    colorName: "Objective-C++",
    colorValue: "#6866fb",
  },
  {
    colorName: "Objective-J",
    colorValue: "#ff0c5a",
  },
  {
    colorName: "ObjectScript",
    colorValue: "#424893",
  },
  {
    colorName: "OCaml",
    colorValue: "#3be133",
  },
  {
    colorName: "Odin",
    colorValue: "#60AFFE",
  },
  {
    colorName: "Omgrofl",
    colorValue: "#cabbff",
  },
  {
    colorName: "ooc",
    colorValue: "#b0b77e",
  },
  {
    colorName: "Opal",
    colorValue: "#f7ede0",
  },
  {
    colorName: "Open Policy Agent",
    colorValue: "#7d9199",
  },
  {
    colorName: "OpenCL",
    colorValue: "#ed2e2d",
  },
  {
    colorName: "OpenEdge ABL",
    colorValue: "#5ce600",
  },
  {
    colorName: "OpenQASM",
    colorValue: "#AA70FF",
  },
  {
    colorName: "OpenSCAD",
    colorValue: "#e5cd45",
  },
  {
    colorName: "Org",
    colorValue: "#77aa99",
  },
  {
    colorName: "Oxygene",
    colorValue: "#cdd0e3",
  },
  {
    colorName: "Oz",
    colorValue: "#fab738",
  },
  {
    colorName: "P4",
    colorValue: "#7055b5",
  },
  {
    colorName: "Pan",
    colorValue: "#cc0000",
  },
  {
    colorName: "Papyrus",
    colorValue: "#6600cc",
  },
  {
    colorName: "Parrot",
    colorValue: "#f3ca0a",
  },
  {
    colorName: "Pascal",
    colorValue: "#E3F171",
  },
  {
    colorName: "Pawn",
    colorValue: "#dbb284",
  },
  {
    colorName: "PEG.js",
    colorValue: "#234d6b",
  },
  {
    colorName: "Pep8",
    colorValue: "#C76F5B",
  },
  {
    colorName: "Perl",
    colorValue: "#0298c3",
  },
  {
    colorName: "PHP",
    colorValue: "#4F5D95",
  },
  {
    colorName: "PicoLisp",
    colorValue: "#6067af",
  },
  {
    colorName: "PigLatin",
    colorValue: "#fcd7de",
  },
  {
    colorName: "Pike",
    colorValue: "#005390",
  },
  {
    colorName: "PLpgSQL",
    colorValue: "#336790",
  },
  {
    colorName: "PLSQL",
    colorValue: "#dad8d8",
  },
  {
    colorName: "PogoScript",
    colorValue: "#d80074",
  },
  {
    colorName: "PostCSS",
    colorValue: "#dc3a0c",
  },
  {
    colorName: "PostScript",
    colorValue: "#da291c",
  },
  {
    colorName: "POV-Ray SDL",
    colorValue: "#6bac65",
  },
  {
    colorName: "PowerBuilder",
    colorValue: "#8f0f8d",
  },
  {
    colorName: "PowerShell",
    colorValue: "#012456",
  },
  {
    colorName: "Prisma",
    colorValue: "#0c344b",
  },
  {
    colorName: "Processing",
    colorValue: "#0096D8",
  },
  {
    colorName: "Prolog",
    colorValue: "#74283c",
  },
  {
    colorName: "Promela",
    colorValue: "#de0000",
  },
  {
    colorName: "Propeller Spin",
    colorValue: "#7fa2a7",
  },
  {
    colorName: "Pug",
    colorValue: "#a86454",
  },
  {
    colorName: "Puppet",
    colorValue: "#302B6D",
  },
  {
    colorName: "PureBasic",
    colorValue: "#5a6986",
  },
  {
    colorName: "PureScript",
    colorValue: "#1D222D",
  },
  {
    colorName: "Python",
    colorValue: "#3572A5",
  },
  {
    colorName: "Python console",
    colorValue: "#3572A5",
  },
  {
    colorName: "Python traceback",
    colorValue: "#3572A5",
  },
  {
    colorName: "q",
    colorValue: "#0040cd",
  },
  {
    colorName: "Q#",
    colorValue: "#fed659",
  },
  {
    colorName: "QML",
    colorValue: "#44a51c",
  },
  {
    colorName: "Qt Script",
    colorValue: "#00b841",
  },
  {
    colorName: "Quake",
    colorValue: "#882233",
  },
  {
    colorName: "R",
    colorValue: "#198CE7",
  },
  {
    colorName: "Racket",
    colorValue: "#3c5caa",
  },
  {
    colorName: "Ragel",
    colorValue: "#9d5200",
  },
  {
    colorName: "Raku",
    colorValue: "#0000fb",
  },
  {
    colorName: "RAML",
    colorValue: "#77d9fb",
  },
  {
    colorName: "Rascal",
    colorValue: "#fffaa0",
  },
  {
    colorName: "RDoc",
    colorValue: "#701516",
  },
  {
    colorName: "Reason",
    colorValue: "#ff5847",
  },
  {
    colorName: "Rebol",
    colorValue: "#358a5b",
  },
  {
    colorName: "Record Jar",
    colorValue: "#0673ba",
  },
  {
    colorName: "Red",
    colorValue: "#f50000",
  },
  {
    colorName: "Regular Expression",
    colorValue: "#009a00",
  },
  {
    colorName: "Ren'Py",
    colorValue: "#ff7f7f",
  },
  {
    colorName: "ReScript",
    colorValue: "#ed5051",
  },
  {
    colorName: "reStructuredText",
    colorValue: "#141414",
  },
  {
    colorName: "REXX",
    colorValue: "#d90e09",
  },
  {
    colorName: "Ring",
    colorValue: "#2D54CB",
  },
  {
    colorName: "Riot",
    colorValue: "#A71E49",
  },
  {
    colorName: "RMarkdown",
    colorValue: "#198ce7",
  },
  {
    colorName: "RobotFramework",
    colorValue: "#00c0b5",
  },
  {
    colorName: "Roff",
    colorValue: "#ecdebe",
  },
  {
    colorName: "Roff Manpage",
    colorValue: "#ecdebe",
  },
  {
    colorName: "Rouge",
    colorValue: "#cc0088",
  },
  {
    colorName: "Ruby",
    colorValue: "#701516",
  },
  {
    colorName: "RUNOFF",
    colorValue: "#665a4e",
  },
  {
    colorName: "Rust",
    colorValue: "#dea584",
  },
  {
    colorName: "SaltStack",
    colorValue: "#646464",
  },
  {
    colorName: "SAS",
    colorValue: "#B34936",
  },
  {
    colorName: "Sass",
    colorValue: "#a53b70",
  },
  {
    colorName: "Scala",
    colorValue: "#c22d40",
  },
  {
    colorName: "Scaml",
    colorValue: "#bd181a",
  },
  {
    colorName: "Scheme",
    colorValue: "#1e4aec",
  },
  {
    colorName: "Scilab",
    colorValue: "#ca0f21",
  },
  {
    colorName: "SCSS",
    colorValue: "#c6538c",
  },
  {
    colorName: "sed",
    colorValue: "#64b970",
  },
  {
    colorName: "Self",
    colorValue: "#0579aa",
  },
  {
    colorName: "ShaderLab",
    colorValue: "#222c37",
  },
  {
    colorName: "Shell",
    colorValue: "#89e051",
  },
  {
    colorName: "ShellCheck Config",
    colorValue: "#cecfcb",
  },
  {
    colorName: "Shen",
    colorValue: "#120F14",
  },
  {
    colorName: "Singularity",
    colorValue: "#64E6AD",
  },
  {
    colorName: "Slash",
    colorValue: "#007eff",
  },
  {
    colorName: "Slice",
    colorValue: "#003fa2",
  },
  {
    colorName: "Slim",
    colorValue: "#2b2b2b",
  },
  {
    colorName: "Smalltalk",
    colorValue: "#596706",
  },
  {
    colorName: "Smarty",
    colorValue: "#f0c040",
  },
  {
    colorName: "SmPL",
    colorValue: "#c94949",
  },
  {
    colorName: "Solidity",
    colorValue: "#AA6746",
  },
  {
    colorName: "SourcePawn",
    colorValue: "#f69e1d",
  },
  {
    colorName: "SPARQL",
    colorValue: "#0C4597",
  },
  {
    colorName: "SQF",
    colorValue: "#3F3F3F",
  },
  {
    colorName: "SQL",
    colorValue: "#e38c00",
  },
  {
    colorName: "SQLPL",
    colorValue: "#e38c00",
  },
  {
    colorName: "Squirrel",
    colorValue: "#800000",
  },
  {
    colorName: "SRecode Template",
    colorValue: "#348a34",
  },
  {
    colorName: "Stan",
    colorValue: "#b2011d",
  },
  {
    colorName: "Standard ML",
    colorValue: "#dc566d",
  },
  {
    colorName: "Starlark",
    colorValue: "#76d275",
  },
  {
    colorName: "Stata",
    colorValue: "#1a5f91",
  },
  {
    colorName: "StringTemplate",
    colorValue: "#3fb34f",
  },
  {
    colorName: "Stylus",
    colorValue: "#ff6347",
  },
  {
    colorName: "SubRip Text",
    colorValue: "#9e0101",
  },
  {
    colorName: "SugarSS",
    colorValue: "#2fcc9f",
  },
  {
    colorName: "SuperCollider",
    colorValue: "#46390b",
  },
  {
    colorName: "Svelte",
    colorValue: "#ff3e00",
  },
  {
    colorName: "SVG",
    colorValue: "#ff9900",
  },
  {
    colorName: "Swift",
    colorValue: "#F05138",
  },
  {
    colorName: "SystemVerilog",
    colorValue: "#DAE1C2",
  },
  {
    colorName: "Tcl",
    colorValue: "#e4cc98",
  },
  {
    colorName: "Terra",
    colorValue: "#00004c",
  },
  {
    colorName: "TeX",
    colorValue: "#3D6117",
  },
  {
    colorName: "Textile",
    colorValue: "#ffe7ac",
  },
  {
    colorName: "TextMate Properties",
    colorValue: "#df66e4",
  },
  {
    colorName: "Thrift",
    colorValue: "#D12127",
  },
  {
    colorName: "TI Program",
    colorValue: "#A0AA87",
  },
  {
    colorName: "TLA",
    colorValue: "#4b0079",
  },
  {
    colorName: "TOML",
    colorValue: "#9c4221",
  },
  {
    colorName: "TSQL",
    colorValue: "#e38c00",
  },
  {
    colorName: "TSV",
    colorValue: "#237346",
  },
  {
    colorName: "TSX",
    colorValue: "#2b7489",
  },
  {
    colorName: "Turing",
    colorValue: "#cf142b",
  },
  {
    colorName: "Twig",
    colorValue: "#c1d026",
  },
  {
    colorName: "TXL",
    colorValue: "#0178b8",
  },
  {
    colorName: "TypeScript",
    colorValue: "#2b7489",
  },
  {
    colorName: "Unified Parallel C",
    colorValue: "#4e3617",
  },
  {
    colorName: "Unity3D Asset",
    colorValue: "#222c37",
  },
  {
    colorName: "Uno",
    colorValue: "#9933cc",
  },
  {
    colorName: "UnrealScript",
    colorValue: "#a54c4d",
  },
  {
    colorName: "UrWeb",
    colorValue: "#ccccee",
  },
  {
    colorName: "V",
    colorValue: "#4f87c4",
  },
  {
    colorName: "Vala",
    colorValue: "#fbe5cd",
  },
  {
    colorName: "Valve Data Format",
    colorValue: "#f26025",
  },
  {
    colorName: "VBA",
    colorValue: "#867db1",
  },
  {
    colorName: "VBScript",
    colorValue: "#15dcdc",
  },
  {
    colorName: "VCL",
    colorValue: "#148AA8",
  },
  {
    colorName: "Verilog",
    colorValue: "#b2b7f8",
  },
  {
    colorName: "VHDL",
    colorValue: "#adb2cb",
  },
  {
    colorName: "Vim Help File",
    colorValue: "#199f4b",
  },
  {
    colorName: "Vim Script",
    colorValue: "#199f4b",
  },
  {
    colorName: "Vim Snippet",
    colorValue: "#199f4b",
  },
  {
    colorName: "Visual Basic .NET",
    colorValue: "#945db7",
  },
  {
    colorName: "Volt",
    colorValue: "#1F1F1F",
  },
  {
    colorName: "Vue",
    colorValue: "#41b883",
  },
  {
    colorName: "wdl",
    colorValue: "#42f1f4",
  },
  {
    colorName: "Web Ontology Language",
    colorValue: "#5b70bd",
  },
  {
    colorName: "WebAssembly",
    colorValue: "#04133b",
  },
  {
    colorName: "Wikitext",
    colorValue: "#fc5757",
  },
  {
    colorName: "Windows Registry Entries",
    colorValue: "#52d5ff",
  },
  {
    colorName: "wisp",
    colorValue: "#7582D1",
  },
  {
    colorName: "Wollok",
    colorValue: "#a23738",
  },
  {
    colorName: "World of Warcraft Addon Data",
    colorValue: "#f7e43f",
  },
  {
    colorName: "X10",
    colorValue: "#4B6BEF",
  },
  {
    colorName: "xBase",
    colorValue: "#403a40",
  },
  {
    colorName: "XC",
    colorValue: "#99DA07",
  },
  {
    colorName: "XML",
    colorValue: "#0060ac",
  },
  {
    colorName: "XML Property List",
    colorValue: "#0060ac",
  },
  {
    colorName: "Xojo",
    colorValue: "#81bd41",
  },
  {
    colorName: "Xonsh",
    colorValue: "#285EEF",
  },
  {
    colorName: "XQuery",
    colorValue: "#5232e7",
  },
  {
    colorName: "XSLT",
    colorValue: "#EB8CEB",
  },
  {
    colorName: "Xtend",
    colorValue: "#24255d",
  },
  {
    colorName: "Yacc",
    colorValue: "#4B6C4B",
  },
  {
    colorName: "YAML",
    colorValue: "#cb171e",
  },
  {
    colorName: "YARA",
    colorValue: "#220000",
  },
  {
    colorName: "YASnippet",
    colorValue: "#32AB90",
  },
  {
    colorName: "ZAP",
    colorValue: "#0d665e",
  },
  {
    colorName: "ZenScript",
    colorValue: "#00BCD1",
  },
  {
    colorName: "Zephir",
    colorValue: "#118f9e",
  },
  {
    colorName: "Zig",
    colorValue: "#ec915c",
  },
  {
    colorName: "ZIL",
    colorValue: "#dc75e5",
  },
  {
    colorName: "Zimpl",
    colorValue: "#d67711",
  },
];
export default htmlColors;