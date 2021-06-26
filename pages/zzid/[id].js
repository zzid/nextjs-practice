import Link from "next/link";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map((z) => {
        return {
            params: { id: z.id.toString() },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { oneZzid: data },
    };
};

const Details = ({ oneZzid }) => {
    const {
        name,
        email,
        website,
        address: { city },
    } = oneZzid;
    return (
        <div>
            <h1>Details Page</h1>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{website}</p>
            <p>{city}</p>
            <Link href="/zzid">Go back to List</Link>
        </div>
    );
};

export default Details;
