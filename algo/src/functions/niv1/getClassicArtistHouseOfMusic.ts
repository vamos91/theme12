import { Artist, Artwork, Gallery } from "../../interface";
//Sélectionnez tous les artistes de la période classique qui sont exposés à la Cité de La Musique

export const getClassicArtistHouseOfMusic = (artists: Artist[], artworks: Artwork[], galleries: Gallery[]) => {
//     const galleryId = galleries.find((item) => item.address === "Cité de La Musique")?.id
//     const allArtworkByGalleryId = artworks.filter((item) => item.gallery_id === galleryId)
   
//     const response = artists.filter((artist) => {
//         const artistByGallery = allArtworkByGalleryId.find((item) => item.artist_id === artist.id)
//         if(artistByGallery?.artist_id !== undefined){
//             return artists.find((item) => item.id === artistByGallery?.artist_id && item.period === 'classic')
//         }
//     })
//    return response

        const classicArtists = artists.filter((artist) => artist.period === 'classic')
        const classicArtistArtwork = classicArtists.map((classicArtist) => {
            return artworks.filter((artwork) => artwork.artist_id === classicArtist.id)
        })
        const galleryId = galleries.find((gallery) => gallery.address === "Cité de La Musique")?.id
        const response =  classicArtistArtwork.map((item) => {
        const res = item.filter((el) => el.gallery_id === galleryId )
        return res.map((art) => {
            return artists.find((artist) => artist.id === art.artist_id)
        })
       })
       
       return response

}