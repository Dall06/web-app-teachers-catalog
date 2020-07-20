//--------------------------------------------------------------------------
// Lista de materias
const LstAssignments = [];
//Lista de maestros
const LstTeachers = [];

//Id del maestro que se maneja como variable global
let IndexTeacher = 1;
// Id de la materia que se maneja como variable global
let auxIndex = 1;

// Clase materia y su cotructor
class assignamet {
    constructor (Id, Name, Level, Teachers) {
        this.Id = Id;
        this.Name = Name;
        this.Level = Level;
        this.Teachers = Teachers;
    }
}
// Clase maestro y su contructor
class teacher {
    constructor (Id, FirstName, LastName, AssigId, Insitution, Rating, Email, CellPhone, Disponibility, City) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.AssigId = AssigId;
        this.Insitution = Insitution,
        this.Rating = Rating,
        this.Email = Email,
        this.CellPhone = CellPhone   
        this.Disponibility = Disponibility
        this.City = City     
    }
}

//Capta la sesion iniciada
var User = localStorage.getItem("usuario_login");

//Lleando de los campos de configuracion
var setUserConfig = () => {
    document.getElementById("txtUserN").value = User.UserName
    document.getElementById("txtFirstName").value = User.FirstName
    document.getElementById("txtLastName").value = User.LastName
    document.getElementById("txtEmail").value = User.Email
    document.getElementById("txtCellPhone").value = User.Phone
}
//Cerrar sesion
var logOut = () => {
    localStorage.removeItem("usuario_login");
    window.location.href = "login.html";
}

//------------------------------------String que añaden campos mediante JQuery--------------------------------------
//Tabla materias
var str1 = '<tr'
//Insertar el Id de la materia
var str2 = '><th scope="row">'
//Value
var str3 = '</th><td>'
//Value
var str4 = '</td><td>'
//Otto
var str5 = '</td><td>'
//@mdo
var str6 = '</td><td>'
// 
var str7 = '</td></tr>'

//Tabla maestros
var str11 = '<tr><th scope="row">'
//Value
var str13 = '</th><td>'
//Value
var str14 = '</td><td>'
//Otto
var str15 = '</td><td>'
//@mdo
var srt16 = '</td><td>'
//
var str17 = '</td><td>'
//Value
var str17 = '</td><td>'
//Value
var str18 = '</td><td>'
//Value
var str19 = '</td><td>'
//Value
var str20 = '</td></tr>'

//--------------------------------------------------------------------------
// Vacia los inputs
var emptySettingsInputs = () =>{
    document.getElementById("txtUserN").value = "";
    document.getElementById("txtFirstName").value = "";
    document.getElementById("txtLastName").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtCellPhone").value = "";
    document.getElementById("inputGroupFile01").value = "";
    document.getElementById("txtAssigName").value = "";
    document.getElementById("selLevel2").value = "";
    document.getElementById("txtIdE").value = "";
    document.getElementById("txtFirstNameTE").value = "";
    document.getElementById("txtLastNameTE").value = "";
    document.getElementById("selAssigTe").value = "";
    document.getElementById("txtInstitutionE").value = "";
    document.getElementById("txtRatE").value = "";
    document.getElementById("txtEmailTE").value = "";
    document.getElementById("txtCellPhoneTE").value = "";
    document.getElementById("txtCityTE").value = "";
    document.getElementById("txtDispTE").value = "";
    document.getElementById("txtTeacherFN").value = "";
    document.getElementById("txtTeacherLN").value = "";
    document.getElementById("selAssigT").value = "";
    document.getElementById("txtTeacherIns").value = "";
    document.getElementById("txtTeacherEmail").value = "";
    document.getElementById("txtTeacherPhone").value = "";
    document.getElementById("txtTeacherCity").value = "";
};

