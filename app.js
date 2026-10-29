const searchbutton = document.querySelector("#searchbutton");
const searchinput = document.querySelector("#searchinput");
const resultDiv = document.querySelector("#result");

searchbutton.addEventListener("click", async function () {
    // Read what the user typed.
    const query = searchinput.value.trim();

    resultDiv.textContent = "Loading...";

    try {
        // Send the query to PHP.
        const response = await fetch(
            "superheroes.php?query=" + encodeURIComponent(query)
        );

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        // Read and display the HTML returned by PHP.
        const html = await response.text();
        resultDiv.innerHTML = html;
    } catch (error) {
        console.error(error);
        resultDiv.textContent = "Unable to load superheroes. Check MAMP.";
    }
});