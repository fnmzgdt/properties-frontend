import React from "react";
import Post from "../../Components/Post/Post";
import { PageContainer } from "./Home.elements";
import barn1 from "../../images/barn1.jpg";
import barn2 from "../../images/barn2.jpg";
import barn3 from "../../images/barn3.jpg";
import { motion } from "framer-motion";
import SearchBox from "../../Components/SearchBox/SearchBox";

const postList = [
  {
    name: "Аддресс София",
    images: [barn1, barn2, barn3, barn2],
    location: "обл. София, гр. София",
    title: "Къща за гости в гр. Обзор на 100м. от автогарата!",
    price: "360 780€",
    area: "86m²",
  },
  {
    name: "Аддресс София",
    images: ["https://woman.bg/static/uploads/news/201106/big/00009617.jpg"],
    location: "обл. София, гр. София",
    title: "Къща за гости в гр. Обзор на 100м. от автогарата!",
    price: "360 780€",
    area: "86m²",
  },
  {
    name: "Аддресс София",
    images: [barn2, barn1],
    location: "обл. София, гр. София",
    title:
      "Къща за гости в гр. Обзор на 100м. от автогарата! Къща за гости в гр. Обзор на 100м. от автогарата! Къща за гости в гр. Обзор на 100м. от автогарата!",
    price: "360 780€",
    area: "86m²",
  },
];

const Home = () => {
  return (
    <motion.main
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }} 
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
    >
      <PageContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "37.5rem",
            minWidth: "37.5rem",
            paddingTop: "2rem",
          }}
        >
          <SearchBox />
          {postList.map((post, i) => {
            return <Post data={post} key={i} />;
          })}
        </div>
        <div
          style={{
            display: "flex",
            position: "sticky",
            top: "0px",
            flexDirection: "column",
            width: "100%",
            height: "100vh",
            maxWidth: "20rem",
            background: "white",
          }}
        ></div>
      </PageContainer>
    </motion.main>
  );
};

export default Home;
