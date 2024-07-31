type Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: Array<string>;
    abilities: Array<string>;
    sprites: {
        front_default: string;
        back_default: string;
    };
    stats: Array<{
        base_stat: number;
        stat: {
        name: string;
        };
    }>;
}

export default Pokemon;