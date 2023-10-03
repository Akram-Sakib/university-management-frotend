import { AUTH_KEY } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.services";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Dropdown, Layout, Row, Space } from "antd";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const logout = () => {
    removeUserInfo(AUTH_KEY);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button type="text" danger onClick={logout}>
          Logout
        </Button>
      ),
    },
  ];
  const { role } = getUserInfo() as any;

  return (
    <AntHeader
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Row justify="end" align="middle">
        <p
          style={{
            margin: "0px 5px",
          }}
        >
          {role}
        </p>
        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
