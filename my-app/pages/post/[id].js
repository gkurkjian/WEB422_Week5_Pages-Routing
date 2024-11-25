import { useRouter } from "next/router"
import useSWR from "swr";

export default function PostById() {

    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const router = useRouter();
    const { id } = router.query;

    // user will have freedom of displaying the id that they wish to as I said in the 1st line
    const {data, error} = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`, fetcher);

    if(error) return <div>Failed to Load</div>
    if(!data) return <div>Loading...</div>

    // Here it'll return from hard coded path from Layout.js that we mentioned <Link href="/post/3">Post (3)</Link> | <Link href="/post/5">Post (5)</Link>
    // It'll return post/3 and post/5
    return (
        <>
            <strong>ID: </strong>{data?.id} <br />
            <strong>UserID: </strong>{data?.userId} <br />
            <strong>Title: </strong>{data?.title} <br />
            <strong>Body</strong>{data?.body} <br />
        </>
    )
}