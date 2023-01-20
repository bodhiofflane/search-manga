const useHttp = () => {
    const request = async (url) => {
        try {
            const res = await fetch(url);

            if (res.status > 200) {
                throw new Error(`Could not fetch ${url}. Code: ${res.status}`);
            }
            return await res.json();
        } catch (error) {
            throw error.message;
        }
    };

    return request;
};

export default useHttp;
