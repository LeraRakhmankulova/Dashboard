import styles from './index.module.sass'
import {ChangeEvent, FC, useState} from "react";

// export type SearchType = {
//     setPlaces: SetStateType<IPlace[]>
//     initialPlaces: IPlace[],
//     setIsLoading: SetStateType<boolean>
// }
const Search: FC<any> = ({setPlaces, initialPlaces, setIsLoading}) => {
    const [searchValue, setSearchValue] = useState('')

    // const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setIsLoading(true)
    //     const value = e.target.value
    //     setSearchValue(value)
    //     setTimeout(() => {
    //         if (value) {
    //             setPlaces(initialPlaces.filter(place => place.location.city.toLowerCase().includes(value) ||
    //                 place.location.country.toLowerCase().includes(value)))
    //         } else setPlaces(initialPlaces)
    //         setIsLoading(false)
    //     }, 500)
    // }

    return (
        <div className={styles.search}>
            <span className='material-icons-outlined'>search</span>
            <input type='text'
                   // onChange={searchHandler}
                   value={searchValue}
                   placeholder='Search place'/>
        </div>
    )
}

export default Search