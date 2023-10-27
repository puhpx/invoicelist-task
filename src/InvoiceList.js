import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Container,
  Button,
  Box,
  Select,
  MenuItem
} from '@mui/material';
import data from './data.json';

const HeaderContent = ({ invoice }) => (
  <Grid container alignItems="flex-start" justifyContent="space-between">
    <Grid item container xs={8} sm={8} alignItems="flex-start" spacing={1.5}>
      <Grid item>
        <Typography variant="body2" align="left">ORDER PLACED</Typography>
        <Typography variant="subtitle2" align="left">{invoice.created_at}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" align="left">TOTAL</Typography>
        <Typography variant="subtitle2" align="left">${invoice.total_price}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" align="left">SHIP TO</Typography>
        <Grid item style={{ marginTop: '-8px' }}>
          <Select
            value={invoice.full_name}
            variant="standard"
            disableUnderline={true}
            style={{ fontSize: '0.85rem', color: 'blue' }}
          >
            <MenuItem value={invoice.full_name}>{invoice.full_name}</MenuItem>
            <Typography style={{ paddingLeft: '15px', paddingRight: '15px', paddingBottom: '5px' }}>
              {invoice.address1} <br />
              {invoice.address2 && (<>{invoice.address2}<br /></>)}
              {invoice.city}, {invoice.state} &nbsp; {invoice.zipcode}
            </Typography>
          </Select>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={4} sm={4} container direction="column" alignItems="flex-end">
      <Typography variant="body2" align="right">ORDER #{invoice.id}</Typography>
      <Typography variant="subtitle2" color="primary" align="right">
        VIEW ORDER DETAILS
      </Typography>
    </Grid>
  </Grid>
);

const InvoiceList = () => {
  return (
    <Container xs={12}>
      <Grid container spacing={3} direction="column">
        {data.invoices.map((invoice) => (
          <Grid item xs={12} key={invoice.id}>
            <Card variant="outlined">
              <CardHeader
                title={<HeaderContent invoice={invoice} />}
                style={{ backgroundColor: '#f1f1f1' }}
              />
              <CardContent>
                {invoice.items.map((item, index) => (
                  <Box display="flex" alignItems="center" mb={3} key={index}>
                    <img src={item.image_url} alt={item.product_name} style={{ width: '100px' }} />
                    <Box ml={2}>
                      <Typography variant="title" style={{ fontWeight: 'bold', fontSize: '1.6rem' }}>{item.product_name}</Typography>
                      <Typography variant="body2" color="textSecondary" style={{ fontSize: '1rem' }}>Quantity: {item.quantity}</Typography>
                      <Typography variant="body2" color="textSecondary" style={{ fontSize: '1rem' }}>Total: ${item.price * item.quantity}</Typography>
                    </Box>
                    <Box
                      ml="auto"
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-end"
                      justifyContent="flex-end"
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        style={{
                          fontSize: '0.75rem',
                          marginBottom: '-5rem',
                          width: '120px',
                          height: '30px',
                        }}
                      >
                        WRITE A REVIEW
                      </Button>
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InvoiceList;