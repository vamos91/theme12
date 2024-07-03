import { Artist } from "../../interface";

export const getItalianArtists = (artists: Artist[]): Artist[] => {
    return artists.filter((item) => item.nationality === 'Italy')
}