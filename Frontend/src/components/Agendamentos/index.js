import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Titulo from '../Titulo';

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

async function getAgendamentos() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '07 jun, 2021', 'Fábio Ricardo Emanuel Silveira', 'fabio.ricardo@gmail.com', 'Unidade de Vila Velha', '13:00'),
  createData(1, '11 abr, 2021', 'Luan Márcio Souza', 'luansouza5@gmail.com', 'Unidade de Coqueiral de Itaparica', '08:30'),
  createData(2, '25 Mar, 2021', 'Stella Yasmin Lopes', 'stellalopes@hotmail.com', 'Unidade de Paul', '10:00'),
  createData(3, '16 Mar, 2021', 'Kaique Sérgio da Cunha', 'kaique@gmail.com', 'Unidade de Vila Velha', '12:30'),
  createData(4, '05 fev, 2021', 'Tatiane Valentina Assunção', 'tativalentina87@gmail.com', 'Unidade de Coqueiral de Itaparica', '08:30'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Agendamentos() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Titulo>Agendamentos</Titulo>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Local</TableCell>
            <TableCell align="right">Horário</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}