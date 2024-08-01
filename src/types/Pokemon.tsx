interface Pokemon {
    name: string;
    url: string;
}

const getImageUrl = (url: string) => {
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 2];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export default Pokemon;
export { getImageUrl };