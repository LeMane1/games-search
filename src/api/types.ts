export interface IPlatform {
  "platform": {
    "id": number,
    "slug": string,
    "name": string
  },
  "released_at": string,
  "requirements": unknown,
}

export interface IGame{
  "id": number,
  "slug": string,
  "name": string,
  "released": string,
  "tba": boolean,
  "background_image": string,
  "rating": number,
  "rating_top": number,
  "ratings": unknown,
  "ratings_count": number,
  "reviews_text_count": string,
  "added": number,
  "added_by_status": unknown,
  "metacritic": number,
  "playtime": number,
  "suggestions_count": number,
  "updated": string,
  "esrb_rating": {
    "id": number,
      "slug": string,
      "name": string
    },
  "platforms": IPlatform[],
  "parent_platforms": IPlatform[],
}

export interface IGamesResponse{
  "count": number,
  "next": string,
  "previous": string,
  "results": IGame[]
}