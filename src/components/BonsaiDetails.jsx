import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import data from "../data/data";

export function BonsaiDetails() {
  const [currentBonsai, setCurrentBonsai] = useState({});
  const { id } = useParams();
      
    const getBonsai = data.find((n) => n.id == id);

  /*const getBonsai = data.find((bonsai) => {
       bonsai.id == id; 
      // comparing category for displaying data
    });*/

  /*useEffect(() => {
    const getBonsai = data.find((bonsai) => {
       bonsai.id == id; 
    });
    setCurrentBonsai(getBonsai);
  }, [id]);*/

  //console.info(currentBonsai);

  return (
    <div>
      <Header />
      <div> Hola {/*console.info(data.find((n) => n.id == id))*/}
            {JSON.stringify(getBonsai)}
            {
                /*data.find((bonsai) => {
                  bonsai.id === id; 
                  // comparing category for displaying data
                })*/
                /*currentBonsai.map((tuto, index) => (
                  <strong>{tuto.name}</strong>
                ))*/
            }
      </div>
      {
        //https://codedec.com/tutorials/how-to-implement-search-in-react-js-with-json/
        /*1data.filter((bonsai) => {
            return bonsai.id === id;
            // comparing category for displaying data
          })
          .map((val, key) => {
            return <div>Alain </div>;
          })*/

        //JSON.stringify(newItem)
        /*newItem.map((value) => {
          return <div>{value.id}</div>
      })*/
      }
      <Footer />
    </div>
  );
}
