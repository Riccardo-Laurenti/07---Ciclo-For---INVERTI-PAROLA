


const wordReverse = document.getElementById('wordReverse')


const button = document.getElementById('button')


const result = document.getElementById('result')


const palindromeRes = document.getElementById('result')


let risultato = '';


button.addEventListener('click', function () {

    const wordValueManipolo = wordReverse.value;

    for (let i = wordValueManipolo.length - 1; i >= 0; i--) {

        risultato += wordValueManipolo.charAt(i);

    }

    result.innerHTML += risultato;



    setTimeout(() => {
        location.reload();
    }, 1920);
});


