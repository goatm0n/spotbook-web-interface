import Clip, { getClip } from "./Clip";



export default function ClipFeed(props) {

    const clip_id_list = props.clip_id_list;

    return (
        <div className="clip-feed">
            <ul>
                {
                    clip_id_list.map(function(clipId, index) {
                        return <Clip clipId={clipId} key={index} />
                    })
                }
            </ul>
        </div>
    )
}