import { useLoaderData } from "react-router-dom";
import Profile, { getProfile } from "../components/Profile";
import { getAccount } from "../components/Account";

export async function loader({ params }) {
    const profile = await getProfile(params.id);
    const account = await getAccount(params.id);
    return { profile, account };
}

export default function ProfilePage(props) {

    const data = useLoaderData();
    const profile = data.profile.profile;
    const account = data.account.account;

    return (
        <Profile profile={ profile } account={ account } />
    )
}