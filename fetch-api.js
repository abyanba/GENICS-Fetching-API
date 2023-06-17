const apiURL = "https://api.myanimelist.net/v2/anime";

async function loadAnime() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        
    } catch (e) {
        console.log("Error");
        console.log(e);
    }
}


// async function loadAnime() {
//     const response = await fetch(apiURL);
//     const users = await response.json();

//     return users;
// }

// document.addEventListener("DOMContentLoaded", async () => {
//     let users = [];

//     try {
//         users = await loadAnime();
//     } catch (e) {
//         console.log("Error");
//         console.log(e);
//     }

//     console.log(users);
// })

