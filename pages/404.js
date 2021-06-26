import Link from "next/link";
import { useInterval, useState, useEffect } from "react";
import { useRouter } from "next/router";

const sec = 1000;

const NotFound = () => {
    const [timer, setTimer] = useState(3 * sec);
    const router = useRouter();

    useEffect(() => {
        if (timer === 0) router.push("/");

        let secInterval = setInterval(() => {
            setTimer(timer - sec);
        }, sec);
        return () => clearInterval(secInterval);
    }, [timer]);

    return (
        <div className="notFount">
            <h1>How you reach this far dude..</h1>
            <p>Not Found</p>
            <p>
                You will redirect to Homepage in a {parseInt(timer / sec)}
                seconds...
            </p>
            <p>
                Go back to the{" "}
                <Link href="/">
                    <a>Homepage</a>
                </Link>{" "}
            </p>
        </div>
    );
};

export default NotFound;
