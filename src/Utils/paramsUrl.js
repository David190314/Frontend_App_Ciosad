export const useParamsIdUrl = () =>{
    const dataLocalStorage = JSON.parse(window.localStorage.getItem("IniciApp"))
    const {id} = dataLocalStorage
    return id
}
