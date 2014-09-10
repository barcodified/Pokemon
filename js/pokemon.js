function Pokemon(n,v,a)
{
    this.grito = "Pika!";
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.gritar = function ()
    {
        alert(this.grito);
    }
}

function inicio()
{
    var rattata = new Pokemon("Rattata", 40, 2);
    rattata.vida = rattata.vida - 13;
    rattata.grito = "onomatopeya indescriptible"
    //alert(rattata.grito);
    nombrePokemon.textContent = rattata.nombre;
    datosPokemon.textContent =  "El nombre del Pokemon es " + rattata.nombre +    
                                ", su vida es de " + rattata.vida + 
                                ", tiene un ataque de " + rattata.ataque + 
                                " ...y su grito es : " + rattata.grito;
}