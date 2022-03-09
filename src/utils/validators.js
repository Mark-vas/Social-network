export const required = (value) => {
    if (value) return undefined
    return 'ERROR'
}

export const requiredLogin = (value) => {
    if (value) return undefined
    return 'Required input field'
}

export const requiredPassword = (value) => {
    debugger
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address'
    }
    return undefined
}

export const maxLength = max => value => {
    if (value && value.length >= max) {
        return `Max length ${max} symbols`
    }
    return undefined
}


