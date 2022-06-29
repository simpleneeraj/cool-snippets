import React from "react";

interface PickerStateType {
    loading: boolean;
    error: boolean;
    file: null;
}

interface FilePickerOptions {
    readAs: string;
    accecpt: string;
    multiple: boolean;
    maxFileSize: number;
}


type Callback = (event: Event) => void
const dynamicInput = (accept: string, multiple: boolean, callback: Callback) => {
    const input = document.createElement('input')
    input.style.display = "none"
    input.style.visibility = "hidden"
    document.body.append(input)
    // input.type = 'file'
    input.setAttribute('type', 'file')
    input.setAttribute('accept', `${accept}`)
    input.setAttribute('multiple', `${multiple}`)
    input.addEventListener('change', (event) => {
        callback(event)
        document.body.removeChild(input)
    })
    input.dispatchEvent(new MouseEvent('click'))

}
const initialState: PickerStateType = {
    file: null,
    error: true,
    loading: true,
}
const reducer = (state: PickerStateType, action: any) => {
    switch (action.type) {
        case "FILES":
            return { ...state, file: action.payload }
        case "LOADING":
            return { ...state, loading: action.payload }
        case "ERROR":
            return { ...state, error: action.payload }
        default:
            return state
    }
}


const useFilePicker = (options?: FilePickerOptions) => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    // const onFilePicker = useCallMemo(() => {
    //     console.log('Hello World');
    // }, [])

    const onFilePicker = () => {
        dynamicInput('image/png', true, ((e) => {
            const { files } = e.target as HTMLInputElement
            if (files) {
                const filesArray = Array.from(files)
                filesArray.map(async (data) => {
                    const objectUrl = URL.createObjectURL(data)
                    // dispatch({
                    //     type: 'FILES',
                    //     payload: files
                    // })
                })
            }
        }))
    }

    // Return Values
    return [onFilePicker, state] as const

}

export default useFilePicker;

// // REad File as BAse 64
// const Base64Reader = (file: Blob): Promise<string | ArrayBuffer | any> => {
//     return new Promise(async (resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onerror = reject;
//       reader.onload = () => {
//         resolve(reader.result);
//       };
//     });
//   };



const fileReader = (file: Blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onerror = reject
        reader.onload = () => {
            resolve(reader.result)
        }
    })
}