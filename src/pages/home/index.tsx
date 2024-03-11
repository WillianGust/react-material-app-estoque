import React, { useState } from "react";
import { Typography, Button, Container, FormControl, Grid, Input, InputLabel, makeStyles, Box } from '@material-ui/core';
import User from "../../models/User";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const useStyles = makeStyles({
    root: {
      marginTop: 10
    },
  });
  const classes = useStyles();

  return (
    <Container>
      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Grid item xs={4}>
          <FormControl>
            <InputLabel htmlFor="my-input">
              Email
            </InputLabel>
            <Input onChange={handleChange} name='email' value={user.email} id="my-input" />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <InputLabel htmlFor="my-input">
              Password
            </InputLabel>
            <Input onChange={handleChange} name='password' value={user.password} type="password" id="my-input"></Input>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <Button className={classes.root} variant='contained' color='primary'>Envoyer</Button>
          </FormControl>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" mt={1}>
        <Link to="/app">
          Signe up
        </Link>
      </Box>
      {/* <h1>Hello 1</h1> */}
    </Container>
  )
}
export default Login;
