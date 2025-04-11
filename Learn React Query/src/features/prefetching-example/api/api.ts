import { Product } from "../types/types";

// Mock product data
const mockProducts: Product[] = [
    {
        id: 1,
        name: "Laptop Pro",
        description: "High-performance laptop",
        price: 1200,
    },
    {
        id: 2,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse",
        price: 25,
    },
    {
        id: 3,
        name: "Mechanical Keyboard",
        description: "RGB mechanical keyboard",
        price: 75,
    },
    {
        id: 4,
        name: "4K Monitor",
        description: "32-inch 4K UHD Monitor",
        price: 300,
    },
];

// Simulate fetching a list of products
export const fetchProducts = async (): Promise<Product[]> => {
    console.log("Fetching product list...");
    await new Promise((resolve) => setTimeout(resolve, 500)); // Shorter delay for list
    console.log("Fetched product list.");
    return mockProducts;
};

// Simulate fetching details for a single product
export const fetchProductById = async (productId: number): Promise<Product> => {
    console.log(`Fetching details for product ${productId}...`);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Longer delay for details

    const product = mockProducts.find((p) => p.id === productId);
    if (!product) {
        throw new Error(`Product with id ${productId} not found`);
    }

    console.log(`Fetched details for product ${productId}:`, product);
    return product;
};
