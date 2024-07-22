'use client'
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon, X } from "lucide-react"
import queryString from "query-string"
import { useState } from "react"


export const Search = () => {
    const route = useRouter();
    const [value, setValue] = useState('');
    const handlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if(!value) {
            return;
        }
        const term = queryString.stringifyUrl({
            url: '/search',
            query: { term: value }
        }, { skipEmptyString: true});
        console.log(term);
        route.push(term);
    }
    const onClear  = () => {
        setValue('');
    }
    return (
        <form 
            onSubmit={handlSubmit}
            className="relative w-full lg:w-[400px] flex items-center"> 
            <Input 
                placeholder="Search ..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-9 rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0" />
            { 
                 value && <X onClick={onClear} className="absolute right-14 top-2.5 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition "/> 
            }    
            <Button 
                type="submit"
                size="sm"
                variant="secondary"
                className="rounded-l-none">
                <SearchIcon 
                    className="h-5 w-5 text-muted-foreground"/>
            </Button>
        </form>
    )
}