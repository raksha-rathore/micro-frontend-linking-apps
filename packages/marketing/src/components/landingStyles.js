import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>( {
    '@global': {
        a: {
            textDecoration: 'none'
        }
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,8)
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8)
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' // 16:9
    },
    cardContent: {
        flexGrow: 1
    }
}))