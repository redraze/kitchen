import Head from "next/head";

export type MetaProps = {
    title: string
    keywords: string
    description: string
}

export default function Meta({ title, keywords, description }: MetaProps) {
    return(
        <Head>
            <title>{ title }</title>
            <meta name="keywords" content={ keywords } />
            <meta name="description" content={ description } />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

Meta.defaultProps = {
    title: "C&V Kitchen",
    keywords: 'cook food recipe kitchen',
    description: "A place for some of Connor's and Vika's favorite recipes!"
};
