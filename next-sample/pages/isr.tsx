import {GetStaticProps, NextPage} from "next";
import {useRouter} from "next/router";
import Head from "next/head";

type ISRProps = {
    message: string,
}

const ISR: NextPage<ISRProps> = (props) => {
    const {message} = props
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.icon"/>
            </Head>
            <main>
                <p>This Page Is ISR Page</p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp} にgetStaticPropsが実行されました。`

    console.log(message)
    
    return {
        props: {
            message,
        },
        revalidate: 60,
    }
}

export default ISR

