import { ReactComponent as Grilo} from './grilo.svg';

function ProductCard() {
    return (
        <div className="order-card-container">
            <h3 className="order-card-title">Grilos Adultos</h3>
            <Grilo className="order-card-image" />
            <h3 className="order-card-price">R$ 35,90</h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>Os insetos têm alto teor de proteína, ácidos graxos e minerais de alta digestibilidade. Além disso, fornecer alimento vivo aos animais estimula o contato com a natureza e diverte o bicho e o dono.</p>
            </div>
        </div>
    )
}

export default ProductCard;