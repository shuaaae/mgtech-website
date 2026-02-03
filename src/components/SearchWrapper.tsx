"use client"

import { useSearch } from "@/contexts/SearchContext"
import { Search } from "@/components/Search"

export function SearchWrapper() {
  const { isSearchOpen, closeSearch } = useSearch()
  return <Search isOpen={isSearchOpen} onClose={closeSearch} />
}
