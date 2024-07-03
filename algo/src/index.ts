import { artworks } from './data/artwork'
import { galleries } from './data/gallery'
import { artists } from './data/artist'


import { getItalianArtists } from './functions/niv1/getItalianArtists'
import { getItalianAndClassicArtists } from './functions/niv1/getItalianAndClassicArtists'
import { getArtworksInInvalides } from './functions/niv1/getArtworksInInvalides'
import { getPaintArtworksInInvalides } from './functions/niv1/getPaintArtworksInInvalides'
import { getAllArtistAndArtworks } from './functions/niv1/getAllArtistAndArtworks'
import { getClassicArtistHouseOfMusic } from './functions/niv1/getClassicArtistHouseOfMusic'
import { getArtworkByGallery } from './functions/niv1/getArtworkByGallery'

//Sélectionnez tous les artistes de nationalité italienne
const italianArtists = getItalianArtists(artists)
//console.log(italianArtists)

//Sélectionnez tous les artistes de nationalité italienne et de la période classique
const italianAndClassicArtists = getItalianAndClassicArtists(artists)
//console.log(italianAndClassicArtists)

//Sélectionnez toutes oeuvres exposées à l'Hôtel National des Invalides
const artworksInInvalides = getArtworksInInvalides(artworks, galleries)
//console.log(artworksInInvalides)

//Sélectionnez les oeuvres de type peinture exposées à l'Hôtel National des Invalides
const paintArtworksInInvalides = getPaintArtworksInInvalides(artworks, galleries)
//console.log(paintArtworksInInvalides)

//Sélectionnez tous les artistes de la période classique et leur oeuvres
const allArtistAndArtworks = getAllArtistAndArtworks(artists, artworks)
//console.log(allArtistAndArtworks)

//Sélectionnez tous les artistes de la période classique qui sont exposés à la Cité de La Musique
const classicArtistHouseOfMusic = getClassicArtistHouseOfMusic(artists, artworks, galleries)
//console.log(classicArtistHouseOfMusic)

//Sélectionner les oeuvres par musée
const artworkByGallery = getArtworkByGallery(artworks, galleries)
//console.log(artworkByGallery)