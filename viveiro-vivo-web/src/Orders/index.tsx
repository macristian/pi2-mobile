import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import OrderSummary from './OrderSummary';
import OrderLocation from './OrderLocation';
import './styles.css';




function Orders() {

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList />
                <OrderLocation />
                <OrderSummary />
            </div>
        </>
    )
}

export default Orders;