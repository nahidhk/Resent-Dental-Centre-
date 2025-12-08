import React, { useEffect, useState } from "react";
import ErrorNote from "../../hooks/ErrorNote";

export default function ApiCheck() {
    const [online, setOnline] = useState(null); // null = loading
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8000/online.php`)
            .then(res => res.json())
            .then(data => {
                setOnline(data.online);
            })
            .catch(() => {
                setError(true); // fetch fail হলে
            });
    }, []);

    return (
        <>
            {error || online === false ? <ErrorNote /> : null}
        </>
    );
}
