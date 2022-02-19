import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from "../interfaces/credits";
import { FullMovieDetails } from "../interfaces/movie";

interface MovieDetails {
    isLoading: boolean;
    fullMovieDetails?: FullMovieDetails
    cast: Cast[];
}

export const useMovieDetails = ( movieId : number ) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    fullMovieDetails: undefined,
    cast: []
  });

  const getMovieDetails = async () => {

    const fullMovieDetailsPromise = await movieDB.get<FullMovieDetails>(`${ movieId }`)
    const creditsPromise = movieDB.get<CreditsResponse>(`${ movieId }/credits`)

    const [ fullMovieDetailsResponse, creditsResponse ] = await Promise.all([ fullMovieDetailsPromise, creditsPromise ])
    
    setState({
      isLoading: false,
      fullMovieDetails: fullMovieDetailsResponse.data,
      cast: creditsResponse.data.cast
    })
  }

  useEffect(() => {
    getMovieDetails()
  }, [ ]);
  
  return {
    ...state
  }

};
