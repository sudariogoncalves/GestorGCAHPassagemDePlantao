        
/*Variáveis globais para geração dos relatórios*/
var atividadeComentada = "";

/*Inclusão data, hora no sistema e possicionamento nas telas*/  
hoje = new Date();
dia = hoje.getDate();
mes = hoje.getMonth() +1;
ano = hoje.getYear() + 1900;
hora = hoje.getHours();
minuto = hoje.getMinutes();
document.write("<div style='text-align:right; padding-right:80px'><h3>Data: " + dia + "/" + mes + "/" + ano + "  -  " + " hora:" + hora + ":" + minuto +"</h3></div>")
document.write("<div style='text-align:center'><h2> GESTOR - GCAH </h2><h2> Cuidados e Assistência Hospitalar</h2></div>") 

/*Array de controle do login coordenador na tela principal (codigo, senha e id)*/
function BuscarArrayLoginCoordenadores() { 
    var arraylogincoordenador = ['hp200200;c124;200', 'hp200201;c124;201', 'hp200202;c124;202'];
    return arraylogincoordenador;
}

/*Array's de controle dos coordenadores das 3 equipes do turno Manhã, Tarde e Noite (tela funcionários)*/
function BuscarArrayEquipeCoordenadores() { 
    var equipetodas = ['200;Sudario Gonçalves;Coordenador;hp200200;Equipe Manhã - Leitos 01 a 17', '201;Lucas Melo;Coordenador;hp200201;Equipe Tarde - Leitos 01 a 17', '202;Gabriel Galdino;Coordenador;hp200203;Equipe Noite - Leitos 01 a 17'];
    return equipetodas;
}

/*Array de controle do login dos funcionários na tela Principal (codigo, senha e id)'hp200016;c123;22',*/
function BuscarArrayLogin() { 
    var arrayLogin = ['hp200001;c123;1', 'hp200002;c123;6', 'hp200003;c123;11', 'hp200004;c123;21', 'hp200005;c123;26', 'hp200006;c123;31', 'hp200007;c123;41', 'hp200008;c123;46', 'hp200009;c123;51', 'hp200010;c123;2',
        'hp200011;c123;3', 'hp200012;c123;7', 'hp200013;c123;8', 'hp200014;c123;12', 'hp200015;c123;13', 'hp200017;c123;23', 'hp200018;c123;27', 'hp200019;c123;28', 'hp200020;c123;32',
        'hp200021;c123;33', 'hp200022;c123;42', 'hp200023;c123;43', 'hp200024;c123;47', 'hp200025;c123;48', 'hp200026;c123;52', 'hp200027;c123;53', 'hp200028;c123;6', 'hp200029;c123;24', 'hp200030;c123;25',
        'hp200031;c123;29', 'hp200032;c123;30', 'hp200033;c123;34', 'hp200034;c123;10', 'hp200035;c123;44', 'hp200036;c123;45', 'hp200037;c123;49', 'hp200038;c123;50', 'hp200039;c123;54', 'hp200040;c123;55',
    ];
    return arrayLogin;
}

/*Array's de controle dos funcionários e definição equipeturno Manhã, Tarde e Noite (tela CargaEquipeCord)*/
function BuscarArrayEquipeManha() { /*Turma da Manhã*/
    var equipemanha = ['1;Carlos de Souza;Enfermeiro;hp200001;Eq01 Responsavel p/Leitos 01 a 05', '2;José Feliciano;Técnico de Enfermagem;hp200010;Eq01 Responsavel p/Leitos 01 a 05', '3;Adriano de Silva;Técnico de Enfermagem;hp200011;Eq01 Responsavel p/Leitos 01 a 05', '4;Berenice Antunes;Auxiliar Técnico de Enfermagem;hp200016;Eq01 Responsavel p/Leitos 01 a 05',
        '5;Silvia Aparecida;Auxiliar Técnico de Enfermagem;hp200017;Eq01 Responsavel p/Leitos 01 a 05', '6;Eduardo das Dores;Enfermeiro;hp200002;Eq02 Responsavel p/Leitos 06 a 11', '7;Marisa Helena;Técnico de Enfermagem;hp200012;Eq02 Responsavel p/Leitos 06 a 11', '8;Monique Resende;Técnico de Enfermagem;hp200013;Eq02 Responsavel p/Leitos 06 a 11',
        '9;Afranio Pedrosa;Auxiliar Técnico de Enfermagem;hp200018;Eq02 Responsavel p/Leitos 06 a 11', '10;Wilde Juvenal;Auxiliar Técnico de Enfermagem;hp200019;Eq02 Responsavel p/Leitos 06 a 11', '11;Gabriel Galdino;Enfermeiro;hp200003;Eq03 Responsavel p/Leitos 12 a 17', '12;Lucas de Souza;Técnico de Enfermagem;hp200014;Eq03 Responsavel p/Leitos 12 a 17',
        '13;Pedro de Souza;Técnico de Enfermagem;hp200015;Eq03 Responsavel p/Leitos 12 a 17', '14;Soraia das Dores;Auxiliar Técnico de Enfermagem;hp200020;Eq03 Responsavel p/Leitos 12 a 17', '15;Ricardo Soares;Auxiliar Técnico de Enfermagem;hp200021;Eq03 Responsavel p/Leitos 12 a 17'];
    return equipemanha;
}

