function OrderSummary() {
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                <span className="amount-selected-container">
                    <strong className="amout-selected">2 </strong>
                    PEDIDOS SELECIONADOS
                </span>
                <span className="order-summary-total"></span>
                <strong className="amout-selected">R$ 71,80 </strong>
                VALOR TOTAL
                </div>
                <button className="order-summary-make-order">FAZER PEDIDO</button>
            </div>
        </div>
    );
}
export default OrderSummary;