// this method is to go get our JSON data and return it
// const proxyServer = 'https://people.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';
const proxyServer = 'https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/';

// arg is the endpoints we want, like about/ or degrees/
const getData = async (endpoint) => {
    const result = await fetch(proxyServer + endpoint);
    // const result = await fetch(`${proxyServer}${endpoint}`);
    return await result.json();
}

export default getData;