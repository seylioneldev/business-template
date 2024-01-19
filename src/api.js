import axios from "axios";

const BASE_URL = "http://localhost:4000/users";



export class BusinessUserAPI {
    static async fetchAll() {
        const response = await axios.get(BASE_URL);
        return response.data;
      }
    static async create(user) {
        const response = await axios.post(`${BASE_URL}`, user);
        return response.data;
      }
    static async fetchById(userId) {
        const response = await axios.get(`${BASE_URL}/${userId}`);
        return response.data;
      }
    static async deleteById(userId) {
        const response = await axios.delete(`${BASE_URL}/${userId}`);
        return response.data;
      }
    static async update(user) {
        const response = await axios.patch(`${BASE_URL}/${user.id}`, user);
        return response.data;
      }
}
