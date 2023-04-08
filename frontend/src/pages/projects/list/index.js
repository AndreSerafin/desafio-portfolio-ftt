import { removeProject } from "./functions/removeProject";
import { Header, ListContainer } from "./style";
import { Button, Loading } from "../../../components";
import { Popconfirm, Table } from "antd";
import { getProjects } from "./functions/getProject";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const alert = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    getProjects(setLoading, setData, setError);
  }, [success]);

  useEffect(() => {
    if (error) alert.error("Não foi possivel realizar essa operação");
    if (success) alert.show("Operação relizada com sucesso");
  }, [error, success]);

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
      title: "Categoria",
      dataIndex: "project_category",
      key: "project_category",
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
          <Button
            label="Editar"
            onClick={() => navigate("/create", { state: { id: record.id } })}
          />
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
        <Button
          label="Adicionar projeto"
          type="primary"
          onClick={() => navigate("/create")}
        ></Button>
      </ListContainer>
      {loading && <Loading />}
      {!loading && (
        <Table className="table" columns={columns} dataSource={data} />
      )}
    </>
  );
};

export default List;
