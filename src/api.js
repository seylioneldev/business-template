import axios from "axios";

const BASE_URL = "http://localhost:4000/users";



export class NoteAPI {
    static async fetchAll() {
        const response = await axios.get(BASE_URL);
        return response.data;
      }
}
