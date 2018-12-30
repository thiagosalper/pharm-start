import React from 'react';
import Card from "material-ui/Card";
import CardContent from "material-ui/Card/CardContent";
import Typography from "material-ui/Typography";
import withStyles from "material-ui/styles/withStyles";

export default ({ ...props }) => {
    const {
        classes,
        title,
        description,
    } = props;
    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <props.icon className={classes.cardIconCustom} />
                <Typography
                    variant="headline"
                    component="h2"
                    className={classes.cardTitle}
                >
                    {description}
                </Typography>
                <Typography component="p" className={classes.cardCategoryCustom}>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}

StatsCardCustom.propTypes = {
    classes: PropTypes.object.isRequired,
    icon: PropTypes.func.isRequired,
    title: PropTypes.node,
    description: PropTypes.node,
    statLink: PropTypes.object,
    statText: PropTypes.node
};

StatsCardCustom.defaultProps = {
    title: 'Your Title',
    description: 'Your Description',
};

export default withStyles(statsCardStyle)(StatsCardCustom);