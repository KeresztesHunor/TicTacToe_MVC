class Nyertes
{
    #szuloElem;

    constructor(szuloElem)
    {
        this.#szuloElem = szuloElem;
    }

    gyoztesKiir(gyoztes)
    {
        this.#szuloElem.append(`
            <div>Győztes: ${gyoztes}</div>
        `);
    }
}

export default Nyertes;