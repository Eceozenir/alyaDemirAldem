import data from '@/data/data.json'; // JSON dosyasını içe aktar
import Image from 'next/image';

export default function AnilarDetayPage({ params }) {
    const { id } = params; // URL'den ID'yi al

    const anı = data.find(item => item.id === parseInt(id));

    if (!anı) {
        return <div>Bu anıya ulaşamadık.</div>; // Anı bulunamazsa hata mesajı göster
    }

    return (
        <div className='detailPage'>
            <div className='detailContainer'>
                <Image className='detailImg' src={anı.img} alt={anı.title}></Image>
                <div className='detailTexts'>
                    <h1>{anı.title}</h1>
                    <p>{anı.description}</p>
                </div>
            </div>
        </div>
    );
}
