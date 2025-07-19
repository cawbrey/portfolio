// import './Bouncer.css';
// import React, {useState, useEffect, useRef} from 'react';
//
// const Bouncer = () => {
//     const containerRef = useRef(null); // Reference to the container div
//
//     const [containerSize, setContainerSize] = useState({ width: 400, height: 400 });
//     const logoSize = { width: 100, height: 50 };
//     const [velocity, setVelocity] = useState({ dx: 2, dy: 2 });
//     const [position, setPosition] = useState({ x: (containerSize.width - logoSize.width)/2, y: (containerSize.height - logoSize.height)/2 });
//
//     useEffect(() => {
//         const updateContainerSize = () => {
//             if (containerRef.current) {
//                 setContainerSize({
//                     width: containerRef.current.offsetWidth,
//                     height: containerRef.current.offsetHeight,
//                 });
//             }
//         };
//
//         // Initialize container size and update on window resize
//         updateContainerSize();
//         window.addEventListener("resize", updateContainerSize);
//
//         return () => window.removeEventListener("resize", updateContainerSize);
//     }, []);
//
//     useEffect(() => {
//         const moveLogo = () => {
//             setPosition((prev) => {
//                 let newX = prev.x + velocity.dx;
//                 let newY = prev.y + velocity.dy;
//
//                 //Left Wall
//                 if (newX <= 0) {
//                     setVelocity((v) => ({ ...v, dx: 2 }));
//                     newX = Math.max(0, newX);
//                 }
//
//                 //Top Wall
//                 if (newY <= 0) {
//                     setVelocity((v) => ({ ...v, dy: 2 }));
//                     newY = Math.max(0, newY);
//                 }
//
//                 //Right Wall
//                 if (newX + logoSize.width >= containerSize.width) {
//                     setVelocity((v) => ({ ...v, dx: -2 }));
//                     newX = Math.min(containerSize.width - logoSize.width, newX);
//                 }
//
//                 //Bottom Wall
//                 if (newY + logoSize.height >= containerSize.height) {
//                     setVelocity((v) => ({ ...v, dy: -2 }));
//                     newY = Math.min(containerSize.height - logoSize.height, newY);
//                 }
//
//                 return { x: newX, y: newY };
//             });
//         };
//
//         const animationFrame = requestAnimationFrame(moveLogo);
//         return () => cancelAnimationFrame(animationFrame);
//     }, [containerSize.height, containerSize.width, logoSize.height, logoSize.width, position, velocity]);
//
//     return (
//         <div className="rectangle" ref={containerRef}>
//             <div
//                 className="dvd-logo"
//                 style={{
//                     transform: `translate(${position.x}px, ${position.y}px)`,
//                 }}
//             >
//                 DVD
//             </div>
//         </div>
//     );
// };
//
// export default Bouncer;

import React, { useState, useEffect, useRef } from "react";

const Bouncer = () => {
    const containerRef = useRef(null); // Reference to the container div

    const [containerSize, setContainerSize] = useState({ width: 400, height: 400 });
    const logoSize = { width: 100, height: 50 };
    const [velocity, setVelocity] = useState({ dx: 2, dy: 2 });
    const [position, setPosition] = useState({
        x: (containerSize.width - logoSize.width) / 2,
        y: (containerSize.height - logoSize.height) / 2,
    });

    // Update container size when resized
    useEffect(() => {
        const updateContainerSize = () => {
            if (containerRef.current) {
                setContainerSize({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateContainerSize();
        window.addEventListener("resize", updateContainerSize);

        return () => window.removeEventListener("resize", updateContainerSize);
    }, []);

    // Bouncing logic
    useEffect(() => {
        const moveLogo = () => {
            setPosition((prev) => {
                let newX = prev.x + velocity.dx;
                let newY = prev.y + velocity.dy;

                //Left Wall
                if (newX <= 0) {
                    setVelocity((v) => ({ ...v, dx: Math.abs(v.dx) }));
                    newX = Math.max(0, newX);
                }

                //Top Wall
                if (newY <= 0) {
                    setVelocity((v) => ({ ...v, dy: Math.abs(v.dy) }));
                    newY = Math.max(0, newY);
                }

                //Right Wall
                if (newX + logoSize.width >= containerSize.width) {
                    setVelocity((v) => ({ ...v, dx: -Math.abs(v.dx) }));
                    newX = Math.min(containerSize.width - logoSize.width, newX);
                }

                //Bottom Wall
                if (newY + logoSize.height >= containerSize.height) {
                    setVelocity((v) => ({ ...v, dy: -Math.abs(v.dy) }));
                    newY = Math.min(containerSize.height - logoSize.height, newY);
                }

                return { x: newX, y: newY };
            });
        };

        const animationFrame = requestAnimationFrame(moveLogo);
        return () => cancelAnimationFrame(animationFrame);
    }, [containerSize, logoSize, velocity]);

    return (
        <div
            ref={containerRef}
            className="rectangle"
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                border: "10px solid black"

            }}
        >
            <div
                className="dvd-logo"
                style={{
                    position: "absolute", // Required for bouncing inside the container
                    width: `${logoSize.width}px`,
                    height: `${logoSize.height}px`,
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    backgroundColor: "red",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                DVD
            </div>
        </div>
    );
};

export default Bouncer;
