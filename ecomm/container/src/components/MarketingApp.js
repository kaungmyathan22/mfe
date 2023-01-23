import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

const MarketingApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        console.log("calling mount")
        if (ref.current) {
            mount(ref.current)
            console.log("element exists")
        }
        // mount(ref.current)
    }, [ref.current]);

    console.log("hi there!!")
    console.log({ ref })
    return <div ref={ref} />;
};

// const MarketingApp = props => {
//     const [counter, setCounter] = useState(0);
//     const ref = useRef(null);

//     useEffect(() => {
//         if (ref.current) {
//             window.scrollTo(0, ref.current.offsetTop);
//         }
//     }, [counter]);
//     console.log({ref})
//     return (
//         <div ref={ref}>
//             <button onClick={() => setCounter(counter => counter + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// };
export default MarketingApp;
