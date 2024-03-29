import { useState } from "react";
import imagemRestaurant from "./assets/Logo.png";
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, bebidas, sobremesas } from "./cardapio";


export function App() {
    const paginaMenu = [pratosPrincipais, sobremesas, bebidas]
    const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);


    return  <>
                <img src={imagemRestaurant} alt="" className="capa" />
                <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
                <div className="menu">
                {paginaMenu[paginaSelecionada].map((item, index) => (
                    <ItemCardapio
                        key={index}
                        nome={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                        imagem={item.imagem}
                    />
                ))}
            </div>
            </>
}