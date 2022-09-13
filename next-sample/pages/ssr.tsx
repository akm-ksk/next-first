import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";

type SSRProps = {
    message: string,
}

const SSR: NextPage<SSRProps> = (props) => {
    const {message} = props

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.icon"/>
            </Head>
            <main>
                <p>This Page Is SSR Page</p>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp} にgetServerSidePropsが実行されました。`

    console.log(message)
    console.log(context.req)
    console.log(context.res)
    console.log(context.resolvedUrl)
    console.log(context.query)

    return {
        props: {
            message,
        },
    }
}
export default SSR