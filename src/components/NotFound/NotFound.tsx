/* eslint-disable react/no-unescaped-entities */
import { Button, Row } from "antd";
import Image from "next/image";
import notFound from "../../assets/404.gif";
import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <section className={styles.page_404}>
            <div className="">
                <div className={styles.error_image}>
                    <Image src={notFound} alt="404" />
                </div>
                <div className={styles.four_zero_four_bg}></div>
                <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "-50px" }}
                    // className={styles.contant_box_404}
                >
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ fontSize: "50px" }}>
                            Looks like you're lost
                        </h3>
                        <p style={{ margin: "10px 0" }}>
                            The page you are looking for is not available!
                        </p>
                        <Button
                            type="primary"
                            href="/"
                            className={styles.link_404}
                        >
                            Back To Home
                        </Button>
                    </div>
                </Row>
            </div>
        </section>
    );
};

export default NotFound;
