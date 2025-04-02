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

export interface IShortScreenshot {
  id: number,
  image: string
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
  "short_screenshots": IShortScreenshot[]
}

export interface IGamesResponse{
  "count": number,
  "next": string,
  "previous": string,
  "results": IGame[]
}

export interface IStore{
  id: number,
  url: string,
  store:{
    domain: string,
    games_count: number,
    id: number,
    image_background: string,
    name: string,
    slug: string,
  }
}

export interface IDeveloper{
  games_count: number,
  id: number,
  image_background: string,
  name: string,
  slug: string
}

export interface IPublisher{
  games_count: number,
  id: number,
  image_background: string,
  name: string,
  slug: string
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
  "stores": IStore[],
  "developers": IDeveloper[],
  "publishers": IPublisher[],
}

export interface IGameScreenshot{
  "image": string,
  "hidden": boolean,
  "id": number,
  "is_deleted": boolean,
  height: number,
  width: number,
}

export interface IGameScreenShotResponse {
  "count": number,
  "next": string,
  "previous": string,
  "results": IGameScreenshot[]
}

export interface IGameStoresResponse {
  "count": number,
  "next": string,
  "previous": string,
  "results": IGameStore[]
}

export interface IGameStore {
  "id": number,
  "game_id": string,
  "store_id": number,
  "url": string
}

export interface IGameMoviesResponse {
  "count": number,
  "next": string,
  "previous": string,
  "results": IGameMovie[]
}

export interface IGameMovie {
  "id": number,
  "name": string,
  "preview": string,
  "data": {
    "480": string,
    "max": string
  }
}

export interface IGameAchievement{
  "id": number,
  "name": string,
  "description": string,
  "image": string,
  "percent": string
}

export interface IGameAchievementsResponse{
  "count": number,
  "next": string,
  "previous": string,
  "results": IGameAchievement[]
}

export interface IGameDeveloper {
  "id": number,
  "name": string,
  "slug": string,
  "games_count": number,
  "image_background": string
}

export interface IGameDevelopersResponse {
  "count": number,
  "next": string,
  "previous": string,
  "results": IGameDeveloper[]
}

export interface IGamePlatform {
  "id": number,
  "name": string,
  "slug": string,
  "games_count": number,
  "image_background": string,
  "image": string,
  "year_start": number,
  "year_end": number
}

export interface IGamePlatformsResponse {
  "count": number,
  "next": string,
  "previous": string,
  "results": IGamePlatform[]
}