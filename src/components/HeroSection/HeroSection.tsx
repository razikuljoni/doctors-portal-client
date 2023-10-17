import doctors from "@/assets/Doctors-rafiki.png";
import diagnosis from "@/assets/diagnosis.png";
import counseling from "@/assets/counseling.png";
import { Carousel, Col, Row } from "antd";
import Image from "next/image";
import React from "react";

const contentStyle: React.CSSProperties = {
    height: "90vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
};

const HeroSection = () => {
    return (
        <>
            <Carousel autoplay className="shadow-xl shadow-slate-500">
                <div>
                    <h3 style={contentStyle}>
                        {" "}
                        <Row className="container mx-auto">
                            <Col sm={24} md={12}>
                                <section className="text-gray-600 body-font">
                                    <div className="flex items-center px-5 py-24 ">
                                        <div className=" flex flex-col  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
                                                Best Doctors
                                                <br className="hidden lg:inline-block" />
                                                at our Hospital
                                            </h1>
                                            <p className="mb-8 leading-relaxed">
                                                Copper mug try-hard pitchfork
                                                pour-over freegan heirloom
                                                neutra air plant cold-pressed
                                                tacos poke beard tote bag.
                                                Heirloom echo park mlkshk tote
                                                bag selvage hot chicken
                                                authentic tumeric truffaut
                                                hexagon try-hard chambray.
                                            </p>
                                            <div className="flex justify-center">
                                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                                    See Doctors
                                                </button>
                                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                                    See Courses
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Col>
                            <Col
                                sm={24}
                                md={12}
                                className="flex justify-end w-full"
                            >
                                <Image
                                    src={doctors}
                                    layout="responsive"
                                    alt="Hero Image"
                                ></Image>
                            </Col>
                        </Row>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        {" "}
                        <Row className="container mx-auto">
                            <Col sm={24} md={12}>
                                <section className="text-gray-600 body-font">
                                    <div className="flex items-center px-5 py-24 ">
                                        <div className=" flex flex-col  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
                                                Best Diagnosis
                                                <br className="hidden lg:inline-block" />
                                                at our Hospital
                                            </h1>
                                            <p className="mb-8 leading-relaxed">
                                                Copper mug try-hard pitchfork
                                                pour-over freegan heirloom
                                                neutra air plant cold-pressed
                                                tacos poke beard tote bag.
                                                Heirloom echo park mlkshk tote
                                                bag selvage hot chicken
                                                authentic tumeric truffaut
                                                hexagon try-hard chambray.
                                            </p>
                                            <div className="flex justify-center">
                                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                                    See Doctors
                                                </button>
                                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                                    See Courses
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Col>
                            <Col
                                sm={24}
                                md={12}
                                className="flex justify-end w-full"
                            >
                                <Image
                                    src={counseling}
                                    layout="responsive"
                                    alt="Hero Image"
                                ></Image>
                            </Col>
                        </Row>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        {" "}
                        <Row className="container mx-auto">
                            <Col sm={24} md={12}>
                                <section className="text-gray-600 body-font">
                                    <div className="flex items-center px-5 py-24 ">
                                        <div className=" flex flex-col  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
                                                Best Counceling
                                                <br className="hidden lg:inline-block" />
                                                at our Hospital
                                            </h1>
                                            <p className="mb-8 leading-relaxed">
                                                Copper mug try-hard pitchfork
                                                pour-over freegan heirloom
                                                neutra air plant cold-pressed
                                                tacos poke beard tote bag.
                                                Heirloom echo park mlkshk tote
                                                bag selvage hot chicken
                                                authentic tumeric truffaut
                                                hexagon try-hard chambray.
                                            </p>
                                            <div className="flex justify-center">
                                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                                    See Doctors
                                                </button>
                                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                                    See Courses
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Col>
                            <Col
                                sm={24}
                                md={12}
                                className="flex justify-end w-full"
                            >
                                <Image
                                    src={diagnosis}
                                    layout="responsive"
                                    alt="Hero Image"
                                ></Image>
                            </Col>
                        </Row>
                    </h3>
                </div>
            </Carousel>
        </>
    );
};

export default HeroSection;