function BuscarArrayEquipeTarde() {  /*Turma da Tarde*/
    var equipetarde = ['21;Amarildo da Cunha;Enfermeiro;hp200004;Eq01 Responsavel p/Leitos 01 a 05', '22;Abrel Feliciano;Tecnico de Enfermagem;hp200016;Eq01 Responsavel p/Leitos 01 a 05', '23;Anderson Louredo;Técnico de Enfermagem;hp200017;Eq01 Responsavel p/Leitos 01 a 05', '24;Carlos Alberto;Auxiliar Técnico de Enfermagem;hp200029;Eq01 Responsavel p/Leitos 01 a 05',
        '25;Alexandre Aparecido;Auxiliar Técnico de Enfermagem;hp200030;Eq01 Responsavel p/Leitos 01 a 05', '26;Eduarda das Dores;Enfermeiro;hp200005;Eq02 Responsavel p/Leitos 06 a 11', '27;Maria Helena;Técnico de Enfermagem;hp200018;Eq02 Responsavel p/Leitos 06 a 11', '28;Pedro Resende;Técnico de Enfermagem;hp200019;Eq02 Responsavel p/Leitos 06 a 11',
        '29;Lucas Pedrosa;Auxiliar Técnico de Enfermagem;hp200031;Eq02 Responsavel p/Leitos 06 a 11', '30;Wesley Juvenal;Auxiliar Técnico de Enfermagem;hp200032;Eq02 Responsavel p/Leitos 06 a 11', '31;Marinalva Galdino;Enfermeiro;hp200006;Eq03 Responsavel p/Leitos 12 a 17', '32;Rogeria Gonçalves;Técnico de Enfermagem;hp200020;Eq03 Responsavel p/Leitos 12 a 17',
        '33;Patrico da Iluminação;Técnico de Enfermagem;hp200021;Eq03 Responsavel p/Leitos 12 a 17', '34;Sandra Cecilia;Auxiliar Técnico de Enfermagem;hp200033;Eq03 Responsavel p/Leitos 12 a 17', '35;Renato de Almeida;Auxiliar Técnico de Enfermagem;hp200034;Eq03 Responsavel p/Leitos 12 a 17'];
    return equipetarde;
}

function BuscarArrayEquipeNoite() {  /*Turma da Noite*/
    var equipenoite = ['41;Antonio Carlos;Enfermeiro;hp200007;Eq01 Responsavel p/Leitos 01 a 05', '42;Jean Antunes;Tecnico de Enfermagem;hp200022;Eq01 Responsavel p/Leitos 01 a 05', '43;Adriana Calabresa;Técnico de Enfermagem;hp200023;Eq01 Responsavel p/Leitos 01 a 05', '44;Alexandra de Nobrega;Auxiliar Técnico de Enfermagem;hp200035;Eq01 Responsavel p/Leitos 01 a 05',
        '45;Janaina Cavadão;Auxiliar Técnico de Enfermagem;hp200036;Eq01 Responsavel p/Leitos 01 a 05', '46;Nadine Figueredo;Enfermeiro;hp200008;Eq02 Responsavel p/Leitos 06 a 11', '47;Monica Anunciação;Técnico de Enfermagem;hp200024;Eq02 Responsavel p/Leitos 06 a 11', '48;Carol Resende;Técnico de Enfermagem;hp200025;Eq02 Responsavel p/Leitos 06 a 11',
        '49;Pedro Francisco;Auxiliar Técnico de Enfermagem;hp200037;Eq02 Responsavel p/Leitos 06 a 11', '50;Bonifacio Delgado;Auxiliar Técnico de Enfermagem;hp200038;Eq02 Responsavel p/Leitos 06 a 11', '51;André Cenario;Enfermeiro;hp200009;Eq03 Responsavel p/Leitos 12 a 17', '52;Juliana Abrel;Técnico de Enfermagem;hp200026;Eq03 Responsavel p/Leitos 12 a 17',
        '53;Paulo Coelho;Técnico de Enfermagem;hp200027;Eq03 Responsavel p/Leitos 12 a 17', '54;Benedita das Dores;Auxiliar Técnico de Enfermagem;hp200039;Eq03 Responsavel p/Leitos 12 a 17', '55;Juliano Brasil;Auxiliar Técnico de Enfermagem;hp200040;Eq03 Responsavel p/Leitos 12 a 17'];
    return equipenoite;
}

/*Função de identificação daas atividades por função dos funcionários*/
function BuscarArrayAtividadesPorFuncao() {

    var funcaoAtividade = [
        '1;Enfermeiro;1)Atualização de prontuários e auxilio aos medicos',
        '2;Enfermeiro;2)Encaminhamento de exames a laboratórios',
        '3;Enfermeiro;3)Cuidar da higiene e conservação do local',
        '4;Enfermeiro;4)Administrar medicamentos prescritos ao paciente',
        '5;Enfermeiro;5)Monitorar quadro geral do paciente',
        '6;Técnico de Enfermagem;1)Participar da programação da Assistência',
        '7;Técnico de Enfermagem;2)Auxiliar o paciente na coleta de exames',
        '8;Técnico de Enfermagem;3)Administrar medicamentos prescritos ao paciente',
        '9;Técnico de Enfermagem;4)Higienização coorporal dos pacientes',
       '10;Técnico de Enfermagem;5)Monitoramento de dados vitais',
       '11;Auxiliar Técnico de Enfermagem;1)Auxiliar a programação da assistência',
       '12;Auxiliar Técnico de Enfermagem;2)Auxiliar no deslocamento necessários do paciente',
       '13;Auxiliar Técnico de Enfermagem;3)Coleta de materiais de exame',
       '14;Auxiliar Técnico de Enfermagem;4)Acompanhamento de dietas',
       '15;Auxiliar Técnico de Enfermagem;5)Mobilização do paciente no leito'];

    return funcaoAtividade;
    
}


            
