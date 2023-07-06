import { Form, Button } from "antd"

const FormButton = ({ label, loading }) => {

    return (
        <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }} size='large' loading={loading}>
                {label}
            </Button>
        </Form.Item>
    )
}
export default FormButton;