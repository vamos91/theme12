export interface Cocktail {
    id: number,
    name: string,
    alcool: number,
    rating: string,
    description: string,
    difficulty_level: string,
    rate: string,
    created_at: Date | String,
    updated_at: Date | String
}

export interface Ingredient{
    id: number,
    name: string,
    created_at: Date | String,
    updated_at: Date | String
}

export interface Measurement{
    cocktail_recipe_id: number,
    ingredient_id: number
    quantity_amount: string,
    description: string
}