import { useLoaderData } from "react-router-dom";
import Clip, { getClip } from "../components/Clip";



export async function loader({ params }) {
    const clip = await getClip(params.id);
    return { clip };
}

export default function ClipPage(props) {

    const data = useLoaderData();
    const clip = data.clip.clip;

    return (
        <Clip clip={ clip } />
    )
}