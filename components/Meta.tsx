import Head from "next/head";

export type MetaProps = {
    title: string
    keywords: string
    description: string
}

Meta.defaultProps = {
    title: "C&V's Kitchen",
    keywords: 'cook food recipe kitchen',
    description: "Learn to cook some of Connor and Vika's favorite recipes!"
};

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
