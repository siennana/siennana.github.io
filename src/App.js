import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="title-wrapper screen">
		<div class="main-content">
			<div class="content-wrapper">
				<div class = "name-title title" >
					<div class="first">SIENNA </div>
					<div class="last">BROWN</div>
					<div class="icon"><i class="fas fa-grin-tongue-squint"></i></div>
				</div>
				<div class="typewriter"><h1>Blah</h1></div>
				<div class="button-wrapper">
					<a href="pages/users.html">
						<div class="button">CONTINUE</div>
					</a>
				</div>
			</div>
		</div>
		<div id="music" class="panel panel-music">
			<div class="top_bar">
				<div class="min bar_click"><i class="far fa-window-minimize"></i></div>
				<div class="max bar_click"><i class="far fa-window-maximize"></i></div>
				<div onclick="closeWindow()" id="close" class="exit bar_click"><i class="far fa-window-close"></i></div>
			</div>
			<div class="title"></div>
			<div class="content">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, repellendus modi qui sapiente omnis voluptas a molestiae! Optio beatae, reprehenderit hic placeat modi, nihil eius earum, ipsum tempore aperiam distinctio.</p>
			</div>
		</div>
	</div>
  );
}

export default App;
