
import toBase64 from "lib/base64";
import React from "react";

type CEvent = React.ChangeEvent<HTMLInputElement>

type Options = {
    maxImages?: number
}


const useFilePicker = (callback: (src: string) => void, options: Options) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const { maxImages = 5 } = options
    const onFilePicker = (e: CEvent) => {
        const { files } = e.target
        // dispatchFileList(files)
        if (files) {
            const filesArray = Array.from(files)
            if (filesArray.length <= maxImages) {
                filesArray.map(async (blob) => {
                    const dataURL = await toBase64(blob, 'webp', 1)
                    const objectURL = URL.createObjectURL(dataURL)
                    callback(objectURL)
                })
            } else {
                alert(`Max ${maxImages} allowed only`)
            }
        }
    }
    // Return Values
    return { onFilePicker, inputRef } as const
}
export default useFilePicker;
