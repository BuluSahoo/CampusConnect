import { Button } from "antd"
import { primaryColor } from "../../app/config/theme"
import { useNavigate } from "react-router-dom";

export const LinkButton = ({ label, path }) => {
    const navigate = useNavigate();

    return (
        <Button
            type="link"
            onClick={() => navigate(path)}
            style={{ padding: 0, margin: 0, color: primaryColor }}
        >
            {label}
        </Button>
    )
}