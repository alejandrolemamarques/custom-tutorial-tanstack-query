import React, { useState } from "react";
import {
    useProductList,
    useProductDetails,
    usePrefetchProduct,
} from "../hooks/useProducts";
import styles from "./PrefetchingExample.module.css"; // CSS module for styling

export const PrefetchingExample: React.FC = () => {
    const [selectedProductId, setSelectedProductId] = useState<number | null>(
        null
    );

    // Fetch the list of products
    const {
        data: products,
        isLoading: isListLoading,
        error: listError,
    } = useProductList();

    // Fetch details for the selected product
    const {
        data: productDetails,
        isFetching: isDetailsFetching,
        error: detailsError,
    } = useProductDetails(selectedProductId);

    // Get the prefetch function
    const prefetchProductDetails = usePrefetchProduct();

    const handleSelectProduct = (productId: number) => {
        console.log(`Selected product ${productId}`);
        setSelectedProductId(productId);
    };

    const handlePrefetch = (productId: number) => {
        // Prefetch data when mouse enters the list item
        prefetchProductDetails(productId);
    };

    return (
        <div className={styles.container}>
            <h1>Prefetching Example</h1>
            <p>
                Hover over a product name in the list to prefetch its details.
                Then, click the product name. If prefetching worked, the details
                should appear almost instantly despite the simulated 1-second
                fetch delay. To see the difference, select the product using the
                tab key and enter. A loading UI should appear.
            </p>

            <div className={styles.layout}>
                {/* Product List Column */}
                <div className={styles.listColumn}>
                    <h2>Products</h2>
                    {isListLoading && (
                        <p className={styles.loadingText}>
                            Loading products...
                        </p>
                    )}
                    {listError && (
                        <p className={styles.errorText}>
                            Error loading products: {listError.message}
                        </p>
                    )}
                    {products && (
                        <ul className={styles.productList}>
                            {products.map((product) => (
                                <li
                                    key={product.id}
                                    onMouseEnter={() =>
                                        handlePrefetch(product.id)
                                    }
                                    className={`${styles.productListItem} ${
                                        selectedProductId === product.id
                                            ? styles.selected
                                            : ""
                                    }`}
                                >
                                    <button
                                        onClick={() =>
                                            handleSelectProduct(product.id)
                                        }
                                        className={styles.productButton}
                                    >
                                        {product.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Product Details Column */}
                <div className={styles.detailsColumn}>
                    <h2>Product Details</h2>
                    {selectedProductId === null && (
                        <p>Select a product from the list to view details.</p>
                    )}

                    {isDetailsFetching && (
                        <div className={styles.loadingIndicator}>
                            Fetching Details...
                        </div>
                    )}

                    {detailsError && !isDetailsFetching && (
                        <p className={styles.errorText}>
                            Error loading details: {detailsError.message}
                        </p>
                    )}

                    {productDetails && !isDetailsFetching && (
                        <div className={styles.detailsCard}>
                            <h3>{productDetails.name}</h3>
                            <p>
                                <strong>ID:</strong> {productDetails.id}
                            </p>
                            <p>
                                <strong>Description:</strong>{" "}
                                {productDetails.description}
                            </p>
                            <p>
                                <strong>Price:</strong> $
                                {productDetails.price.toFixed(2)}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
