import ViewByFecha from "../Components/Dashboard/charts/viewByFecha";
import ViewByArea from "../Components/Dashboard/charts/viweByArea";
import ViewByTipe from "../Components/Dashboard/charts/viewByType";
import GetUser from "../Components/Dashboard/Users/viewGetUser";
import UpdateUser from "../Components/Dashboard/Users/viewUpdateUser";
import GetUsers from "../Components/Dashboard/Users/viewGetUsers";
import RegisterStock from "../Components/Dashboard/RegisterEpp/RegisterStock/RegisterStock";
import UpdateRegisterStock from "../Components/Dashboard/RegisterEpp/UpdateRegister/ViewUpdateRegisterEpp";

export const componetRender = [
  {
    name: "Estadística por Fecha",
    value: "viewByFecha",
    icon: 'fa fa-calendar',
    component : ViewByFecha
  },
  {
    name: "Estadística por Área",
    value: "viewbYArea",
    icon: 'fa fa-pie-chart',
    component : ViewByArea
  },
  {
    name: "Estadistica por Tipo",
    value: "viewByType",
    icon: 'fa fa-tag',
    component : ViewByTipe
  },
  {
    name: "Usuarios registrados",
    value: "viewByUser",
    icon: 'fa fa-users',
    component : GetUsers
  },
  {
    name: "Consultar Usuario",
    value: "viewByUsers",
    icon: 'fa fa-user-circle',
    component : GetUser
  },
  {
    name: "Actualizar Usuario",
    value: "viewUpdateUser",
    icon: 'fa fa-user-secret',
    component : UpdateUser
  },
  {
    name: "Crear Registro de Epp",
    value: "viewCreateEpp",
    icon: 'fa fa-registered',
    component: RegisterStock
  },
  {
    name: "Actualizar Registro Epp",
    value: "viewUpdateEpp",
    icon: 'fa fa-edit',
    component : UpdateRegisterStock
  }
];
