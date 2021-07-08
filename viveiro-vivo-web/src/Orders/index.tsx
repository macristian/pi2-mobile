import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import Footer from '../Footer';
import './styles.css';


function Orders() {

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList />
            </div>
        </>
    )
}

export default Orders;