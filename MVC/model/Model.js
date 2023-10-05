class Model
{
    #jatekos;
    #vegeVan;
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

    get jatekos()
    {
        return this.#jatekos;
    }

    get vegeVan()
    {
        return this.#vegeVan;
    }

    setMezoErtek(index)
    {
        if (this.#elemekTartalom[index] === "")
        {
            this.#elemekTartalom[index] = this.#jatekos ? "X" : "O";
            this.#vegeVan = this.#vegeVanE();
            if (!this.#vegeVan)
            {
                this.#jatekos = !this.#jatekos;
            }
        }
    }

    #vegeVanE()
    {
        //Egy sorban

        const KERESETT = this.#jatekos ? "X" : "O";
        for (let y = 0; y < 9; y += 3)
        {
            if (this.#elemekTartalom[y] === KERESETT && this.#elemekTartalom[1 + y] === KERESETT && this.#elemekTartalom[2 + y] === KERESETT)
            {
                return true;
            }
        }

        //Egy oszlopban

        for (let x = 0; x < 3; x++)
        {
            if (this.#elemekTartalom[x] === KERESETT && this.#elemekTartalom[x + 3] === KERESETT && this.#elemekTartalom[x + 6] === KERESETT)
            {
                return true;
            }
        }

        //Átlósan

        if (this.#elemekTartalom[0] === KERESETT && this.#elemekTartalom[4] === KERESETT && this.#elemekTartalom[8] === KERESETT)
        {
            return true;
        }
        else if (this.#elemekTartalom[2] === KERESETT && this.#elemekTartalom[4] === KERESETT && this.#elemekTartalom[6] === KERESETT)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

export default Model;