
    let button = document.querySelector('#button1');

    button.addEventListener("click", () => {
        let data = +document.querySelector('#input1').value;

        function polaKotak(input) {
            let pola = '';

            for (let i = 0; i < input; i++) {
                for (let j = 0; j < input; j++) {
                    pola = pola + '* ';
                }
                pola = pola + '\n';
            }

            // console.log(pola);
            return pola;
        }

        console.log(polaKotak(data));
    });