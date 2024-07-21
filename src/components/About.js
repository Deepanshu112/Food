import React from "react";
import food_img from "../../imgs/food2.jpg";


const About = (props) => {

  return (
    <div className="m-0 flex justify-center">
      <div className="w-3/5 h-auto p-10 bg-customColor rounded-xl my-5">
        <div className="sec-1 flex">
          <div className="">
            <div className="heading text-3xl font-semibold font-serif">About Us</div>
            <p className="my-3">
              Welcome to Food! We are passionate about connecting food
              lovers with their favorite restaurants and providing a convenient
              platform for online food ordering. Our mission is to deliver
              delicious meals right to your doorstep while ensuring a seamless
              and enjoyable user experience.
            </p>
          </div>
          <img className="rounded shadow-md w-2/5 m-3" src={food_img}></img>
        </div>
        <div className="section-2 my-10">
          <div>
            <h2 className="heading text-3xl text-center font-semibold font-serif">Our Story</h2>
            <p className="m-5">
              This Project using Technologies :-
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT JS(Parcel)</li>
              <li>Babel</li>
            </p>
          </div>
        </div>
        <div className="m-5 text-gray-600 text-center">Created by <a className="font-medium underline" href="https://www.linkedin.com/in/deepanshu-varshney-46a79a22b">Deepanshu Varshney</a></div>

      </div>
    </div>
  );
};

export default About;
