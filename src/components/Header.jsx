import picture from "../picture.jpg";

function Header() {
	return (
		<header className="App-header">
			<img src={picture} className="picture" alt="Liliana Santos" />
			<h1 className="title">Liliana Santos</h1>
			<br />
			<h2 className="subtitle">Junior Software Developer</h2>
		</header>
	);
}

export default Header;
