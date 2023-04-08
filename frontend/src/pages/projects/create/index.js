import { Input, Loading, ErrorMessage, Button } from "../../../components";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Row, Col } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Label } from "../../../components/input/styles";
import { SessionButtons } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { saveProject } from "./functions/saveProject.js";
import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { getProjectById } from "./functions/getProjectById";
import { updateProject } from "./functions/updateProject";

const Create = () => {
  const [loading, setLoading] = useState(false);

  const alert = useAlert();
  const navigate = useNavigate();
  const location = useLocation();

  const schema = yup.object({
    project_name: yup.string().required("Campo obrigatório"),
    project_category: yup.string().required("Campo obrigatório"),
    project_description: yup.string().required("Campo obrigatório"),
    tecnologies: yup.string(),
    about_project: yup.string(),
  });

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getProject = async () => {
    const project = await getProjectById(location.state.id, setLoading, alert);

    setValue("project_name", project?.project_name);
    setValue("project_category", project?.project_category);
    setValue("project_description", project?.project_description);
    setValue("tecnologies", project?.tecnologies);
    setValue("about_project", project?.about_project);
  };

  useEffect(() => {
    if (location?.state?.id) {
      getProject();
    }
  }, [location]);

  const save = (data) => {
    if (!location?.state?.id) {
      saveProject(data, setLoading, alert, navigate);
    } else {
      updateProject(location.state.id, data, setLoading, alert, navigate);
    }
  };

  return (
    <>
      {loading && <Loading/>}
      <div style={{ margin: "20px" }}>{ !loading &&
        <form onSubmit={handleSubmit(save)}>
          <Row gutter={[20, 20]}>
            <Col className="gutter-row" span={12}>
              <Controller
                name="project_name"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    ref={ref}
                    label="Nome do Projeto"
                    placeholder="Digite o nome do projeto"
                  />
                )}
              />
              {errors.project_name && (
                <ErrorMessage>{errors?.project_name?.message}</ErrorMessage>
              )}
            </Col>
            <Col className="gutter-row" span={12}>
              <Controller
                name="project_category"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    ref={ref}
                    label="Categoria do Projeto"
                    placeholder="Digite a categoria do projeto"
                  />
                )}
              />
              {errors.project_category && (
                <ErrorMessage>{errors?.project_category?.message}</ErrorMessage>
              )}
            </Col>
            <Col className="gutter-row" span={12}>
              <Controller
                name="tecnologies"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    ref={ref}
                    label="Tecnologias utilizadas"
                    placeholder="Principais tecnologias separadas por virgula"
                  />
                )}
              />
            </Col>
            <Col className="gutter-row" span={12} />
            <Col className="gutter-row" span={12}>
              <Controller
                name="project_description"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                  <>
                    <Label>Descrição do Projeto</Label>
                    <TextArea
                      value={value}
                      onChange={onChange}
                      ref={ref}
                      placeholder="Digite uma breve descrição do projeto"
                      type="TextArea"
                    />
                  </>
                )}
              />
              {errors.project_description && (
                <ErrorMessage>
                  {errors?.project_description?.message}
                </ErrorMessage>
              )}
            </Col>
            <Col className="gutter-row" span={12}>
              <Controller
                name="about_project"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                  <>
                    <Label>Sobre</Label>
                    <TextArea
                      value={value}
                      onChange={onChange}
                      ref={ref}
                      placeholder="Digite uma descrição detalhada sobre o projeto"
                      type="TextArea"
                    />
                  </>
                )}
              />
            </Col>
            <Col span={24}>
              <SessionButtons>
                <Button
                  label="Cancelar"
                  type="danger"
                  onClick={() => navigate("/list")}
                ></Button>
                <Button
                  label="Salvar"
                  type="primary"
                  htmlType="submit"
                ></Button>
              </SessionButtons>
            </Col>
          </Row>
        </form>
      }
        
      </div>
    </>
  );
};

export default Create;
