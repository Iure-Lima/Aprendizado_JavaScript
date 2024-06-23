import './App.css';
import Restaurante from './assets/hashtaurante.webp';
import { useState } from 'react';
import { Navegacao } from './Navegacao';
import { ItemCardapio } from './ItemCardapio';
import {pratosPrincipais, sobremesas, bebidas} from './cardapio';


export function App(){
  const [paginaSelecionado, atualizarPaginaSelecionada] = useState(0);
  const paginasMenu = [pratosPrincipais,sobremesas,bebidas]

  return <>
    <img src={Restaurante} alt="Imagem Restaurante" className='capa' />
    <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}></Navegacao>
    <div className='menu'>
      {paginasMenu[paginaSelecionado].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
    </div>
  </>
}

