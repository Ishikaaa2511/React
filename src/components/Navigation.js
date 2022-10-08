import{Link}  from 'react-router-dom';

const Navigation = () => {

    const cartstyle={
        background: 'orange',
        display: 'flex',
        padding:' 6px 12px',
        borderRadius: '50px',
    }

  return (
    <>
        <nav className="container mx-auto flex items-center justify-between py-4 " >
            <Link to="/">
                <img style={{ height:45}} src="/images/icecreamstuffedcandy.jpeg" alt="logo" />
            </Link>
       
            <ul className="flex items-center">
                
            <li><Link to="/"> Home</Link></li>
            <li className=" ml-6"> <Link to="/products"> Products</Link></li>
            <li className=" ml-6">
            <Link to="/cart"> 
                <div style={cartstyle}>
                    <span>10</span>
                    {/* <img src="/images/logo512.png" alt="cart-icon" /> */}
                </div>
            </Link>
            </li>
            </ul>
        </nav>
    </>
  )
}

export default Navigation;
