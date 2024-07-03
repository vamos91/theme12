import { Artwork, Gallery } from "../../interface";
//Sélectionner les oeuvres par musée
export const getArtworkByGallery = (artworks: Artwork[], galleries: Gallery[]) => {
    const galleryList = galleries.map((gallery) => {
        const artworkList = artworks.filter((artwork) => {
            return artwork.gallery_id === gallery.id
        })
       return {
        address: gallery.address,
        artworks: JSON.stringify(artworkList, null, 4)
        //...artworkList
       }
    })
    console.log(galleryList)
}