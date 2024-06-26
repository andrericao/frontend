import "./ItemLista.css"

// const ItemList = (props)
// deste modo seria usado props."dado desejado""
const ItemLista = ({ id, titulo, autor, ano, preco, foto, excluirClick, alterarClick }) => {
	return (
		<tr>
			<td>{id}</td>
			<td>{titulo}</td>
			<td>{autor}</td>
			<td>{ano}</td>
			<td className="text-end">
				{Number(preco).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
			</td>
			<td className="text-center">
				<img src={foto} alt="Capa do Livro" width="75" />
			</td>
			<td className="text-center">
				<i className="exclui text-danger fw-bold" title="Excluir"
					onClick={excluirClick}>&#10008;</i>
				<i className="altera text-success fw-bold" title="Alterar"
				onClick={alterarClick}>&#36;</i>
			</td>
		</tr>
	);
}

export default ItemLista;