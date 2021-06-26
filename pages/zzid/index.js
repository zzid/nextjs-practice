import Link from "next/link";
export const getStaticProps = async () => {
    // run in a build time
    // never run in a browser
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: { zzid: data },
    };
};

const Zzid = ({ zzid }) => {
    return (
        <div>
            <h1>zzid</h1>
            <p>This is index page</p>
            {zzid.map((z) => {
                return (
                    <div key={z.id}>
                        <Link href={`/zzid/${z.id}`}>
                            <a>{z.name}</a>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Zzid;
