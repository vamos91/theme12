import { Artist, Artwork, Gallery } from "../../interface";

//Sélectionnez les oeuvres de type peinture exposées à l'Hôtel National des Invalides

export const getPaintArtworksInInvalides = (artworks: Artwork[], galleries: Gallery[]) => {
    const galleryId = galleries.find((item) => item.address === "Hôtel National des Invalides")?.id
    console.log(galleryId)
    return artworks.filter((artwork) => artwork.gallery_id === galleryId && artwork.theme === 'peinture')
}