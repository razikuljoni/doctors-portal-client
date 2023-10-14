"use client";

import {
    ShoppingCartOutlined,
    SmileOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Dropdown, Layout, MenuProps, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Header } = Layout;

const Navbar: React.FC = () => {
    // const items: MenuProps["items"] = [
    //     {
    //         key: "1",
    //         label: (
    //             <div className="px-4 py-3 ">
    //                 <span className="block text-sm  dark:text-gray-900 text-white">
    //                     Bonnie Green
    //                 </span>
    //                 <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
    //                     name@flowbite.com
    //                 </span>
    //             </div>
    //         ),
    //         icon: <SmileOutlined />,
    //     },
    //     {
    //         key: "2",
    //         label: <Link href="#">Profile</Link>,
    //         icon: <SmileOutlined />,
    //     },
    //     {
    //         key: "4",
    //         label: <Link href="#">Sign out</Link>,
    //         icon: <SmileOutlined />,
    //         danger: true,
    //     },
    // ];

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: <Link href="/">Home</Link>,
            icon: <SmileOutlined />,
        },
        {
            key: "3",
            label: <Link href="/about-us">About Us</Link>,
            icon: <SmileOutlined />,
        },
        {
            key: "4",
            label: <Link href="/contact-us">Contact Us</Link>,
            icon: <SmileOutlined />,
        },
        {
            key: "2",
            label: <Link href="/dashboard">Dashboard</Link>,
            icon: <SmileOutlined />,
        },
    ];

    //     return (
    //         <Layout className="layout">
    //             <Header style={{ display: "flex", alignItems: "center" }}>
    //                 <div className="demo-logo" />
    //                 <h1 className="text-white w-2/5">Doctors Portal</h1>
    //                 <Menu
    //                     className="w-full"
    //                     disabledOverflow
    //                     theme="dark"
    //                     mode="horizontal"
    //                     // defaultSelectedKeys={["1"]}
    //                 >
    //                     {/* <Row className="w-full"> */}
    //                     {items.map((item) => (
    //                         <Menu.Item key={item?.key}>
    //                             <Button>{item?.label}</Button>
    //                         </Menu.Item>
    //                     ))}
    //                     {/* </Row> */}

    //                 </Menu>
    //                 <Row justify="end" align="middle" className="w-full">
    //                     <Dropdown menu={{ items }}>
    //                         <Avatar
    //                             style={{
    //                                 backgroundColor: "#87d068",
    //                                 cursor: "pointer",
    //                             }}
    //                             icon={<UserOutlined />}
    //                         />
    //                     </Dropdown>
    //                 </Row>
    //             </Header>
    //         </Layout>
    //     );
    // };

    return (
        <nav className=" border-gray-200 bg-slate-950">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <Image
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8 mr-3"
                        width={50}
                        height={50}
                        alt="Doctors Portal Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Doctors Portal
                    </span>
                </Link>
                <div className="flex items-center md:order-2">
                    {/* <!-- Dropdown menu --> */}
                    <Row justify="end" align="middle" className="w-full">
                        <Dropdown menu={{ items }} className="mr-4">
                            <Badge count={2}>
                                <ShoppingCartOutlined
                                    className="text-white"
                                    style={{ fontSize: "30px" }}
                                />
                            </Badge>
                        </Dropdown>
                        <Dropdown menu={{ items }} className="mr-4">
                            <Avatar
                                className="ring-2 ring-white"
                                style={{
                                    backgroundColor: "#87d068",
                                    cursor: "pointer",
                                }}
                                icon={<UserOutlined />}
                            />
                        </Dropdown>
                        <Dropdown
                            className="text-white  border-spacing-2 border-2 border-white"
                            menu={{ items }}
                        >
                            <button
                                data-collapse-toggle="navbar-user"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-user"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </Dropdown>
                    </Row>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-user"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                href="/"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about-us"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact-us"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
