
async function fetchData(){

    try{
        
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!res.ok){
            throw new Error("Could not fetch error")
        }

        const data = await res.json()
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"
        console.log(data);
    }
    catch(error) {
        console.error(error);
    }

}

function playSong(song_no){
    song = document.getElementById("song");
    const song_playing = document.getElementById("now-playing");
    if (song_no == 1){
        song.src = "Songs/Something that could become something.wav";
        song_playing.textContent = "Something that could become Something";
    }
    if (song_no == 2){
        song.src = "Songs/Jazzy Snazzy little thing.wav";
        song_playing.textContent = "Jazzy Snazzy thing";
    }
    if (song_no == 3){
        song.src = "Songs/Something Suspenseful.wav";
        song_playing.textContent = "Something Suspenseful";
    }
    if (song_no == 4){
        song.src = "Songs/Something Somber.wav";
        song_playing.textContent = "Something Somber"
    }
    if (song_no == 5){
        song.src = "Songs/Test.wav";
        song_playing.textContent = "Test";
    }
    if (song_no == 6){
        song.src = "Songs/This turned out decently.wav";
        song_playing.textContent = "This turned out decently";
    }
    if (song_no == 7){
        song.src = "Songs/An Actual song Attempt.wav";
        song_playing.textContent = "An Actual song Attempt";
    }
    if (song_no == 8){
        song.src = "Songs/I like this one.wav";
        song_playing.textContent = "I like this one";
    }
    if (song_no == 9){
        song.src = "Songs/Something Serene.wav";
        song_playing.textContent = "Something Serene"
    }
    if (song_no == 10){
        song.src = "Songs/Cool Little Thing.wav";
        song_playing.textContent = "Cool little Thing";
    }
    if (song_no == 11){
        song.src = "Songs/Series-ONE Finale.wav";
        song_playing.textContent = "Series-ONE Finale";
    }

    if (song_no == 0){
        let x = Math.floor(Math.random() * 12);
        playSong(x);
    }

    console.log(song.src)

}
