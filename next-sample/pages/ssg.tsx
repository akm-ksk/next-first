import {GetStaticProps, NextPage} from "next";
import Head from "next/head";

type SSGProps = {
    message: string,
}

const SSG: NextPage<SSGProps> = (props) => {
    const {message} = props

    return (
        <>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.icon"/>
            </Head>
            <main>
                <p>This Page Is SSG Page</p>
                <p>{message}</p>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp} に getStaticProps が実行されました`

    console.log(message)

    return {
        props: {
            message,
        },
    }
}

export default SSG