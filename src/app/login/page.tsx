"use client";

import loginImg from "@/assets/login.png";
import Form from "@/components/Forms/Form";
import InputFrom from "@/components/Forms/InputForm";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
    const onSubmit = (data: any) => {
        try {
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Row justify="center" align="middle" className="container mx-auto">
            <Col sm={12} md={12}>
                <Image src={loginImg} width={600} alt="Login Image" />
            </Col>
            <Col sm={12} md={8}>
                <Form submitHandler={onSubmit}>
                    <h2 className="mb-4 text-2xl">Login to your account</h2>
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
                        <p>
                            Create a new account?
                            <Link href="/register">Register</Link>{" "}
                        </p>
                    </div>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};
export default LoginPage;
