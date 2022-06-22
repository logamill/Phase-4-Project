import React, { useState, useEffect } from "react";
import Card from "./Card";

function Wheel() {
    const [radius, setRadius] = useState()
    const [theta, setTheta] = useState()
    const [tempTheta, setTempTheta] = useState()
    const [animId, setAnimId] = useState()
    const [centerWheel, setCenterWheel] = useState()
    const [cards, setCards] = useState([])
    const [posts, setPosts] = useState([])

    const styles = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotateX(65deg)",
        height: "700px",
        width: "700px",
    };

    useEffect(() => {
        getPostsFetch();
    }, [])

    useEffect(() =>{    
        setRadius(370);
        setTheta(0.0)
        setTempTheta(0.0)
        setAnimId(null)

        setCenterWheel({
            x: parseFloat(styles.width) / 2.0,
            y: parseFloat(styles.height) / 2.0
        })
    },[]);


    function getPostsFetch() {
        fetch('/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        console.log(posts)
    }

    function handleScroll(e) {
        clearTimeout(animId);

        styles.transformStyle = "preserve-3d";
        tempTheta += e.deltaY;
        styles.transformStyle = "preserve-3d";
        (styles.transform = `translate(-50%, -50%)  rotateX(65deg)
        rotate(${tempTheta * 0.08}deg) `)
        animId = setTimeout(() => {
            setTheta(tempTheta)
        }, 150)
    }


    console.log(posts)
    console.log(radius)
    console.log(theta)
    console.log(`centerWheel is ${centerWheel}`)
    return (
    <>
        <div
        onWheel={(e) => handleScroll(e)}
        style={styles}
        >
        {
            posts.map((post) => {
                return (
                <Card 
                    pic={post.image}
                    radius={radius}
                    theta={(Math.PI / 25.0) * post.id}
                    center={centerWheel}
                    key={post.id}
                    id={post.id}
                />
            )})
        }
        </div>
        <h2 className="explore">Explore.</h2>
    </>
    );
    }


export default Wheel;