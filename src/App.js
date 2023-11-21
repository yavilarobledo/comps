import { GoBell, GoDatabase } from 'react-icons/go';
import Button from './Button';


function App() {
    const handleClick=() => {
        console.log('Click!!');
    };
    return <div>

        <div>
            <Button secondary outline rounded className="mb-5" onclick={handleClick}>
                <GoBell />
                Click me!!
            </Button>
        </div>


        <div>
            <Button danger outline onMouseEnter={handleClick}>

                Buy Now!
            </Button>
        </div>


        <div>
            <Button warning onMouseLeave={handleClick}>
                <GoDatabase />
                See Deal!
            </Button>
        </div>


        <div>
            <Button secondary outline>
                Hide Ads!
            </Button>
        </div>


        <div>
            <Button primary rounded>
                Something!
            </Button>
        </div>


    </div>;
}

export default App; 

