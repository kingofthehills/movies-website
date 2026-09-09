const MovieCardSkeleton = () => {
  return (
    <div className="movie-card animate-pulse">
      <div className="aspect-2/3 w-full rounded-lg bg-light-100/10" />

      <div className="mt-4 space-y-3">
        <div className="h-4 w-3/4 rounded bg-light-100/10" />

        <div className="flex flex-row items-center gap-2">
          <div className="h-4 w-10 rounded bg-light-100/10" />
          <div className="h-4 w-8 rounded bg-light-100/10" />
          <div className="h-4 w-10 rounded bg-light-100/10" />
        </div>
      </div>
    </div>
  )
}

export default MovieCardSkeleton