// Ir a la ventana de home
var clickHome = () => {
    document.getElementById("dvHome").className = 'row';
    document.getElementById("dvTblAssig").className = "row invisible";
    document.getElementById("dvTblTeachers").className = "row invisible";
    document.getElementById("dvConfig").className = "row invisible";
    document.getElementById("dvAbout").className = "row invisible";
    document.getElementById("dvTeacherInfo").className = "row invisible";
    document.getElementById("dvAddAssignament").className = "row invisible";
    document.getElementById("dvAddTeacher").className = "row invisible";
    document.getElementById("dvPutTeacherInfo").className = "row invisible";

    document.getElementById("lnkHome").className = "text-sm-center nav-link text-white active";
    document.getElementById("lnkAssig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkTeachers").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkConfig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAbout").className = "text-sm-center nav-link text-white";

    emptySettingsInputs();
};

//Ir a la ventana de materias
var clickAssig = () => {
    document.getElementById("dvHome").className = 'row invisible';
    document.getElementById("dvTblAssig").className = "row";
    document.getElementById("dvTblTeachers").className = "row invisible";
    document.getElementById("dvConfig").className = "row invisible";
    document.getElementById("dvAbout").className = "row invisible";
    document.getElementById("dvTeacherInfo").className = "row invisible";
    document.getElementById("dvAddAssignament").className = "row invisible";
    document.getElementById("dvAddTeacher").className = "row invisible";
    document.getElementById("dvPutTeacherInfo").className = "row invisible";

    document.getElementById("lnkHome").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAssig").className = "text-sm-center nav-link text-white active";
    document.getElementById("lnkTeachers").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkConfig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAbout").className = "text-sm-center nav-link text-white";

    emptySettingsInputs();

    getAssignments();
};

// Ir a la ventana de maestros
var clickTeachers = () => {
    document.getElementById("dvHome").className = 'row invisible';
    document.getElementById("dvTblAssig").className = "row invisible";
    document.getElementById("dvTblTeachers").className = "row";
    document.getElementById("dvConfig").className = "row invisible";
    document.getElementById("dvAbout").className = "row invisible";
    document.getElementById("dvTeacherInfo").className = "row invisible";
    document.getElementById("dvAddAssignament").className = "row invisible";
    document.getElementById("dvAddTeacher").className = "row invisible";
    document.getElementById("dvPutTeacherInfo").className = "row invisible";

    document.getElementById("lnkHome").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAssig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkTeachers").className = "text-sm-center nav-link text-white active";
    document.getElementById("lnkConfig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAbout").className = "text-sm-center nav-link text-white";

    emptySettingsInputs();

    getTeachers();
};

// Ir a la ventana de configuracion de usuario
var clickConfig = () => {
    document.getElementById("dvHome").className = 'row invisible';
    document.getElementById("dvTblAssig").className = "row invisible";
    document.getElementById("dvTblTeachers").className = "row invisible";
    document.getElementById("dvConfig").className = "row";
    document.getElementById("dvAbout").className = "row invisible";
    document.getElementById("dvTeacherInfo").className = "row invisible";
    document.getElementById("dvAddAssignament").className = "row invisible";
    document.getElementById("dvAddTeacher").className = "row invisible";
    document.getElementById("dvPutTeacherInfo").className = "row invisible";

    document.getElementById("lnkHome").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAssig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkTeachers").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkConfig").className = "text-sm-center nav-link text-white active";
    document.getElementById("lnkAbout").className = "text-sm-center nav-link text-white";

    emptySettingsInputs();
};

// Ir a la ventana de acerca de la pagina
var clickAbout = () => {
    document.getElementById("dvHome").className = 'row invisible';
    document.getElementById("dvTblAssig").className = "row invisible";
    document.getElementById("dvTblTeachers").className = "row invisible";
    document.getElementById("dvConfig").className = "row invisible";
    document.getElementById("dvAbout").className = "row";
    document.getElementById("dvTeacherInfo").className = "row invisible";
    document.getElementById("dvAddAssignament").className = "row invisible";
    document.getElementById("dvAddTeacher").className = "row invisible";
    document.getElementById("dvPutTeacherInfo").className = "row invisible";

    document.getElementById("lnkHome").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAssig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkTeachers").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkConfig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAbout").className = "text-sm-center nav-link text-white active";

    emptySettingsInputs();
};

