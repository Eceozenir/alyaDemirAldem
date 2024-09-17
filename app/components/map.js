export default function Map() {
    return (
        <div className="mapContainer">
            <div className="map">
                <h1 className="mapTitle">İşte burası ilk seni gördüğüm, ilk tanıştığımız yer sevgilim... Her şey burdan sonra başladı</h1>
                <div className="mapIframe">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.4588596972812!2d35.322966674891454!3d36.99884815647822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f03ee727efd%3A0x992904510f992059!2sDouble%20Up%20Coffee!5e0!3m2!1str!2str!4v1726562230000!5m2!1str!2str" 
                        width="100%" 
                        height="400" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
}
