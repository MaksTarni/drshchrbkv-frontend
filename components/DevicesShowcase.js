export default function DevicesShowcase() {
    const devices = [
        { type: 'desktop', size: '1366 × 768', label: 'Desktop' },
        { type: 'tablet', size: '768', label: 'Tablet' },
        { type: 'mobile', size: '320', label: 'Mobile' }
    ];

    return (
        <section className="devices-section">
            <div className="container">
                <h2 className="devices-title">Responsive Design</h2>
                <div className="devices-container">
                    {devices.map((device, index) => (
                        <div key={index} className={`device ${device.type}`}>
                            <div className="device-size">{device.size}</div>
                            <div className="device-label">{device.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}