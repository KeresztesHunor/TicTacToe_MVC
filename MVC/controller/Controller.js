import Model from "../model/Model.js";
import JatekTer from "../view/JatekTer.js";

class Controller
{
    constructor()
    {
        const MODEL = new Model();
        const JATEK_TER = new JatekTer($("#jatek-ter"));
        $(window).on("elemreKattintottEvent", event => {
            MODEL.setMezoErtek(event.detail.index);
            event.detail.mezobeIr(MODEL.elemekTartalom[event.detail.index]);
        });
    }
}

export default Controller;