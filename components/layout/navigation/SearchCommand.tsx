"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Search } from 'lucide-react';
import { Place } from "@/types";
import { getPlaces } from "@/action/actions";

export default function SearchCommand() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResult] = useState<Place[]>([])

  const fetchPlacesOnSearch = async function(search: string){
    const searchTerm = search.toLowerCase()
    const places: Place[] = await getPlaces();
    const sortPlaces = [...places].sort((a, b) => b.rating - a.rating)

    if(search === ''){
      setSearchResult(sortPlaces.slice(0, 5))
      return
    }
    
    setSearchResult(sortPlaces.filter(place => place.name.toLowerCase().includes(searchTerm)))
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchPlacesOnSearch(search)
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search])

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit border-gray-400">
        <Search />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command shouldFilter={false}>
          <CommandInput placeholder="ค้นหาสถานที่ท่องเที่ยว..." onValueChange={setSearch} value={search} />
          <CommandList>
            <CommandEmpty>ไม่พบสถานที่.</CommandEmpty>
            {searchResults.length > 0 && (
              <CommandGroup heading="สถานที่ท่องเที่ยวยอดฮิต">
                {searchResults.map(result => (
                  <CommandItem key={result.id}>{result.name}</CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
