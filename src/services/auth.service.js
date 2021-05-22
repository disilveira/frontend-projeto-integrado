import axios from "axios";

const API_URL = "https://api-projeto-integrado.herokuapp.com/auth/";

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "signin", { email, password })
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

    register(name, email, password) {
        return axios.post(API_URL + "signup", {
            name,
            email,
            password
        })
    }

}

export default new AuthService();