// Ir a la ventana de la informacion de cada maestro
var clickTeacherInfo = () => {
    document.getElementById("dvHome").className = 'row invisible';
    document.getElementById("dvTblAssig").className = "row invisible";
    document.getElementById("dvTblTeachers").className = "row invisible";
    document.getElementById("dvConfig").className = "row invisible";
    document.getElementById("dvAbout").className = "row invisible";
    document.getElementById("dvTeacherInfo").className = "row";
    document.getElementById("dvAddAssignament").className = "row invisible";
    document.getElementById("dvAddTeacher").className = "row invisible";
    document.getElementById("dvPutTeacherInfo").className = "row invisible";

    document.getElementById("lnkHome").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAssig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkTeachers").className = "text-sm-center nav-link text-white active";
    document.getElementById("lnkConfig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAbout").className = "text-sm-center nav-link text-white";
};

// Ir a la ventanad e agregar materia
var clickAddAssignament = () => {
    document.getElementById("dvHome").className = 'row invisible';
    document.getElementById("dvTblAssig").className = "row invisible";
    document.getElementById("dvTblTeachers").className = "row invisible";
    document.getElementById("dvConfig").className = "row invisible";
    document.getElementById("dvAbout").className = "row invisible";
    document.getElementById("dvTeacherInfo").className = "row invisible";
    document.getElementById("dvAddAssignament").className = "row";
    document.getElementById("dvAddTeacher").className = "row invisible";
    document.getElementById("dvPutTeacherInfo").className = "row invisible";

    document.getElementById("lnkHome").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAssig").className = "text-sm-center nav-link text-white active";
    document.getElementById("lnkTeachers").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkConfig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAbout").className = "text-sm-center nav-link text-white";

    emptySettingsInputs();
};

// Ir a la ventana de agregar maestro
var clickAddTeacher = () => {
    document.getElementById("dvHome").className = 'row invisible';
    document.getElementById("dvTblAssig").className = "row invisible";
    document.getElementById("dvTblTeachers").className = "row invisible";
    document.getElementById("dvConfig").className = "row invisible";
    document.getElementById("dvAbout").className = "row invisible";
    document.getElementById("dvTeacherInfo").className = "row invisible";
    document.getElementById("dvAddAssignament").className = "row invisible";
    document.getElementById("dvAddTeacher").className = "row";
    document.getElementById("dvPutTeacherInfo").className = "row invisible";

    document.getElementById("lnkHome").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAssig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkTeachers").className = "text-sm-center nav-link text-white active";
    document.getElementById("lnkConfig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAbout").className = "text-sm-center nav-link text-white";

    emptySettingsInputs();
    loadAssig();

};

// Ir a la ventana de editar maestro
var clickEditTeacher = () => {
    document.getElementById("dvHome").className = 'row invisible';
    document.getElementById("dvTblAssig").className = "row invisible";
    document.getElementById("dvTblTeachers").className = "row invisible";
    document.getElementById("dvConfig").className = "row invisible";
    document.getElementById("dvAbout").className = "row invisible";
    document.getElementById("dvTeacherInfo").className = "row invisible";
    document.getElementById("dvAddAssignament").className = "row invisible";
    document.getElementById("dvAddTeacher").className = "row invisible";
    document.getElementById("dvPutTeacherInfo").className = "row";

    document.getElementById("lnkHome").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAssig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkTeachers").className = "text-sm-center nav-link text-white active";
    document.getElementById("lnkConfig").className = "text-sm-center nav-link text-white";
    document.getElementById("lnkAbout").className = "text-sm-center nav-link text-white";
    
    loadAssig2();
};

