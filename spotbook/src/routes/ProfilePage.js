import { useLoaderData } from "react-router-dom";
import Profile, { getProfile } from "../components/Profile";
import { getAccount } from "../components/Account";
import { getClips } from "../components/Clips";

export async function loader({ params }) {
    const profile = await getProfile(params.id);
    const account = await getAccount(params.id);
    const clips = await getClips(params.id);

    return { profile, account, clips };
}

export default function ProfilePage(props) {

    const data = useLoaderData();
    const profile = data.profile.profile;
    const account = data.account.account;
    const clips = data.clips.clips.clip_id_list;

    return (
        <Profile profile={ profile } account={ account } clips={ clips } />
    )
}