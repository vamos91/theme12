export interface Artist {
    id: number,
    name: string,
    style: string,
    nationality: string,
    period: string,
    created_at: Date | string,
    updated_at: Date | string
}

export interface Artwork {
    id: number,
    title: string,
    description: string,
    theme: string,
    date_of_creation: Date | string,
    artist_id: number,
    gallery_id: number,
    created_at: Date | string,
    updated_at: Date | string
}

export interface Gallery{
    id: number,
    name: string,
    address: string,
    city: string,
    type: string,
    created_at: Date | string,
    updated_at: Date | string
}