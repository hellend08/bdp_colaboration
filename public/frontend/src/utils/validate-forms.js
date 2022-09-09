export const validateBtnForm = (getValues) => {
    const allvalues = getValues(); 
    const result = Object.values(allvalues).includes('')
    return result
}