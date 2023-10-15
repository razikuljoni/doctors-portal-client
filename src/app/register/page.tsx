"use client";

import registerImg from "@/assets/register.png";
import {
    bloodGroupOptions,
    genderOptions,
} from "@/components/Constants/global";
import Form from "@/components/Forms/Form";
import InputFrom from "@/components/Forms/InputForm";
import SelectForm from "@/components/Forms/SelectForm";
import UploadImage from "@/components/ui/UploadImage";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
    const onSubmit = (data: any) => {
        try {
            if(data.password !== data.confirm_password){
                message.error("Password does not match Confirm Password");
                return;
            }
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Row justify="center" align="middle" className="container mx-auto">
            <Col sm={12} md={12}>
                <Image src={registerImg} width={600} alt="Login Image" />
            </Col>
            <Col sm={12} md={8}>
                <Form submitHandler={onSubmit}>
                    <h2 className="mb-4 text-2xl">Register your account</h2>
                    <div className="my-4">
                        <InputFrom
                            name="name"
                            label="Enter Your Full Name"
                            type="text"
                            placeholder="MD Razikul Islam joni"
                        />
                    </div>
                    <div className="my-4">
                        <InputFrom
                            name="email"
                            label="Enter Your Email"
                            type="email"
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div className="my-4">
                        <InputFrom
                            name="password"
                            label="Enter Your Password"
                            type="password"
                            placeholder="your password"
                        />
                    </div>
                    <div className="my-4">
                        <InputFrom
                            name="confirm_password"
                            label="Enter Your Confirm Password"
                            type="password"
                            placeholder="your password"
                        />
                    </div>
                    <div className="my-4">
                        <SelectForm
                            name="gender"
                            label="Select Your Gender"
                            options={genderOptions}
                        />
                    </div>
                    <div className="my-4">
                        <SelectForm
                            name="blood_group"
                            label="Select Your Gender"
                            options={bloodGroupOptions}
                        />
                    </div>
                    <div className="my-4">
                        <UploadImage name="image" />
                    </div>
                    <div className="my-4">
                        <p>Already have an account?<Link href="/login">Login</Link> </p>
                    </div>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};
export default RegisterPage;
