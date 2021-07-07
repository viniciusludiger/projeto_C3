import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dropdown: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'left',
    margin: '10px'
  },
  buttonSelect: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    fontSize: '1rem',
    color: '#888',
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
}));

function initialState() {
  return{
    name: '',
    email: '',
    descricao: '',
  };
}

export default function RegistrarUnidade( props ) {

  const classes = useStyles();

  const [values, setValues] = useState(initialState);

  function verificaInformacoes({ name, email, descricao }){

    console.log(name);
    
    const dados = {
      
      nome_unidade: name,      
      email_unidade: email,
      descricao: descricao
    }
    
    axios.post('http://localhost:5000/api/unidades', dados)
    .then(async (response) => {
      let resposta = await response.data
      console.log(resposta.status);
      if (await resposta.status === 'ok'){
        return alert('Unidade castrada com sucesso')
      }else{
        alert("Erro ao cadastrar a unidade")
        window.location.reload();
      }
      
    })


  }

  function onChange(event){
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });

  }

  function onSubmit(event){
    event.preventDefault();

    verificaInformacoes(values);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações  da Unidade
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Nome da unidade"
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

          <Grid container>
            <Grid item xs={12} className={classes.dropdown}>
              <FormControl variant='filled' className={classes.buttonSelect}>
                <InputLabel htmlFor='filled-dia-native-simple'>Tipo de serviço</InputLabel>
                <Select
                  native
                  fullWidth
                  value={values.descricao}
                  onChange={onChange}
                  inputProps={{
                    name: 'descricao',
                    id: 'filled-dia-native-simple'
                  }}
                >
                  <option aria-label='None' value='' />
                  <option>Vacina Covid-19 - 1° dose</option>
                  <option>Vacina Covid-19 - 2° dose</option>
                  <option>Vacina da Influenza</option>
                  <option>Vacina de Tétano</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={verificaInformacoes}
            type='submit'
              >
            Cadastrar Unidade
            </Button> 
        </Grid>
      </form>

    </React.Fragment>
  );
}