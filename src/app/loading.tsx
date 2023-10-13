import { Row, Space, Spin } from "antd";

const loading = () => {
    return (
        <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </Row>
    );
};
export default loading;
