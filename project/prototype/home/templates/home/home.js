
import React from 'react'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import MUI components
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
	title: {
		textAlign: 'center',

	},
})

const home = () => {
	const classes = useStyles()

	return (
		<Container>
			<Typography className={classes.title} variant="h1">
        Help Centre
			</Typography>
		</Container>
	)
}

export default home
