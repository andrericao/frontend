const MenuSuperior = () => {
	return(
		<nav className="navbar navbar-expand-sm bg-primary navbar-dark stick-top">

			<div className="container">
				<a className="navbar-brand" href="#">Controle Pessoalde Livros</a>
				<ul className="navbar-nav">
					<li className="navbar-item">
						<a className="nav-link" href="$">Inclusão</a>
					</li>
					<li className="navbar-item">
						<a className="nav-link" href="$">Manutenção</a>
					</li>
					<li className="navbar-item">
						<a className="nav-link" href="$">Resumo</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default MenuSuperior;