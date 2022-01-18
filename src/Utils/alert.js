import swal from "sweetalert";
import "../Style/alert.css";
export default class alertStatus {
  static warning(message) {
    swal({
      text: message,
      icon: "warning",
      timer: "5000",
      buttons: {
        confirm: {
          visible: false
        }
      }
    });
  }

  static succesfully (message){
    swal({
        text: message,
        icon: "success",
        timer: "3000",
        buttons: {
          confirm: {
            visible: false
          }
        }
    });
  }

  static error(message) {
    swal({
        text: message,
        icon: "error",
        timer: "3000",
        buttons: {
          confirm: {
            visible: false
          }
        }
    });
  }

}
