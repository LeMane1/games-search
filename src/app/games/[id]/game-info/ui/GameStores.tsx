import {IGameStoresResponse, IStore, IGameStore} from "@/api/types";
import {BuyPlatformLink} from "@/components/buy-platform-link";
import {Stack} from "@mui/material";
import {getData} from "@/api/getData";

interface IGameStoresProps {
  gameId: number;
  stores?: IStore[];
}

export default async function GameStores({gameId, stores}: IGameStoresProps) {
  const {results} = await getData<IGameStoresResponse>({
    url: `games/${gameId}/stores`
  })
  const storesLinks: IGameStore[] = results
  
  return (
    <Stack direction="row" sx={{ flexGrow: 1, flexWrap: 'wrap', gap: 1 }}>
      {stores && stores.length > 0 && stores.map((store: IStore) => (
        <BuyPlatformLink
          key={store.id}
          name={store.store.name}
          slug={store.store.slug}
          url={storesLinks.find((storeLink: IGameStore) => storeLink.store_id === store.store.id)?.url}
        />
      ))}
    </Stack>
  )
}