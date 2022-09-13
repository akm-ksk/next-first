import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {useRouter} from "next/router";
import Head from "next/head";
import {ParsedUrlQuery} from "querystring";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: {
                id: '1',
            },
        },
        {
            params: {
                id: '2',
            },
        },
        {
            params: {
                id: '3',
            },
        },
    ]

    return {paths, fallback: false}
}

type PostProps = {
    id: string,
}

interface PostParams extends ParsedUrlQuery {
    id: string
}

const Post: NextPage<PostProps> = (props) => {
    const {id} = props
    const router = useRouter()

    if (router.isFallback) {
        return <>Loading...</>
    }

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <p>このページは静的にサイト生成によってビルド時に生成されたページです。</p>
                <p>{`/posts/${id} に対応するページです`}</p>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
    return {
        props: {
            id: context.params!['id'],
        },
    }
}

export default Post