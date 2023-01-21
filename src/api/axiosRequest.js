import axios from 'axios';


const axiosRequest = async (url) => {
    try {
        const response = await axios.get(url)
        
        if(response.statusText === "OK") {
            return response;
        } else {
            throw new Error('Я обосрался');
        }

    } catch(error) {
        console.error(error, error.message)
    }
}

export default axiosRequest;

