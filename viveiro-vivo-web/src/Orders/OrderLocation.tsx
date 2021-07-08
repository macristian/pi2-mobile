import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function OrderLocation() {

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">Selecione onde o pedido deve ser entregue</h3>
                <div className="filter-container">

                </div>
                <MapContainer center={[-9.664762284652031, -35.72782215902603]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-9.664762284652031, -35.72782215902603]}>
                        <Popup>
                            Endereço do <br /> local da entrega.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default OrderLocation;