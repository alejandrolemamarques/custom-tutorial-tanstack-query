import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProducts, fetchProductById } from "../api/api";
import { Product } from "../types/types";

// Hook to fetch the list of all products
export const useProductList = () => {
    return useQuery<Product[], Error>({
        queryKey: ["products"], // Key for the product list query
        queryFn: fetchProducts,
    });
};

// Hook to fetch details for a single product
export const useProductDetails = (productId: number | null) => {
    return useQuery<Product, Error>({
        queryKey: ["product", productId], // Key includes product ID
        queryFn: () => fetchProductById(productId!),
        enabled: !!productId, // Only fetch if productId is not null
        staleTime: 60 * 1000, // Keep data fresh for 60 seconds
    });
};

// Function to prefetch product details
export const usePrefetchProduct = () => {
    const queryClient = useQueryClient();

    const prefetchProductDetails = (productId: number) => {
        console.log(`Prefetching product ${productId}...`);
        queryClient.prefetchQuery({
            queryKey: ["product", productId],
            queryFn: () => fetchProductById(productId),
            staleTime: 60 * 1000, // Keep prefetched data fresh for 60 seconds
        });
    };

    return prefetchProductDetails;
};
