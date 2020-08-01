import { useState } from "react"

function useForm(initialValues) {
    const [values, setValues] = useState(initialValues)

    const handleChange = e => {
        setValue(e.target.getAttribute('name'), e.target.value)
    }

    const setValue = (name, value) => {
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        handleChange
    }
}

export default useForm