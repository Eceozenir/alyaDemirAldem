"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/navigation'; // useRouter'ı içe aktar

export default function AniClientSide({ Data }) {
    const router = useRouter(); // useRouter'ı tanımla

    const handleButtonClick = (id) => {
        router.push(`/anilarimiz/${id}`); // Butona tıklandığında yönlendirme yap
    };

    return (
        <div className='anilarCards'>
            {Data.map(data => (
                <div className='anilarCard' key={data.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={data.img} />
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Button variant="primary" onClick={() => handleButtonClick(data.id)}>Anımız için tıkla...</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}
