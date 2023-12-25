const stringy = (base: string, params: any) => {
    const query = Object.entries(params)
        .map(([key, value]: any) => `${key}=${encodeURIComponent(value)}`)
        .join("&");

    return `${base}?${query}`;
};

export default stringy;