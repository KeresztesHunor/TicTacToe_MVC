import Model from "../model/Model.js";
import JatekTer from "../view/JatekTer.js";
import Nyertes from "../view/Nyertes.js"

class Controller
{
    constructor()
    {
        const MODEL = new Model();
        const JATEK_TER = new JatekTer($("#jatek-ter"));
        const NYERTES = new Nyertes($("#nyertes"));
        $(window).on("elemreKattintottEvent", event => {
            if (!MODEL.vegeVan)
            {
                MODEL.setMezoErtek(event.detail.index);
                event.detail.mezobeIr(MODEL.elemekTartalom[event.detail.index]);
                if (MODEL.vegeVan)
                {
                    NYERTES.gyoztesKiir(MODEL.jatekos ? "X" : "O");
                }
            }
        });
    }
}

export default Controller;