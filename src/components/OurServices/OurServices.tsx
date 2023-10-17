import child from "@/assets/ourservices/child.png";
import corporate from "@/assets/ourservices/corporate.png";
import counceling from "@/assets/ourservices/counseling.png";
import family from "@/assets/ourservices/family.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import Title from "../Title/Title";
import Link from "next/link";

const OurServices = () => {
    return (
        <div className="container mx-auto py-24">
            <Title title="Our Services" subTitle="Choose your needed Service"/>
            <Row
                gutter={30}
                // className="grid grid-flow-col grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 "
            >
                <Col sm={24} md={12} lg={8} xl={6}>
                    <Image
                        src={counceling}
                        layout="responsive"
                        alt="service Image"
                    />
                    <Link
                        href="/services/psychological-counseling"
                        className="relative w-full h-16 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                    >
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#93e3ab] group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <ArrowRightOutlined />
                        </span>
                        <span className="absolute left-0 pl-4 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 font-bold">
                            <ArrowRightOutlined />
                        </span>
                        <span className="text-center relative w-full transition-colors duration-200 ease-in-out group-hover:text-white">
                            Psychological Counseling
                        </span>
                    </Link>
                </Col>
                <Col sm={24} md={12} lg={8} xl={6}>
                    <Image
                        src={corporate}
                        layout="responsive"
                        alt="service Image"
                    />
                    <Link
                        href="/services/corporate-service"
                        className="relative w-full h-16 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                    >
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#93e3ab] group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <ArrowRightOutlined />
                        </span>
                        <span className="absolute left-0 pl-4 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 font-bold">
                            <ArrowRightOutlined />
                        </span>
                        <span className="text-center relative w-full transition-colors duration-200 ease-in-out group-hover:text-white">
                            Corporate Service
                        </span>
                    </Link>
                </Col>
                <Col sm={24} md={12} lg={8} xl={6}>
                    <Image
                        src={child}
                        layout="responsive"
                        alt="service Image"
                    />
                    <Link
                        href="/services/child-development"
                        className="relative w-full h-16 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                    >
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#93e3ab] group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <ArrowRightOutlined />
                        </span>
                        <span className="absolute left-0 pl-4 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 font-bold">
                            <ArrowRightOutlined />
                        </span>
                        <span className="text-center relative w-full transition-colors duration-200 ease-in-out group-hover:text-white">
                            Child Development
                        </span>
                    </Link>
                </Col>
                <Col sm={24} md={12} lg={8} xl={6}>
                    <Image
                        src={family}
                        layout="responsive"
                        alt="service Image"
                    />
                    <Link
                        href="/services/family-bonding"
                        className="relative w-full h-16 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                    >
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#93e3ab] group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <ArrowRightOutlined />
                        </span>
                        <span className="absolute left-0 pl-4 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 font-bold">
                            <ArrowRightOutlined />
                        </span>
                        <span className="text-center relative w-full transition-colors duration-200 ease-in-out group-hover:text-white">
                            Family Bonding
                        </span>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};
export default OurServices;
