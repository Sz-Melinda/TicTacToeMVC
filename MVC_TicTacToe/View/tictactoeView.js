
class Elem {

    constructor(szuloElem) {

        this.node = szuloElem;
        this.node.append("<div><p></p></div>");
        this.elem = this.node.children("div:last");
        this.pElem = this.elem.children("p");

        this.aktiv = true;
        this.ertek = "-";

        this.elem.on("click", () => {

            if(this.aktiv) {

                this.kattTrigger();
            }
            
            this.aktiv = false;
        });
    }

    setElem(ertek) {

        this.ertek = ertek;
        this.pElem.text(ertek);
    }

    kattTrigger() {

        let esemeny = new CustomEvent("elemKattintas", {detail:this});
        window.dispatchEvent(esemeny);
    }

}


class JatekTer {

    constructor(tomb) {

        const szuloElem = $("article");

        for (let i = 0; i < 9; i++) {

            tomb.push(new Elem(szuloElem));
        }
    }

    setInaktiv() {

        tomb.array.forEach(element => {
            
            element.aktiv.setElem = false;
        });
    }

}


class InfoView {

    constructor() {

        this.xNevElem = $("#xNev");
        this.oNevElem = $("#oNev");
        this.infoElem = $(".kovetkezoJatekos");
        this.nyeroElem = $(".jatekVege");
    }

    getXnevElem() {

        return this.xNevElem.val();
    }

    getOnevElem() {

        return this.oNevElem.val();
    }

    setInfoElem(ertek) {

        return this.xNevElem.val(ertek);
    }

    setNyeroElem(ertek) {

        return this.xNevElem.val(ertek);
    }

}