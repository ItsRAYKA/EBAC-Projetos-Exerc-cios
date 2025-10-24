
// Componente funcional que representa um cartão de produto
function ProdutoCard({ nome, preco, descricao, imagem, onDelete }) {
    return (

        <div className='ProdutoCard'>
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <strong>R$ {preco}</strong>

            <button onClick={onDelete}>Apagar</button>
        </div>

    )
}

export default ProdutoCard
