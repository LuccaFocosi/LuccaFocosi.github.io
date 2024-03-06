import { useState } from "react";

function Home()
{
    const InitState: Record<string, boolean> = { "L0": false, "L1": false, "L2": false, "L3": false, "L4": false };
    const [atualizar, setAtualizar] = useState(InitState);

    function click(e: React.MouseEvent<HTMLHeadingElement, MouseEvent>)
    {
        const obj = {...atualizar};
        const target = e.target as HTMLInputElement;
        const Id = "L" + target.id;
        obj[Id] = !atualizar[Id];
        setAtualizar(obj);
    }
    function montarletra(num: string, letra: string)
    {
        return <h1 id={num} onClick={(e) => click(e)}>{letra}</h1>;
    }

    return(
        <div>
            <div id="portaEsquerda"></div>
            <div id="portaDireita"></div>
            { atualizar["L0"]? <h1>F</h1> : montarletra("0", "B") }
            { atualizar["L1"]? <h1>R</h1> : montarletra("1", "A") }
            { atualizar["L2"]? <h1>O</h1> : montarletra("2", "C") }
            { atualizar["L3"]? <h1>N</h1> : montarletra("3", "K") }
            { atualizar["L4"]? <h1>T</h1> : montarletra("4", "?") }
            { Object.values(atualizar).filter((iten) => !iten).length? <></> : <button>END</button> }
        </div>
    );
}

export default Home;
