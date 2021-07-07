import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

  container: {

    display: 'flex',

    flexWrap: 'wrap',

  },

  textField: {

    marginLeft: theme.spacing(1),

    marginRight: theme.spacing(1),

  },

}));

function initialState(){

  return{
    name: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    dataVacina: '',
    horaVacina:''
  };
}


export default function UserData(props) {

  const classes = useStyles();

  const [values, setValues] = useState(initialState);

  function verificaInformacoes({name, email, cpf, dataNascimento, dataVacina, horarioVacina}){

  }

  function onChange(event){
    const {value, name } = event.target

    setValues ({

      ...values,
      [name]:value
    });
  }

  function onSubmit(event){
    event.preventDefult();

    verificaInformacoes(values);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados dos Usuário
      </Typography>
      <form onSubmit={onSubmit}> 
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <TextField
              required
              id="name"
              name="name"
              label="Nome Completo"
              fullWidth
              onChange={onChange}
              value={values.name}
            />
          </Grid>
        
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="E-mail"
              fullWidth
              onChange={onChange}
              value={values.email}
            
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cpf"
              name="cpf"
              label="CPF"
              fullWidth
              onChange={onChange}
              value={values.cpf}
              
            />
          </Grid>

          <Grid item xs={12} sm={6}>

            <TextField 
              required
              id="date"
              label="Data de nascimento"
              type="date"
              fullWidth
              className ={
                classes.TextField
              }

              InputLabelProps = {{

                shrink: true
              }}
              onChange={onChange}
              defaultValue={values.dataNascimento}
            />

          </Grid>

          <Grid item xs={12}>

          <Typography variant="h6" gutterBottom>
          Selecionar data e horário
          </Typography>

          </Grid>

          
          <Grid item xs={12} sm={6}>

            <TextField 
              required
              id="dateVacina"
              label="Data da vacinação"
              type="date"
              fullWidth
              className ={
                classes.TextField
              }

              InputLabelProps = {{

                shrink: true
              }}
              onChange={onChange}
              defaultValue={values.dataVacina}
            />

          </Grid>

          
          <Grid item xs={12} sm={6}>

            <TextField 
              required
              id="time"
              label="Horário da vacinação"
              type="time"
              fullWidth
              className ={
                classes.TextField
              }

              InputLabelProps = {{

                shrink: true
              }}
              onChange={onChange}
              defaultValue={values.horaVacina}
            />

          </Grid>
        
        </Grid>
      </form>
    </React.Fragment>
  );
}