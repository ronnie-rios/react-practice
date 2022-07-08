const url = 'https://jsonplaceholder.typicode.com'

export const fetchAllPosts = async () => {
    const response = await fetch(`${url}/posts`)
    const data = await response.json()
    return data
}

export const fetchSinglePost = async (id) => {
    const response = await fetch(`${url}/posts${id}`)
    const data = await response.json()
    return data
}