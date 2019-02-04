import Head from "next/head";

export default ({ title, children }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
        </Head>
        <div className="container">
            {children}
        </div>

        <style jsx>{`
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        `}</style>

    </div>
)