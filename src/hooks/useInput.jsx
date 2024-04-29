import { useState } from "react"

export const useInput = (currentValue) => {
    const [value, setValue] = useState(currentValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}