import { useState } from 'react'
import imgS from './assets/subjugated.svg';
import imgE from './assets/empire.svg';
import imgR from './assets/rebel.svg';
import imgN from './assets/neutral.svg';
import iTb from './assets/triangle--blue.svg';
import iSb from './assets/square--blue.svg';
import iCb from './assets/circle--blue.svg';
import iTo from './assets/triangle--orange.svg';
import iSo from './assets/square--orange.svg';
import iCo from './assets/circle--orange.svg';
import { galaxyJSON } from './galaxy.js';
import './App.css'

function App() {
  const [galaxy, setGalaxy] = useState(galaxyJSON)
  

	const Galaxy = () => {
		return (
			<div id="galaxy">
				<div id="board">#board</div>
				{ galaxy.map((system,index) => <System key={index} system={system} /> ) }
			</div>
		)
	};

	const System = (props) => {
		const internalName = `system--${props.system.filter((planet,index) => index === 0)[0].name.replace(/\s+/g, '-').toLowerCase()}`;
		return (
			<div className={internalName}>
				{
					props.system.map((planet,index) => <Planet key={index} name={planet.name} slot={planet.slot} left={planet.left} right={planet.right} always={planet.always} remote={planet.remote}  /> )
				}
			</div>
		)
	};

	const Planet = (props) => {
		const internalName = `planet--${props.name.replace(/\s+/g, '-').toLowerCase()}`;
		
		
		return (
			<div className={internalName}>
				<img src={imgS} />
				<span className="hdr">{props.name}</span>
				{ props.left && 
				<>
					{props.left[1] === 'triangle' && (props.left[0] === 'orange'?<img src={iTo} />:<img src={iTb} />)}
					{props.left[1] === 'square'   && (props.left[0] === 'orange'?<img src={iSo} />:<img src={iSb} />)}
					{props.left[1] === 'circle'   && (props.left[0] === 'orange'?<img src={iCo} />:<img src={iCb} />)}
				</>
				}
				{ props.right && 
				<>
					{props.right[1] === 'triangle' && (props.right[0] === 'orange'?<img src={iTo} />:<img src={iTb} />)}
					{props.right[1] === 'square'   && (props.right[0] === 'orange'?<img src={iSo} />:<img src={iSb} />)}
					{props.right[1] === 'circle'   && (props.right[0] === 'orange'?<img src={iCo} />:<img src={iCb} />)}
				</>
				}
				<ul className="icons">
					<li><img src={imgE} /></li>
					<li><img src={imgS} /></li>
					<li><img src={imgN} /></li>
					<li><img src={imgR} /></li>
				</ul>
			</div>
		)
	};

	return <Galaxy />
}

export default App
