import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Titulo from '../Titulo';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Numeros() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Titulo>Total de vacinados</Titulo>
      <Typography component="p" variant="h4">
        2.328.053
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        07/07/2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Numeros Gerais
        </Link>
      </div>
    </React.Fragment>
  );
}