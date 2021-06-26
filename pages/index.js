import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>zzid list | Home</title>
                <meta name="keywords" content="zzid" />
            </Head>
            <div>
                <h1>Homepage</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Amet excepturi quia soluta! Inventore, possimus
                    exercitationem dolores praesentium impedit recusandae fuga
                    saepe velit eligendi excepturi maxime nulla distinctio!
                    Voluptatibus, dignissimos quaerat?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore repellat omnis, at ipsa, minima quo neque molestiae
                    nesciunt dignissimos, ratione facere asperiores. Aliquam
                    asperiores voluptates quia hic porro modi illum.
                </p>
                <Link href="/zzid">
                    <a>See zzid listing</a>
                </Link>
            </div>
        </>
    );
}
