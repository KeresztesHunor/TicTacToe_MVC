class Model
{
    #jatekos;
    #elemekTartalom = [];

    constructor()
    {
        this.#jatekos = true;
        for (let i = 0; i < 9; i++)
        {
            this.#elemekTartalom.push("");
        }
    }

    get elemekTartalom()
    {
        return this.#elemekTartalom;
    }

    setMezoErtek(index)
    {
        if (this.#elemekTartalom[index] === "")
        {
            this.#elemekTartalom[index] = this.#jatekos ? "X" : "O";
            this.#jatekos = !this.#jatekos;
        }
    }
}

export default Model;