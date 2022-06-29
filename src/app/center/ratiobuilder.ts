
const AR = (ratio: string) => {
      const divide$2 = 2;
      const divide$3 = 3;
      switch (ratio.toString()) {
            // Instagram Landscape
            case "1.91:1":
                  // 1080X566
                  return {
                        width: 1080,
                        height: 566,
                        get aspectWidth() {
                              return `${this.width / divide$2}px`;
                        },
                        get aspectHeight() {
                              return `${this.height / divide$2}px`;
                        },
                  };
            // Instagram Square
            case "1:1":
                  // 1080X1080
                  return {
                        width: 1080,
                        height: 1080,
                        get aspectWidth() {
                              return `${this.width / divide$2}px`;
                        },
                        get aspectHeight() {
                              return `${this.height / divide$2}px`;
                        },
                  };
            // Instagram Portrait
            case "4:5":
                  // 1080X1350
                  return {
                        width: 1080,
                        height: 1350,
                        get aspectWidth() {

                              return `${this.width / divide$3}px`;
                        },
                        get aspectHeight() {
                              return `${this.height / divide$3}px`;
                        },
                  };
            case "9:16":
                  // 1080X1920
                  return {
                        width: 1080,
                        height: 1920,
                        get aspectWidth() {
                              return `${this.width / divide$3}px`;
                        },
                        get aspectHeight() {
                              return `${this.height / divide$3}px`;
                        },
                  };
            // Twitter Header Photo
            case "3:1":
                  return {
                        width: 1500,
                        height: 500,
                        get aspectWidth() {
                              return `${this.width / divide$2}px`;
                        },
                        get aspectHeight() {
                              return `${this.height / divide$2}px`;
                        },

                  };
            // Twitter Timeline
            case "16:9":
                  return {
                        width: 1600,
                        height: 900,
                        get aspectWidth() {
                              return `${this.width / divide$2}px`;
                        },
                        get aspectHeight() {
                              return `${this.height / divide$2}px`;
                        },

                  };
            default:
                  return {
                        width: 1000,
                        height: 1000,
                        get aspectWidth() {
                              return `${this.width / divide$2}px`;
                        },
                        get aspectHeight() {
                              return `${this.height / divide$2}px`;
                        },

                  };
      }
};


export default AR;