//---------------------------------------Assig-----------------------------------
// Obtener materias
var getAssignments = () =>
{   
    console.log("loading")
    console.log(LstAssignments)

    $("#bodyTab1").empty();
    LstAssignments.forEach( element => {
        var elemento = str1; 
        elemento += str2;
        elemento += element.Id;
        elemento += str3;
        elemento += element.Name,
        elemento += str4;
        elemento += element.Level;
        elemento += str5;
        elemento += element.Teachers;
        elemento += str6;
        elemento += '<button type="button" onclick="getTeachersByAssignment('+ element.Id +')" id="btnTeacherAssig" class="btn btn-primary p-2">Teachers</button>' +
                    '<button type="button" onclick="deleteAssignament('+ element.Id +')" id="btnDelAssig" class="btn btn-primary p-2">Delete</button>';
        elemento += str7;
        $("#bodyTab1").append(elemento);
    });
};

// Obtener materia por nombre
var getAssignmentByName = () =>
{   
    var Search = document.getElementById("txtSearchA");

    $("#bodyTab1").empty();
    LstAssignments.forEach( element => {
        if(element.Name.toUpperCase().includes(Search.value.toUpperCase())){
            var elemento = str1; 
            elemento += str2;
            elemento += element.Id;
            elemento += str3;
            elemento += element.Name,
            elemento += str4;
            elemento += element.Level;
            elemento += str5;
            elemento += element.Teachers;
            elemento += str6;
            elemento += '<button type="button" onclick="getTeachersByAssignment('+ element.Id +')" id="btnTeacherAssig" class="btn btn-primary p-2">Teachers</button>' +
                        '<button type="button" onclick="deleteAssignament('+ (element.Id) +')" id="btnDelAssig" class="btn btn-primary p-2">Delete</button>';
        elemento += str7;
            $("#bodyTab1").append(elemento);
        }
    });
};

// crear mateira
var postAssignament = () => {
    var name = document.getElementById("txtAssigName").value;
    var aux = document.getElementById("selLevel2").value;
    var strAux = "";
    console.log(aux);

    if(aux == 1) {
        strAux = 'Elementary'
    }
    else if (aux == 2) {
        strAux = 'Jr HighSchool'
    }
    else if (aux == 3) {
        strAux = 'HighSchool'
    }
    else if (aux == 4) {
        strAux = 'University'
    }

    let id = auxIndex++;
    let cont = 0;
    
    for(let i = 0; i < LstTeachers.length; i++) {
        if(LstTeachers[i].AssigId === aux) {
            cont++;
        }
    }

    const assig = new assignamet(id, name, strAux, cont);

    console.log(assig);
    LstAssignments.push(assig);

    console.log

    clickAssig();
}

// Eliminar materia
var deleteAssignament = (id) => {

    console.log(id);

    for (let i = 0; i < LstAssignments.length; i++) {
        if(LstAssignments[i].Id === id) {
            LstAssignments.splice(i, 1)
        }
    }

    clickAssig();
}

// cargar materia para los select box
var loadAssig = () => {

    $("#selAssigT").empty();
    $("#selAssigT").append('<option selected>Choose...</option>');
    LstAssignments.forEach(element => {
        let i = 0;
        var elemento = '<option value="'+ element.Id +'">';
        elemento += element.Name;
        elemento += '</option>';
        $("#selAssigT").append(elemento);
    })
}

// cargar materia para los select box 2
var loadAssig2 = () => {

    $("#selAssigTe").empty();
    $("#selAssigTe").append('<option selected>Choose...</option>');
    LstAssignments.forEach(element => {
        var elemento = '<option value="'+ element.Id +'">';
        elemento += element.Name;
        elemento += '</option>';
        $("#selAssigTe").append(elemento);
    })
}

//-----------------------------------------Teachers---------------------------------
// Obtener maestro por materia. Este metodo se invoca en el boton de maestros en la seccion de materia por cada elemento dentro de la tabla
var getTeachersByAssignment = (id) => {
    clickTeachers();
    $("#bodyTab2").empty();
    LstTeachers.forEach( element => {
        if(element.AssigId == id){
            var elemento = str11;
            elemento += element.Id;
            elemento += str13;
            elemento += element.FirstName + " " + element.LastName,
            elemento += str14;
            elemento += element.AssigId;
            elemento += str15;
            elemento += element.Insitution;
            elemento += srt16;
            elemento += element.Rating;
            elemento += str17;
            elemento += element.Disponibility;
            elemento += str18;
            elemento += element.City;
            elemento += str19;
            elemento += '<button type="button" onclick="putTeacherInfo('+ element.Id +')" class="btn btn-primary p-2">Edit</button>'
                        + '<button type="button" onclick="getTeacherInfo('+ element.Id +')" class="btn btn-primary p-2">Info</button>'
                        + '<button type="button" onclick="deleteTeacher('+ element.Id +', '+ element.AssigId +')" class="btn btn-primary p-2">Delete</button>';
            elemento += str20;
        }
        $("#bodyTab2").append(elemento);
    });
};

