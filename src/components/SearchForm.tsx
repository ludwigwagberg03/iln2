import { useState } from 'react'
import SearchBtnComponent from './SearchBtnComponent';

function SearchForm() {

    const [val, setVal] = useState("");
    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(val);
    }

    return (
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">
                Search
            </label>

            <div className="relative">

                <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                </div>

                <input
                    type="search"
                    id="search"
                    value={val}
                    onChange={(event) => setVal(event.target.value)}
                    className="block w-full p-3 pl-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                    placeholder="Search"
                    required />

                <SearchBtnComponent />
            </div>
        </form>
    );
}
export default SearchForm