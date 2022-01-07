
class TicTacToeController {

    constructor() {

        const tttTomb = [];
        let lepes = 0;

        const jatekTer = new JatekTer(tttTomb);
        const ticTacToeModel = new TicTacToeModel(tttTomb);
        const infoView = new InfoView();

        
        $(window).on("elemKattintas", (event) => {

            lepes++;


            // lépés kiírása
            if (lepes %2 == 0) {
                
                event.detail.setElem("X");

                let nev = infoView.getOnevElem();

                infoView.setInfoElem(nev + " következik");

            } else {
                
                event.detail.setElem("O");

                let nev = infoView.getXnevElem();

                infoView.setInfoElem(nev + " következik");
            }


            console.log(ticTacToeModel.ellenorzes());

            let eredmeny = ticTacToeModel.ellenorzes();

            // eredmény kiírása
            if (eredmeny == "X") {
                
                let nev = infoView.getXnevElem();

                console.log("X nyert!");
                infoView.setNyeroElem(nev + "nyert!");

                jatekTer.setInaktiv();

            } else if(eredmeny == "O") {
                
                let nev = infoView.getXnevElem();

                console.log("O nyert!");
                infoView.setNyeroElem(nev + "nyert!");

                jatekTer.setInaktiv();

            } else if(lepes == 9) {

                console.log("Döntetlen!");

                infoView.setNyeroElem("Döntetlen!");

                jatekTer.setInaktiv();
            }
        });  
    }

}