import type {NextPage} from 'next'
import Home from '@/components/sreens/home/Home'
import {IHome} from '@/interfaces/IHome.interface'
import {IMovie} from '@/interfaces/IMovie.interface'

const HomePage: NextPage<IHome> = (props) => {
    const moviesMock: IMovie[] = [
        {
            id: 1,
            name: 'Леди берд',
            rating: 2.1,
            poster: '/poster1.jpg',
            views: 392746634,
            fees: 1090240
        },
        {
            id: 2,
            name: 'Супермены',
            rating: 7.3,
            poster: '/poster2.jpg',
            views: 129048760,
            fees: 898097
        }
    ]
    return <Home newMovies={moviesMock}/>
}


export default HomePage