// Obtener maestro por nombre en la barra de busqueda
var getTeachersByName = () => {
    clickTeachers();

    var Search = document.getElementById("txtSearchT");

    $("#bodyTab2").empty();
    LstTeachers.forEach( element => {
        if((element.FirstName.toUpperCase().includes(Search.value.toUpperCase())) || (element.LastName.toUpperCase().includes(Search.value.toUpperCase()))){
            var elemento = str11;
            elemento += element.Id;
            elemento += str13;
            elemento += element.FirstName + " " + element.LastName,
            elemento += str14;
            elemento += element.AssigId;
            elemento += str15;
            elemento += element.Insitution;
            elemento += srt16;
            elemento += element.Rating;
            elemento += str17;
            elemento += element.Disponibility;
            elemento += str18;
            elemento += element.City;
            elemento += str19;
            elemento += '<button type="button" onclick="putTeacherInfo('+ element.Id +')" class="btn btn-primary p-2">Edit</button>'
                        + '<button type="button" onclick="getTeacherInfo('+ element.Id +')" class="btn btn-primary p-2">Info</button>'
                        + '<button type="button" onclick="deleteTeacher('+ element.Id +', '+ element.AssigId +')" class="btn btn-primary p-2">Delete</button>';
            elemento += str20;
        }
        $("#bodyTab2").append(elemento);
    });
};

//Mostrar a los maestros en la tabla
var getTeachers = () => {
    $("#bodyTab2").empty();
    LstTeachers.forEach( element => {
        var elemento = str11;
        elemento += element.Id;
        elemento += str13;
        elemento += element.FirstName + " " + element.LastName,
        elemento += str14;
        elemento += element.AssigId;
        elemento += str15;
        elemento += element.Insitution;
        elemento += srt16;
        elemento += element.Rating;
        elemento += str17;
        elemento += element.Disponibility;
        elemento += str18;
        elemento += element.City;
        elemento += str19;
        elemento += '<button type="button" onclick="putTeacherInfo('+ element.Id +')" class="btn btn-primary p-2">Edit</button>'
                    + '<button type="button" onclick="getTeacherInfo('+ element.Id +')" class="btn btn-primary p-2">Info</button>'
                    + '<button type="button" onclick="deleteTeacher('+ element.Id +', '+ element.AssigId +')" class="btn btn-primary p-2">Delete</button>';
        elemento += str20;
        $("#bodyTab2").append(elemento);
    });
};

// Poner la infromacion del maestro selccionado en la venatana de informacion del maestro
var getTeacherInfo = (id) => {
    console.log("id selected: " + id);

    clickTeacherInfo();

    LstTeachers.forEach(element =>
    {
        if(element.Id == id)
        {
            document.getElementById("txtFirstNameT").value = element.FirstName;
            document.getElementById("txtLastNameT").value = element.LastName;
            document.getElementById("txtAssig").value = element.AssigId;
            document.getElementById("txtIns").value = element.Insitution;
            document.getElementById("txtRat").value = element.Rating;
            document.getElementById("txtEmailT").value = element.Email;
            document.getElementById("txtCellPhoneT").value = element.CellPhone;
            document.getElementById("txtCity").value = element.City;
            document.getElementById("txtDisp").value = element.Disponibility;
        }
    });
};

