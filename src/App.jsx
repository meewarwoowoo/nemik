import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  return (

    <div id="cnt">

    <ul class="systems">
      <li>
        <ul>
          <li data-slot="1" data-left="o3" data-always="1"><span class="hdr">Coruscant<span class="slot"></span></span></li>
          <li data-slot="1" data-left="o3"><span class="hdr">Alderaan<span class="slot"></span></span></li>
          <li data-slot="2" data-left="b3" data-right="o1"><span class="hdr">Cato Neimoidia<span class="slot"></span></span></li>
          <li data-slot="3" data-left="b3" data-right="b4"><span class="hdr">Corellia<span class="slot"></span></span></li>
        </ul>
      </li>
      <li>
        <ul>
          <li data-slot="2" data-left="b1" data-right="o1"><span class="hdr">Ord Mantell<span class="slot"></span></span></li>
          <li class="remote"><span class="hdr">Ilum<span class="slot"></span></span></li>
          <li class="remote"><span class="hdr">Dantooine<span class="slot"></span></span></li>
          <li data-slot="2" data-left="b3" data-right="o4"><span class="hdr">Mygeeto<span class="slot"></span></span></li>
        </ul>
      </li>
      <li>
        <ul>
          <li data-slot="1" data-left="o3" data-right="b3"><span class="hdr">Mandalore<span class="slot"></span></span></li>
          <li class="remote"><span class="hdr">Dathomir<span class="slot"></span></span></li>
          <li data-slot="1" data-left="o3"><span class="hdr">Malastare<span class="slot"></span></span></li>
          <li data-slot="1" data-left="o3" data-right="o3"><span class="hdr">Kashyyyk<span class="slot"></span></span></li>
        </ul>
      </li>
      <li>
        <ul>
          <li data-slot="2" data-left="b3" data-right="b1"><span class="hdr">Mustafar<span class="slot"></span></span></li>
          <li class="remote"><span class="hdr">Hoth<span class="slot"></span></span></li>
          <li class="remote"><span class="hdr">Endor<span class="slot"></span></span></li>
          <li data-slot="1" data-left="o1"><span class="hdr">Bespin<span class="slot"></span></span></li>
        </ul>
      </li>
      <li>
        <ul>
          <li data-slot="3" data-left="b3" data-right="b4"><span class="hdr">Mon Calamari<span class="slot"></span></span></li>
          <li data-slot="1" data-left="o1"><span class="hdr">Felucia<span class="slot"></span></span></li>
          <li class="remote"><span class="hdr">Yavin<span class="slot"></span></span></li>
          <li data-slot="1" data-left="o1"><span class="hdr">Saleucami<span class="slot"></span></span></li>
        </ul>
      </li>
      <li>
        <ul>
          <li data-slot="1" data-left="o3" data-right="b3"><span class="hdr">Nal Hutta<span class="slot"></span></span></li>
          <li data-slot="2" data-left="b1"><span class="hdr">Toydaria<span class="slot"></span></span></li>
          <li data-slot="1" data-left="o3"><span class="hdr">Kessel<span class="slot"></span></span></li>
          <li data-slot="1" data-left="o1"><span class="hdr">Bothawui<span class="slot"></span></span></li>
        </ul>
      </li>
      <li>
        <ul>
          <li data-slot="1" data-left="o3"><span class="hdr">Rodia<span class="slot"></span></span></li>
          <li class="remote"><span class="hdr">Tatooine<span class="slot"></span></span></li>
          <li data-slot="2" data-left="b1" data-right="o4"><span class="hdr">Geonosis<span class="slot"></span></span></li>
          <li data-slot="1" data-left="o3"><span class="hdr">Ryloth<span class="slot"></span></span></li>
        </ul>
      </li>
      <li>
        <ul>
          <li data-slot="2" data-left="o3" data-right="o4"><span class="hdr">Sullust<span class="slot"></span></span></li>
          <li class="remote"><span class="hdr">Dagobah<span class="slot"></span></span></li>
          <li data-slot="1" data-left="o3" data-right="b3"><span class="hdr">Naboo<span class="slot"></span></span></li>
          <li data-slot="3" data-left="b1" data-right="b4"><span class="hdr">Utapau<span class="slot"></span></span></li>
        </ul>
      </li>

      <li>
        <ul>
          <li data-slot="1" data-left="b3" data-right="o3" data-always="4"><span class="hdr">Rebel Base<span class="slot"></span></span></li>
        </ul>
      </li>
    </ul>


    </div>
  )
}

export default App
