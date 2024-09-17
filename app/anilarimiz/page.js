import Data from '@/data/data.json'
import AniClientSide from '../components/aniClientSide';

export default function Anilar(){
    return(
        <AniClientSide Data={Data} />
    )
}