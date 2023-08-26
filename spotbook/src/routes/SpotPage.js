import { useLoaderData, useOutletContext } from "react-router-dom";
import { getSpotClips } from "../components/Clips"
import ClipFeed from "../components/ClipFeed";


export async function loader({ params }) {
    const clips = await getSpotClips(params.id);
    return { clips };
}

export default function SpotPage(props) {

    const data = useLoaderData();
    const clips = data.clips.clips.clip_id_list;
    const context = useOutletContext();
    const auth = context.auth;

    return (
        <ClipFeed clip_id_list={clips} auth={auth} />
    )
}