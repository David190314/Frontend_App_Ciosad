import { methods, BASE_URL, RESOURCE } from "../Utils/methods";
import { peticionGetAll, peticionGetById, peticionInsertUser } from "../Utils/http";


export default class userServices {

    static async getUsers (){
        try {
            const dataUser = await peticionGetAll(BASE_URL, RESOURCE,  methods.GET)
            const { data } = dataUser
            return data
        } catch (error) {
            throw error
        }
    }

    static async getUserById (){
        try {
            const dataUseriD = await peticionGetById(BASE_URL, RESOURCE,  methods.GET)
            const data = {dataUseriD}
            return data
        } catch (error) {
            
        }
    }

    static async insert(){
        try {
            const createUser = await peticionInsertUser(BASE_URL, RESOURCE, methods.POST)
            return createUser
        } catch (error) {
            
        }
    }
}