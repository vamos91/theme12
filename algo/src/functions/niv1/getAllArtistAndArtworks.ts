import { Artist, Artwork } from "../../interface";

//Sélectionnez tous les artistes de la période classique et leur oeuvres

export const getAllArtistAndArtworks = (artists: Artist[], artworks: Artwork[]) => {
    const artistsClassic = artists.filter((item) => item.period === 'classic')
    const resultat = artistsClassic.map((artistClassic) => {
        const artWorkPerArtist = artworks.filter((artwork) => artwork.artist_id === artistClassic.id)
        return{
            name: artistClassic.name,
            ...artWorkPerArtist,
        }
    })
    return resultat
}