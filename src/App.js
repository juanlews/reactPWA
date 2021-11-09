import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

const routes = [
  { path: '/home', component: TelaInicial },
  { path: '/diario', component: DiarioDeAlimentacao },
  { path: '/pesquisa', component: Pesquisa },
  { path: '/adicionar', component: Adicionar },
];

function App() {
  return (

        <Router>
            <div>
              <Route exact path="/" component={() => (
                <Redirect to={{ pathname: '/home' }} />
              )} />
              <Switch>
                {routes.map((route, index) => (
                  <Route path={route.path} component={route.component} key={index} />
                ))}
                <Route component={() => ('Página não encontrada!')} />
              </Switch>
            </div>
        </Router>

  );
}

function TelaInicial (){
  return (
    <>
      <div id='home' style={{'textAlign':'center'}}>
        {
          //<img src="pngwing.com.png" alt="logo" style="width:20vw; margin-top:5vh" />
        }
        <Link to={'diario'} >
          <Button style={{ 'width': '80vw', 'height':'8vh', 'marginTop':'10vh', 'border': 'hidden', 'fontSize':'26px', 'background':'#4250b3', color: 'aliceblue', 'borderRadius' : '25px'}}>
            Diario de alimentação
          </Button>
        </Link>

        <Link to={'pesquisa'} >
          <Button onClick={()=>{}} style={{'width':'80vw', height:'8vh', marginTop:'5vh',border:' hidden',fontSize:'26px',background:'#4250b3',color:'aliceblue',borderRadius:' 25px'}}>
            Pesquisar
          </Button>
        </Link>

        <Link to={'adicionar'} >
          <Button onclick={()=>{}} style={{'width':'80vw', height:'8vh', marginTop:'5vh',border: 'hidden', fontSize:'26px', background:'#4250b3', color: 'aliceblue', borderRadius: '25px'}}>
            Adicionar
          </Button>
        </Link>
      </div>
    </>
  );
}

function DiarioDeAlimentacao(){
  return (
    <>
    DIARIO
    </>
  );
}
function Pesquisa(){
  return (
    <>
    PESQUISA
    </>
  );
}
function Adicionar(){
  return (
    <>
    ADICIONAR
    </>
  );
}
export default App;
