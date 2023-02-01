export const addToCart = (data) => {
    console.warn(data);
    return {
        type: 'ADD_TO_CART',
        data
    };
}