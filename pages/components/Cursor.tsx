import { useEffect, useRef } from "react";
import styled from "styled-components";

const runOnClient = (func: () => any) => {
    if (typeof window !== "undefined") {
        if (window.document.readyState == "loading") {
            window.addEventListener("load", func);
        } else {
            func();
        }
    }
};

const Cursor: React.FC = () => {

    const DotOutline = styled.div`
        width: 40px;
        height: 40px;
        background: linear-gradient(61.69deg, #EB5757 13.74%, #F2994A 88.78%);;
        pointer-events: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        opacity: 0.75;
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    `;

    const Dot = styled.div`
        pointer-events: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    `;

    const dot = useRef(null);
    const dotOutline = useRef(null);

    const delay = 18;

    const cursoVisible = useRef(true);
    const cursorEnlarged = useRef(false);

    runOnClient(() => {
        const endX = useRef(window.innerWidth / 2);
        const endY = useRef(window.innerHeight / 2);
        const _x = useRef(0);
        const _y = useRef(0);

        const requestRef = useRef(null);

        const toggleCursorVisibility = () => {
            if (cursoVisible.current) {
                dotOutline.current.style.opacity = 0.75;
            } else {
                dotOutline.current.style.opacity = 0;
            }
        };

        const toggleCursorSize = () => {
            if (cursorEnlarged.current) {
                dotOutline.current.style.transform = "translate(-50%, -50%) scale(1.75)";
            } else {
                dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
            }
        };

        const mouseOverEvent = () => {
            cursorEnlarged.current = true;
            toggleCursorSize();
        };

        const mouseOutEvent = () => {
            cursorEnlarged.current = false;
            toggleCursorSize();
        };

        const mouseEnterEvent = () => {
            cursoVisible.current = true;
            toggleCursorVisibility();
        };

        const mouseLeaveEvent = () => {
            cursoVisible.current = false;
            toggleCursorVisibility();
        };

        const mouseMoveEvent = e => {
            cursoVisible.current = true;
            toggleCursorVisibility();

            endX.current = e.pageX;
            endY.current = e.pageY;

            dot.current.style.top = endY.current + "px";
            dot.current.style.left = endX.current + "px";
        };

        const animateDotOutline = () => {
            _x.current += (endX.current - _x.current) / delay;
            _y.current += (endY.current - _y.current) / delay;

            dotOutline.current.style.top = _y.current + "px";
            dotOutline.current.style.left = _x.current + "px";

            requestRef.current = requestAnimationFrame(animateDotOutline);
        };

        useEffect(() => {
            document.addEventListener("mousedown", mouseOverEvent);
            document.addEventListener("mouseup", mouseOutEvent);
            document.addEventListener("mousemove", mouseMoveEvent);
            document.addEventListener("mouseenter", mouseEnterEvent);
            document.addEventListener("mouseleave", mouseLeaveEvent);

            animateDotOutline();

            return () => {
                document.removeEventListener("mousedown", mouseOverEvent);
                document.addEventListener("mouseup", mouseOutEvent);
                document.addEventListener("mousemove", mouseMoveEvent);
                document.addEventListener("mouseenter", mouseEnterEvent);
                document.addEventListener("mouseleave", mouseLeaveEvent);

                cancelAnimationFrame(requestRef.current);
            };
        }, []);
    })

    return (
        <>
            <DotOutline ref={dotOutline} />
            <Dot ref={dot} />
        </>
    );
};

export default Cursor;
