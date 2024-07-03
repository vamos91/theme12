import { Artwork, Gallery } from "../../interface";

export const getArtworksInInvalides = (artworks: Artwork[], galleries: Gallery[]) => {
    const galleryId = galleries.find((item) => item.address === "Hôtel National des Invalides")?.id
    console.log(galleryId)
    return artworks.filter((artwork) => artwork.gallery_id === galleryId)
}