// Ir a la ventana de informacion del maestro con los campos llenos debido a la seleccionhecha
var putTeacherInfo = (id) => {
    console.log(id);

    clickEditTeacher();

    LstTeachers.forEach(element =>
    {
        if(element.Id == id)
        {
            document.getElementById("txtIdE").value = element.Id;
            document.getElementById("txtFirstNameTE").value = element.FirstName;
            document.getElementById("txtLastNameTE").value = element.LastName;
            document.getElementById("selAssigTe").value = element.AssigId;
            document.getElementById("txtInstitutionE").value = element.Insitution;
            document.getElementById("txtRatE").value = element.Rating;
            document.getElementById("txtEmailTE").value = element.Email;
            document.getElementById("txtCellPhoneTE").value = element.CellPhone;
            document.getElementById("txtCityTE").value = element.City;
            document.getElementById("txtDispTE").value = element.Disponibility;
        }
    });
};

// Crear un maestro
var postTeacher = () => {

    var FirstName = document.getElementById("txtTeacherFN").value
    var LastName =document.getElementById("txtTeacherLN").value
    var AssigId = document.getElementById("selAssigT").value
    var Insitution = document.getElementById("txtTeacherIns").value
    var Email = document.getElementById("txtTeacherEmail").value
    var CellPhone = document.getElementById("txtTeacherPhone").value
    var City = document.getElementById("txtTeacherCity").value
    var id = IndexTeacher++;

    
    var tch = new teacher(id, FirstName, LastName, AssigId, Insitution, 0, Email, CellPhone, "true", City);
    LstTeachers.push(tch);
    console.log(tch);

    let cont = 0;
    for(let i = 0; i < LstTeachers.length; i++) {
        if(LstTeachers[i].AssigId === AssigId) {
            cont++;
        }
    }
    console.log("cont: " + cont);

    for(let i = 0; i < LstAssignments.length; i++) {
        if(LstAssignments[i].Id == AssigId) {
            LstAssignments[i].Teachers = cont;
        }
    }

    clickTeachers();
}

// Editar la informacion del maestro y meterla en la lista
var putTeacher = () => {
    var Id = document.getElementById("txtIdE").value
    var fn = document.getElementById("txtFirstNameTE").value
    var ln =document.getElementById("txtLastNameTE").value
    var AssigId = document.getElementById("selAssigTe").value
    var Insitution = document.getElementById("txtInstitutionE").value
    var Rating = document.getElementById("txtRatE").value
    var email = document.getElementById("txtEmailTE").value
    var phone = document.getElementById("txtCellPhoneTE").value
    var City = document.getElementById("txtCityTE").value
    var disp = document.getElementById("txtDispTE").value

    var tch = new teacher(Id,fn, ln, AssigId, Insitution, Rating, email, phone, disp, city);

    console.log(tch);

    for (let i = 0; i < LstTeachers.length; i++) {
        if(LstTeachers[i].Id == Id) {
            LstTeachers.splice(i, 1);
            LstTeachers[i] = tch;
            console.log(LstTeachers[i])
        }
    }
    let cont = 0;
    for(let i = 0; i < LstTeachers.length; i++) {
        if(LstTeachers[i].AssigId === AssigId) {
            cont++;
        }
    }
    console.log("cont: " + cont);

    for(let i = 0; i < LstAssignments.length; i++) {
        if(LstAssignments[i].Id == AssigId) {
            LstAssignments[i].Teachers = cont;
        }
    }

    clickTeachers();
}

// Eliminar al maestro
var deleteTeacher = (id, AssigId) => {

    for (let i = 0; i < LstTeachers.length; i++) {
        if(LstTeachers[i].Id == id) {
            LstTeachers.splice(i, 1)
        }
    }

    let cont = 0;
    for(let i = 0; i < LstTeachers.length; i++) {
        if(LstTeachers[i].AssigId === AssigId) {
            cont++;
        }
    }
    console.log("cont: " + cont);

    for(let i = 0; i < LstAssignments.length; i++) {
        if(LstAssignments[i].Id == AssigId) {
            LstAssignments[i].Teachers = cont;
        }
    }
    clickTeachers();
}

var contactTeacher = () => {
    
}