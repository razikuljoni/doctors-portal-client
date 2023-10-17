import psychology from "@/assets/ourservices/counseling.png";
import Title from "@/components/Title/Title";
import { LockOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const psychologicalCounseling = () => {
    return (
        <div className="container mx-auto py-28">
            <Title title="Counseling For Psychology" />
            <Row gutter={40}>
                <Col sm={24} md={12}>
                    <Image
                        src={psychology}
                        layout="responsive"
                        alt="family-bonding"
                    />
                </Col>
                <Col
                    sm={24}
                    md={12}
                    className="flex justify-center items-center"
                >
                    <div>
                        <p className="text-xl pb-10">
                            If you are looking for the most dynamic mental
                            health or psychological counseling service, then
                            LifeSpring is your one-stop center. LifeSpring is
                            the most comprehensive and most competitive mental
                            health service provider in the country with
                            multi-disciplinary mental health experts. We provide
                            face to face & online psychological counseling
                            services. Our main target is to be easily available
                            for everyone regardless of age. Our experienced
                            counselors are dedicated to each and every patient
                            no matter how major or how minor his/her mental
                            issue is. Our clients’ review will say it all. We
                            are working hard to maintain quality and go beyond.
                            We make sure that everyone can avail our services.
                        </p>
                        <Link
                            href="/services/psychological-counseling/appoinment"
                            className="inline-flex overflow-hidden text-white bg-[#499560] hover:bg-[#2b8b48] rounded group"
                        >
                            <span className="px-3.5 py-2 text-white bg-[#4c9f65] group-hover:bg-[#2b8b48] flex items-center justify-center">
                                <LockOutlined />
                            </span>
                            <span className="pl-4 pr-5 py-5 font-bold">
                                Book Appointment
                            </span>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
export default psychologicalCounseling;
