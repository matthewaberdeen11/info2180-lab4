const searchbutton = document.querySelector("#searchbutton");

searchbutton.addEventListener("click", async function () {
    try{
        const response = await fetch("superheroes.php");
    
        if (!response.ok){
            throw new Error("Failed to fetch data");
        }
        
        // Read the HTML returned by PHP as a string.
        const result = await response.text();

        // Display that string.
        alert(result);
    } catch (error) {
        console.error(error);
        alert("Could not load superheroes. Check that MAMP is running.");
    }
});