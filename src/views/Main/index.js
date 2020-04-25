import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavHeader from '../../components/NavHeader'
import MyCards from '../../components/MyCards'
import Footer from '../../components/Footer'


const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));


const cards = [
    {
        id: 1,
        image: 'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_960_720.jpg',
        title: 'Notebook',
        description: 'Notebook na mesa de trabalho'
    },
    {
        id: 2,
        image: 'https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_960_720.jpg',
        title: 'Notebook e Celular',
        description: 'Notebook, celular, caneta e Agenda.'
    },
    {
        id: 3,
        image: 'https://cdn.pixabay.com/photo/2018/06/07/16/49/vr-3460451_960_720.jpg',
        title: 'VR',
        description: 'Realidade Virtual'
    },
    {
        id: 4,
        image: 'https://cdn.pixabay.com/photo/2016/05/04/13/17/technology-1371358_960_720.jpg',
        title: 'Placa Mãe',
        description: 'Placa Mâe Gigabyte'
    },
    {
        id: 5,
        image: 'https://cdn.pixabay.com/photo/2018/02/28/21/44/technology-3189176_960_720.jpg',
        title: 'Controle PS4',
        description: 'Controle de PS4 na versão preta.'
    }

];


function App() {
    const classes = useStyles();

    return (
        <>
            <NavHeader />
            <CssBaseline />

            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Lista de Técnologias
            </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Esse é o nosso First Project, nele aprendemos a criar arrays de objetos, components, sobre props e muito mais.
            </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Entrar
                  </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Cancelar
                  </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <MyCards data={cards} />
                </Container>
            </main>

            <Footer />

        </>
    );
}

export default App;
