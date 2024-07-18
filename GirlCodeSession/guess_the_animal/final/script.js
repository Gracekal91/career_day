document.addEventListener("DOMContentLoaded", function() {
    const description = document.getElementById("description");
    const animalImage = document.getElementById("animalImage");
    const result = document.getElementById("result");
    const tryAgainButton = document.getElementById("tryAgainButton");
    const animalSelect = document.getElementById("animal");
    const correctSound = document.getElementById("correctSound");
    const container = document.getElementById("result-container");

    let listOfAnimals = [
        { id: 1, name: 'lion', description: 'I am the king of the jungle and I have a majestic mane.', imageLink: 'https://pngimg.com/uploads/lion/lion_PNG23271.png', sound: './assets/70333__mrbubble110__bear-roar.wav', color: '#DECC9C' },
        { id: 2, name: 'elephant', description: 'I have a long trunk and large ears.', imageLink: 'https://png.pngtree.com/png-clipart/20230411/original/pngtree-elephant-asian-elephant-png-image_9043910.png', sound: './assets/139052__jasher70__elephant-scream.wav', color: '#9D9C8E' },
        { id: 3, name: 'giraffe', description: 'I have a very long neck and I am the tallest land animal.', imageLink: 'https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-giraffe-animal-isolated-3d-rendering-png-image_10089289.png', sound: './assets/70333__mrbubble110__bear-roar.wav', color: '#DECC9C' },
        { id: 4, name: 'tiger', description: 'I have stripes and I am known for my strength and agility.', imageLink: 'https://pngimg.com/uploads/tiger/tiger_PNG23248.png', sound: './assets/571288__lewisbm__tiger_roar.wav', color: '#DECC9C' },
        { id: 5, name: 'zebra', description: 'I have black and white stripes and I am related to horses.', imageLink: 'https://pngimg.com/uploads/zebra/zebra_PNG11209.png', sound: './assets/70333__mrbubble110__bear-roar.wav', color: '#DECC9C' },
        { id: 6, name: 'monkey', description: 'I am known for my agility and intelligence, and I love bananas.', imageLink: 'https://png.pngtree.com/png-clipart/20230528/ourmid/pngtree-zebra-isolated-on-transparent-background-png-image_7110004.png', sound: './assets/588623__wilika2__monkey-noise-imitation.wav', color: '#DECC9C' },
        { id: 7, name: 'bear', description: 'I am large and furry, and I love honey.', imageLink: 'https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-brown-bear-animal-transparent-on-white-png-image_6655701.png', sound: './assets/70333__mrbubble110__bear-roar.wav', color: '#DECC9C' }
    ];

    let currentAnimal;

    function getRandomAnimal() {
        const randomIndex = Math.floor(Math.random() * listOfAnimals.length);
        currentAnimal = listOfAnimals[randomIndex];
        description.textContent = currentAnimal.description;
    }

    window.checkAnswer = function() {
        const selectedAnimal = animalSelect.value;

        if (selectedAnimal === currentAnimal.name) {
            result.textContent = `Correct! It's a ${currentAnimal.name}.`;
            result.style.color = "green";
            animalImage.src = currentAnimal.imageLink;
            animalImage.style.display = "block";
            correctSound.src = currentAnimal.sound;
            correctSound.play();
            tryAgainButton.style.display = "none";
            container.style.backgroundColor = currentAnimal.color;
        } else {
            result.textContent = "Incorrect. Try again!";
            animalImage.style.display = "none";
            tryAgainButton.style.display = "block";
        }
    };

    window.tryAgain = function() {
        result.textContent = "";
        animalImage.style.display = "none";
        tryAgainButton.style.display = "none";
        animalSelect.value = "select";
        getRandomAnimal();
    };

    getRandomAnimal();
});
