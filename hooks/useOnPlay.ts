import { Song } from "@/types";
import userPlayer from "./usePlayer";
import { useUser } from "./useUser";
import useAuthModel from "./useAuthModel";

const useOnPlay = (songs: Song[]) => {
  const player = userPlayer();
  const authModel = useAuthModel();
  const { user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModel.onOpen();
    }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  }
  return onPlay;
}

export default useOnPlay;