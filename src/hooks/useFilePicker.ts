import toBase64 from "lib/base64";
import React from "react";

type XEvent = React.ChangeEvent<HTMLInputElement>




const useFilePicker = (callback: (src: string) => void) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    const onFilePicker = (e: XEvent) => {
        const { files } = e.target
        // dispatchFileList(files)
        if (files) {
            const filesArray = Array.from(files)
            filesArray.map(async (blob) => {
                const dataURL = await toBase64(blob, 'webp', .5)
                const objectURL = URL.createObjectURL(dataURL)
                callback(objectURL)
            })
        }
    }

    // React.useEffect(() => {
    //     if (fileList) {
    //         const filesArray = Array.from(fileList)
    //         filesArray.map(async (blob) => {
    //             const dataURL = await toBase64(blob, 'webp', .5)
    //             const objectURL = URL.createObjectURL(dataURL)
    //             dispatchFiles((init) => [objectURL, ...init])

    //         })
    //     }
    // }, [])
    // Return Values
    return { onFilePicker, inputRef } as const

}

export default useFilePicker;



// const fileReader = (file: Blob) => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader()
//         reader.readAsDataURL(file)
//         reader.onerror = reject
//         reader.onload = () => {
//             resolve(reader.result)
//         }
//     })
// }