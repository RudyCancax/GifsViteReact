export const GifImage = ({ imageURL }) => {
  return (
    <img 
      className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" 
      src={imageURL} alt="" />
  )
}
