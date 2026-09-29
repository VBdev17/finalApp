import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/health`)
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.status);
            })
            .catch(() => {
                setMessage("Backend not connected");
            });
    }, []);

    return (
        <div>
            <h1>Full Stack Application</h1>
            <p>Backend Status: {message}</p>
        </div>
    );
}

export default App;