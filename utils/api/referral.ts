export const postEmail = async (body: string) => {
    return await fetch('https://api.jsonbin.io/v3/b', {
        method: 'POST',
        body: JSON.stringify({ body }),
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': process.env.API_KEY as string
        }
    }).then(res => res.json())
        .then(data => data.record.body)
        .catch(error => error);
}

export const getEmail = async () => {

}