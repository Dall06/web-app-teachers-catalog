var LogEmail = document.getElementById("txtLogEmail");
var LogPass = document.getElementById("txtLogPass");

// Lista que almacena a los usuarios
const LstUsers = [];

// Como no se tiene una base de datos el id se inicializa como variable global para maenjarla en el transcurso de la ventana abierta
const IdUser = 0;

// Clase usuario con su metodo constructor
class User {
    constructor(id, UserName, Password, FirstName, LastName, Email, Phone){
        this.id = id; 
        this.UserName = UserName; 
        this.Password = Password; 
        this.FirstName = FirstName; 
        this.LastName= LastName; 
        this.Email = Email; 
        this.Phone = Phone;
    }
}

/*********************FUNCTIONS************************/
// Inicio de sesion, por el momento solo se valida ya que como no se inicia la ventana desde un servicio local la propiedad
// window.location.href() no funciona por cuestiones de seguridad, es necesario montar el servicio utilizando nodeJs o express
// por igual verifica si es necesario eso, si es asi lo monto luego luego ya que solo es crear un proyecto y ponerle las carpetas correspondientes
var Login = () => {
    console.log("Bye")
    self.close();
    for(let i = 0; i < LstUsers.length; i++) {
        if((LogEmail.value == "1234@hotmail.com") && (LogPass.value == "1234") || 
            (LstUsers[i].Email == LogEmail.value && LstUsers[i].Password == LogPass.value)) {
                if (typeof(Storage) != "undefined") {
                    console.log("Bye")
                    // localstorage guarda la informacion en el cache de tu equipo permitiendo mantener las sesiones inicadas, es como funciona en paginas web
                    // Guardamos el objeto como JSON para utilizarlo en otra ventana
                    localStorage.setItem("usuario_login",JSON.stringify(LstUsers[i]));
                    // Se abre otra ventana
                    window.location.href = "./index.html";
                    // Se cierra ventana actual, cre que esta linea se puede omitir
                    this.window.close();
                } else {
                    // Sorry! No Web Storage support..
                    console.log("No soportado")
                }
                self.close();
        }
    }
}

// Se crea el usuario
var CreateUser = () => {
    var txtUserN = document.getElementById("txtUserN").value;
    var txtPas = document.getElementById("txtPass").value;
    var txtFN = document.getElementById("txtFirstName").value;
    var txtLN = document.getElementById("txtLastName").value;
    var txtEmail = document.getElementById("txtEmail").value;
    var txtPhone = document.getElementById("txtCellPhone").value;


    for(let i = 0; i < LstUsers.length; i++) {
        if(LstUsers[i].Email != txtEmail) {
            ++IdUser;
            const user = new User(IdUser, txtUserN, txtPas, txtFN, txtLN, txtEmail, txtPhone);
            LstUsers.push(user);
        }
        else
        {
            console.log("Already in the db")
        }
    }
}

// Ir a la ventana de creacion
var goToCreate = () => {
    document.getElementById("dvLog").className = "row invisible";
    document.getElementById("dvCreate").className = "row";
}

// Ir a la ventana de login
var goToLog = () => {
    document.getElementById("dvLog").className = "row";
    document.getElementById("dvCreate").className = "row invisible";
}