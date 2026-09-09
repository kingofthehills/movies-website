const MovieDetailsSkeleton = () => {
  return (
    <div className="movie-details animate-pulse">
      <div className="h-5 w-40 rounded bg-light-100/10 mb-6" />

      <div className="backdrop h-56 sm:h-[420px] bg-light-100/10" />

      <div className="details-content">
        <div className="poster aspect-2/3 w-[240px] bg-light-100/10" />

        <div className="info w-full space-y-4">
          <div className="h-9 w-2/3 rounded bg-light-100/10" />
          <div className="h-4 w-1/3 rounded bg-light-100/10" />

          <div className="flex flex-row items-center gap-2">
            <div className="h-4 w-14 rounded bg-light-100/10" />
            <div className="h-4 w-8 rounded bg-light-100/10" />
            <div className="h-4 w-10 rounded bg-light-100/10" />
            <div className="h-4 w-12 rounded bg-light-100/10" />
          </div>

          <div className="flex flex-row flex-wrap gap-2">
            <div className="h-7 w-16 rounded-lg bg-light-100/10" />
            <div className="h-7 w-20 rounded-lg bg-light-100/10" />
            <div className="h-7 w-16 rounded-lg bg-light-100/10" />
          </div>

          <div className="h-6 w-32 rounded bg-light-100/10 mt-6" />

          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-light-100/10" />
            <div className="h-4 w-full rounded bg-light-100/10" />
            <div className="h-4 w-2/3 rounded bg-light-100/10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsSkeleton
