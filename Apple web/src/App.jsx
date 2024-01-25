import {FaApple} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsBox2} from 'react-icons/bs'
// import {LiaGreaterThanSolid} from 'react-icons/li'
import Caro from './carosel.jsx'
import './App.css'

function App() {


  return (
    <>
       <div className='body'>
        <div className='container'>
          <header className='head'>
            <div className='headerWrapper'>
              <FaApple fill='grey' size={25}/> 
               <h5>Store</h5>
               <h5>Mac</h5>
               <h5>ipad</h5>
               <h5>Iphone</h5>
               <h5>Watch</h5>
               <h5>Vision</h5>
               <h5>Airpods</h5>
               <h5>TV & Home</h5>
               <h5>Entertainment</h5>
               <h5>Accessories</h5>
               <h5>support</h5>
               <AiOutlineSearch size={20}/>
               <BsBox2 size={15}/>
            </div>
          </header>
          <div className='contain'>
            <div className='textUp'>
              <h1 className='texts'>MackBook Pro</h1>
              <h3 className='mind'>Mind-blowing. Head-turning</h3>
              <h5 className='textes'>Learning <span>buy</span></h5>
            </div>
            <div className='downImage'>
              <img src="./src/assets/newLaptop.png" alt="" className='firstImage'/>
            </div>
          </div>
        </div>
        <div className='contain2'>
          <header className='imac'>
            <div className='holdText'>
            <h1 className='texts'>IMAC</h1>
            <h3 className='mind'>Packed with more juice</h3>
            <h5 className='textes'>Learning <span>buy</span></h5>
            </div>
          </header>
          <div className='imageHolder'>
            <img src="./src/assets/newTv.png" alt="" className='secondImage'/>
          </div>
        </div>
        <div className='contain3'>
          <header className='iphone15'>
            <div className='titanium'>
              <h1 className='pro'>Iphone 15 pro</h1>
              <h3 className='light'>Tatnium.So strong.So light.So pro.</h3>
              <h5 className='textes'>Learning <span>buy</span></h5>
            </div>
          </header>
          <div className='imageHolder2'>
            <img src="./src/assets/15pro-removebg.png" alt="" className='phone'/>
          </div>
        </div>
        <div className='container4'>
          <div className='left1'>
            <header className='Newcamera'>
              <div className='learning'>
              <h1 className='h1'>iphone 15</h1>
              <h3 className='camera'>New camera.New design.Newphoria</h3>
              <h5 className='textes'>Learning <span>buy</span></h5>
              </div>
            </header>
            <div className='imageHolder3'>
              <img src="./src/assets/newicon.png" alt="" className='cameraImage'/>
            </div>
          </div>
          <div className='right1'>
            <header className='wonderAwaits'>
            <header className='Newcamera'>
              <div className='learnings'>
              <h1 className='h1'>Wonder awaits.</h1>
              <h3 className='cameras'>give the gift they've been looking forward to all year</h3>
              <h5 className='textes'>shop</h5>
              </div>
            </header>
            <div className='imageHolder3'>
              <img src="./src/assets/newApple.png" alt="" className='cameraImages'/>
            </div>
            </header>
          </div>
        </div>
        <div className='container5'>
          <div className='left2'>
            <header className='watch'>
              <div className='smarter'>
                <div className='same'>
                <FaApple fill='white' size={40}/><h1 className='pro'>WATCH</h1>
                </div>
                <h6 className='col'>series 9</h6>
                <h3 className='camera'>Smarter. Brighter. Mighter.</h3>
                <h5 className='textes'>Learning <span>buy</span></h5>
              </div>
            </header>
            <div className='imageHolder4'>
              <img src="./src/assets/newWristWatch.png" alt="" className='Watch'/>
            </div>
          </div>
          <div className='right2'>
            <header className='head2'>
              <div className='inside'>
                <h1 className='h1'>Airpods Pro</h1>
                <h3 className='camera'>Adaptive Audio. Now playing</h3>
                <h5 className='textes'>Learning <span>buy</span></h5>
              </div>
            </header>
            <div className='imageHolder5'>
              <img src="./src/assets/newEarpod.png" alt="" className='Watchs'/>
            </div>
          </div>
        </div>
        <div className='container6'>
          <div className='left3'>
           <header className='hd'>
            <div className='insideHolder'>
            <div className='same'>
                <FaApple fill='black' size={40}/><h1 className='pro'>Card</h1>
              </div>
              <h4 className='debug'>Get up to 3% Daily Cash</h4>
              <h4>with every purchase</h4>
              <h5 className='textes'>Learning <span>buy</span></h5>
            </div>
           </header>
           <div className='imageHolder6'>
               <img src="./src/assets/newCard.png" alt="" className='cards'/>
           </div>
          </div>
          <div className='right3'>
          <header className='hd'>
            <div className='insideHolders'>
            <div className='same'>
                <FaApple fill='black' size={40}/><h1 className='pro'>Trade in</h1>
              </div>
              <h4 className='debug'>Get $200-$650 in credit when your trade in iphone 11 or higher.</h4>
              {/* <h4>with every purchase</h4> */}
              <h5 className='textes'>See what your device in worth</h5>
            </div>
           </header>
           <div className='imageHolder6'>
               <img src="./src/assets/newPhones.png" alt="" className='cards'/>
           </div>
          </div>
        </div>
        <div className='container7'>
          <Caro/>
        </div>
        </div> 
    </>
  )
}

export default App
