export const hellosync = () =>
    new Promise ((resolve, reject) =>
        setTimeout (()=> resolve('hello $(name)'),2000)
);
