"user client";
import { TbPlaylist } from "react-icons/tb"
import { AiOutlinePlus } from "react-icons/ai";
import { useUser } from "@/hooks/useUser";
import useAuthModel from "@/hooks/useAuthModel";
import useUploadModel from "@/hooks/useUploadModel";
import { Song } from "@/types";
import MediaItem from "./MediaItem";

interface LibraryProps{
    songs: Song[]
}

const Library: React.FC<LibraryProps> = ({
    songs
}) => {
    const authModel = useAuthModel();
    const { user } = useUser();
    const uploadModel = useUploadModel();

    const onClick = () => {
        if (!user) {
            return authModel.onOpen();
        }
        
        return uploadModel.onOpen();
    }
    return ( 
        <div className = "flex flex-col">
            <div
                className="
                    flex
                    items-center
                    justify-between
                    px-5
                    pt-5
                "
            >
                <div
                    className="
                        inline-flex
                        items-cetner
                        gap-x-2
                        "
                >
                    <TbPlaylist className="text-neutral-400" size={26}/>
                    <p
                        className="
                            text-neutral-400
                            font-medium
                            text-md"
                    >
                        Your Library
                    </p>
                </div>
                <AiOutlinePlus
                    onClick={onClick}
                    size={20}
                    className="
                        text-neutral-400
                        cursor-pointer
                        hober:text-white
                        transition
                        "
                />
            </div>
            <div className="
                flex
                flex-col
                gap-y-2
                mt-4
                px-3
            ">
                {songs.map((item) => (
                    <MediaItem
                        onClick={() => {}}
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </div>
     );
}
 
<div>
    Library!
</div>
export default Library;