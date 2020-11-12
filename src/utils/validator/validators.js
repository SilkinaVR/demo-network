
export const required = value => {
    return (value ? undefined : 'Field is required')
}
export const maxLengthCreator = (max) => (value) => {
    return (value && value.length > max ? `Must be ${max} characters or less` : undefined)
}