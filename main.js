
    let button = document.querySelector('#button1');

    button.addEventListener("click", () => {
        let data = +document.querySelector('#input1').value;

        function polaKotak(input) {
            let pola = "";
            let hasil = 0;
            let angka = 1;
            let n1 = 0;
            let n2 = 1;
        

            for (let i = 0; i < input; i++) {
                angka = 1;
                hasil = 0;
                n1 = 0;
                n2 = 1;
                for (let j = 0; j < input; j++) {

                    // membuat pola persegi dengan tanda *
                    // pola = pola + '* ';

                    // membuat pola persegi menggunakan deret bilangan ganjil / deret angka huruf & fibonacci
                    if (i % 2 === 0) {

                        // deret angka ganjil
                        // pola += angka;
                        // angka = angka + 2;

                        // deret angka huruf
                    } else {

                        // deret bilangan fibonacci
                        hasil = n2 + n1;
                        n2 = n1;
                        n1 = hasil;
                        pola += hasil;
                    }
                }
                pola = pola + '\n';
            }

            // console.log(pola);
            console.log(`nilai n = ` + input);
            console.log(pola)
        }

        polaKotak(data)
    });