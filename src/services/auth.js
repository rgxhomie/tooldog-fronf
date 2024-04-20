import $http from "@/helpers/http"

export const login = async (username, password) => {
    return (await $http.post('/auth/login', {username, password})).data;
}

export const logOut = async (refresh_token) => {
    await $http.delete('auth/logout', {
        headers: {
            "x-refresh-token": refresh_token
        }
    });
}

export const register = async (username, email, password) => {
    return (await $http.post('/auth/register', {username, email, password})).data;
}

export const refresh = async (refresh_token) => {
    return (await $http.get('/auth/refresh', {
        headers: {
            "x-refresh-token": refresh_token
        }
    })).data;
}
