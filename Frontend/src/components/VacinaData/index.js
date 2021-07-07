import React, {useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { style } from '@material-ui/system';

const styles = makeStyles((theme) => ({

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
    color: '#888'
  }

}));


function initialState(){
  return{
    nomeUnidade: '',
    servicos: ''
  }
}

export default function VacinaData() {

  const classes = styles();

  const [values, setValues] = useState(initialState);
  const [count, setCount] = useState(true);
  const [service, setService] = useState([]);
  const [unidade, setUnidade] = useState([]);

  let servicos = [];
  let nomeUnidade = [];

  useEffect(() => {

    (async function(){
      await axios.get('http://localhost:5000/api/unidades')
      .then(async (response) => {
        if(response.data.status === 'ok'){
          for(let i = 0; i < response.data.message.length; i++){
            servicos.push(response.data.message[i].nome_unidade);
            nomeUnidade.push(response.data.message[i].nome_unidade);
          }
        
          setService(servicos);
          setUnidade(nomeUnidade);
          console.log(service);
          console.log(unidade);
          setCount(false);
      
        }

      })

    })();
 
  })
  
  function onChange(event){
    const {value, name} = event.target;

    setValues({
      ...value,
      [name]:value,
    })
  }

  function onSubmit(event){
    event.preventDefault();
  }
  
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Servições
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <FormControl variant ='filled' className={classes.dropdown}>
              <InputLabel htmlFor = 'servico'>Selecione o Serviço</InputLabel>
              <Select
                native
                onChange={onChange}
                value={values.servicos}
                inputProps={{
                  name: 'selecionarServico',
                  id: 'servico'
                }}

                >
                <option aria-label = 'None' value = ''/>
                {service ? (

                  service.map((item) => {
  
                    console.log(item);
  
                  })

                ):console.log(service)}
                </Select>
            </FormControl>

        </Grid>
          <Grid item xs={12}>
            <FormControl variant ='filled' className={classes.dropdown}>
              <InputLabel htmlFor = 'inidade'>Selecione a unidade</InputLabel>
              <Select
                native
                onChange={onChange}
                value={values.nomeUnidade}
                inputProps={{
                  name: 'selecionarUnidade',
                  id: 'unidade'
                }}

                >
                <option aria-label = 'None' value = ''/>
                {unidade ? (

                  unidade.map((item) => {
  
                    console.log(item);
  
                  })

                ):console.log(unidade)}
                </Select>
            </FormControl>
         </Grid>

      </Grid>
      
    </React.Fragment>
  );
}

