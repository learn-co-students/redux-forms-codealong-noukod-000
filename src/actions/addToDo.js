export function addToDo(formData){
    return({
        type: 'ADD_TODO',
        payload: formData
    })
}