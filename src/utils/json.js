export const convertJsonIntoArray = (json) =>
    Object.keys(json).map((key) => json[key]);
