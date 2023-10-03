class Mezo
{
    #mezoElem;
    #index;

    constructor(szuloElem, index)
    {
        szuloElem.append(`<button class="elem btn border"></button>`);
        this.#mezoElem = szuloElem.children("button:last-child");
        this.#index = index;
        this.#mezoElem.on("click", () => {
            window.dispatchEvent(new CustomEvent("elemreKattintottEvent", { detail: this }));
        });
    }

    get index()
    {
        return this.#index;
    }

    mezobeIr(tartalom)
    {
        this.#mezoElem.html(tartalom);
    }
}

export default Mezo;