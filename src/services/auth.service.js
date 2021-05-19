import axios from "axios";

const API_URL = "https://api-projeto-integrado.herokuapp.com/auth/";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "signin", { username, password })
            .then((response) => {
                if (response.token) {
                    localStorage.setItem("user", JSON.stringify(response))
                }

                return response

            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        })
    }

}

export default new AuthService();