export interface IPlatform {
  "platform": {
    "id": number,
    "slug": string,
    "name": string
  },
  "released_at": string,
  "requirements": {
    "minimum": "string",
    "recommended": "string"
  },
}

export interface IGenre{
  "id": number,
  "slug": string,
  "name": string,
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
  "genres": IGenre[],
}

export interface IGamesResponse{
  "count": number,
  "next": string,
  "previous": string,
  "results": IGame[]
}

export interface IGameResponse extends IGame{
  "name_original": string,
  "description": string,
  "description_raw": string,
  "metacritic_platforms": unknown,
  "background_image_additional": string,
  "website": string,
  "reactions": unknown,
  "screenshots_count": number,
  "movies_count": number,
  "creators_count": number,
  "achievements_count": number,
  "parent_achievements_count": string,
  "reddit_url": string,
  "reddit_name": string,
  "reddit_description": string,
  "reddit_logo": string,
  "reddit_count": number,
  "twitch_count": string,
  "youtube_count": string,
  "alternative_names": string[],
  "metacritic_url": string,
  "parents_count": number,
  "additions_count": number,
  "game_series_count": number,
}