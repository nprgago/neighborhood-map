
/* Utilities */

export const findTerm = (titulo: string, termo: string) => {
  const title = titulo.toLowerCase() 
  const term = termo.toLowerCase()

  if (title.search(term) >= 0) {
    return true
  }

  return false
}