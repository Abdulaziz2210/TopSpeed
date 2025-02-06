import React from "react";
import Buttons from "../ui/buttons";
import Title from "../ui/title";
import {Card} from "../ui/card";
import { FaArrowRight } from "react-icons/fa";




const Information = ({data}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Title title={"Top ranking universities"} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.length > 0 ? data.map(item=> <Card key={item.id} title={item.title} image={item.image} link={item.link} />) : ""}
      </div>

      <div className="w-full max-w-[100px] mx-auto mt-5"><Buttons v2={true} text={'SEE ALL'} icon={<FaArrowRight/>}/></div>
    </div>
  );
};

export default Information;