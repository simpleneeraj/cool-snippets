



function debounce(this: any, fn: { apply: (arg0: any, arg1: IArguments) => void; }, delay: number | undefined) {
    let timer: string | number | NodeJS.Timeout | undefined;
    const thisContext = this;
    const args = arguments;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            return fn.apply(thisContext, args);
        }, delay);
    };
}
export default debounce;