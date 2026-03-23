const input = document.getElementById("geoQueryInput") as HTMLInputElement;
const button = document.getElementById("geoQueryButton") as HTMLButtonElement;

button.addEventListener("click", () => sendQuery(input.value));

async function sendQuery(query: string) {
    try {
        const response = await fetch("http://localhost:5000/geo-query-ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query })
        });

        const data = await response.json();
        console.log(data);
    }
    catch (e) {
        console.error(e);
        console.log("Server error");
    }
}