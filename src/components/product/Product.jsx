import './product.css'

const Product = ({img}) => {
    console.log(img)
    return (
        <div className='product'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>              
            </div>
                <img className='p-img' src={img} alt="" />                  
               
        </div>
    )
}

export default Product
