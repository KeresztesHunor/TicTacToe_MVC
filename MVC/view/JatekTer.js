import Mezo from "./Mezo.js";

class JatekTer
{
    constructor(szuloElem)
    {
        for (let i = 0; i < 9; i++)
        {
            new Mezo(szuloElem, i);
        }
    }
}

export default JatekTer;