'use client'

import { useEffect, useRef, useState } from "react";

import ImageGalleryComponent from "./ImageComponent/ImageGalleryComponent";
import "./ArtPortfolio.scss"

import { imgTestArray } from "../../utils/imageLib";


const ArtPortfolio = () => {
    const [items, setItems] = useState([])
    const loaderRef = useRef();
    const [page, setPage] = useState(0);

    const [isLoadingPictures, setIsLoadingPictures] = useState(true)

    const batchSize = 4;

    useEffect(() => {
        setItems(imgTestArray.slice(0, batchSize));
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoadingPictures(false)
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (page === 0) return; // skip initial load
        const nextBatch = imgTestArray.slice(
            page * batchSize,
            (page + 1) * batchSize
        );
        if (nextBatch.length > 0) {
            setItems(prev => [...prev, ...nextBatch]);
        }
    }, [page]);

    return (
        <div className="art-gallery-container">
            {
                !isLoadingPictures ? imgTestArray.map((img, i) => {
                    return (
                        <ImageGalleryComponent imageSource={img} key={i} />
                    )
                }) :
                    <div className="art-gallery-loading-container">
                        <div className="art-gallery-loading-content">Loading</div>
                    </div>
            }
        </div>
    )
}

export default ArtPortfolio;