import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import SearchInput from "../components/Searchinput";
import ShowMessage from "../components/ShowMessage";
import { useFetchData } from "../useFetchData";

const Home = () => {

    const {
      result,
      filterCountries,
      setFilterCountries,
      isLoading,
      isError
    } = useFetchData()


    return (
        <>
            {isError&& <ShowMessage message='something want wrong!'/>}
            {isLoading && <ShowMessage message='Loading conuntries data...!' />}
            {!isError && !isLoading && (
          <>
            <div className='flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0'>
              <SearchInput
              CountriesList={result} 
              filterCountriesList={setFilterCountries}
               />
              <RegionMenu 
                CountriesList={result} 
                filterCountriesList={setFilterCountries}/>
            </div>
            <CountryList data={filterCountries}/>
            </>
            )}
        </>
    )
}

export default Home;