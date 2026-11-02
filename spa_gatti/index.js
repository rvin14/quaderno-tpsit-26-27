const immagine = document.getElementById("gatto-casuale");
            const bottone = document.getElementById("bottone-ricarica");

            async function getRandomCat () {
                const url = "https://cataas.com/cat?json=true";

                try {
                    const response = await fetch(url);
                    
                    if (response.ok) {
                        const cat = await response.json();
                        console.log(cat);
                        immagine.src = cat.url;
                    }

                } catch (e) {
                    console.log(e.message);
                }
            }

            // metodo 1
            /*bottone.addEventListener("click", () => {
                getRandomCat();
            });*/

            // metodo 2
            //bottone.addEventListener("click", () => getRandomCat());

            // metodo 3
            bottone.addEventListener("click", getRandomCat);

            getRandomCat();