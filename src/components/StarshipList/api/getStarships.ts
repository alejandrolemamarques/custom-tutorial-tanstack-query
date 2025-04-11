import { useQuery } from '@tanstack/react-query';

export const useStarships = () => {
    return useQuery({
        queryKey: ['starships'],
        queryFn: async () => {
            const response = await fetch('https://swapi.dev/api/starships/');
            const data = await response.json();
            return data.results;
        }
    });
};
