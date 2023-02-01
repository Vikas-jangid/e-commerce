export const signupAction = (data) => {
    console.warn(data);
    return {
        type: 'Signup',
        data
    };
}