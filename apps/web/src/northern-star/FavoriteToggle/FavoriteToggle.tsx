import { useFavorites } from "@/contexts/FavoritesContext"

export default function FavoriteToggle({ id }: {id: string}) {
  const { isFavorite, toggleFavorite, favorites } = useFavorites()
  const favorited = isFavorite(id)

  const handleChange = () => {
    toggleFavorite(id)
  }

  return (
    <>
        
                <button
          onClick={handleChange}
          className="flex h-8"
        >
            <span className="sr-only">{favorited ? 'Remove from favorites' : 'Add to favorites'}</span>
            <svg
              className={`cursor-pointer ${favorited ? 'fill-red-500' : 'fill-black hover:fill-red-500'}`}
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
    </>
  )
}