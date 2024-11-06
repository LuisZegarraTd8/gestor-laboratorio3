// import { Alert, Typography } from '@mui/material';
type TotalQuoteProps = {
    description: string
    total: string
}

export default function TotalQuote({description, total}: TotalQuoteProps) {
    return (
        // <Alert sx={{
        //   display: 'flex', justifyContent: 'center', alignItems: 'center',
        // }} severity="info" >
        //     <Typography variant="h5" gutterBottom align="center">
        //         {props.description}: $ {props.totalQuote}
        //     </Typography>
        // </Alert>
        <div className='flex justify-between py-3 px-6'>
            <div>
                <p className='text-lg font-medium text-negro-opaco'>{description}</p>
            </div>
            <div >
                <p className='text-2xl font-bold text-negro-opaco'>$ {total}</p>
            </div>
        </div>
    );
}
