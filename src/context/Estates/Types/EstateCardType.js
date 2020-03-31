export type EstateCardType = {
    id: Array<{
        id: string,
        name: string,
        state_code: string,
        category: string,
        locality: string, //This is the city
        description?: string // Optional
    }>,
}