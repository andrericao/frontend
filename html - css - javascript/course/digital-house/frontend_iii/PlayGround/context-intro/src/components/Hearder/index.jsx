import styles from './header.module.css';

export default function Header(){
	return (
		<header className={styles.header} >
			<h1>Bem vindo</h1>
			<nav>
				<ul>
					<li>
						<a href="">André</a>
					</li>
				</ul>
			</nav>

		</header>
	)
}