import { removeProject } from "./functions/removeProject";
import { Header, ListContainer } from "./style";
import { Button } from "../../../components";
import { Popconfirm, Table } from "antd";
import { getUsers } from "./functions/getProject";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";

const List = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sucess, setSuccess] = useState(false);

  const alert = useAlert();

  useEffect(() => {
    getUsers(setLoading, setData, setError);
  }, [sucess]);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nome",
      dataIndex: "project_name",
      key: "project_name",
    },
    {
      title: "Descrição",
      dataIndex: "project_description",
      key: "project_description",
    },
    {
      title: "Tecnologias",
      dataIndex: "tecnologies",
      key: "tecnologies",
    },
    {
      title: "Ações",
      align: "center",
      render: (text, record) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button label="Editar" />
          <Popconfirm
            title="Tem certeza que deseja excluir?"
            onConfirm={() =>
              removeProject(record.id, setLoading, setSuccess, setError)
            }
            okText="Sim"
            cancelText="Não"
          >
            <Button label="Excluir" danger={true} type="primary" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <>
      <ListContainer>
        <Button label="Adicionar projeto" type="primary"></Button>
      </ListContainer>
      <Table className="table" columns={columns} dataSource={data} />
    </>
  );
};

export default List;
