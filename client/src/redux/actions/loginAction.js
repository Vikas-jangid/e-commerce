import {LOGIN } from "../constant.js"

export const loginAction = (data) => {
    console.warn(data);
    return {
        type:LOGIN,
        data
    };
}