import { Artist } from "../../interface";

//Sélectionnez tous les artistes de nationalité italienne et de la période classique

export const getItalianAndClassicArtists = (artists: Artist[]): Artist[] => {
    return artists.filter((item) => item.nationality === 'Italy' && item.period === 'classic')
}