// import Footer from '@/components/header/Footer'
// import Header from '@/components/header/Header'
// import ButtonHeader from '@/components/header/buttonHeader'

import Products from "@/components/Products";
import Slider from "@/components/slider";
import { ProductProps } from "../../type";

interface Props {
  productData : ProductProps
}

export default function Home({productData}: Props) {
 
  return (
    <main>
      {/* <Header/>
      <ButtonHeader/> */}
      <div className="max-w-screen-2x1 mx-auto">
        <Slider/>
        <div  className= "relative md: mt020 lgl:-mt-32 xl: -mt -60 z-20 mb-10">
        <Products productData = {productData}/>
        </div>
      </div>
      {/* <Footer/> */}
    </main>
  );
};

export const getServerSideProps = async () =>{
  const res = await fetch ("http://fakestoreapiserver.reactbd.com/tech")
  const productData = await res.json();
  return {props: {productData}};
}
