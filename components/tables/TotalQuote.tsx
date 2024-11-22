type TotalQuoteProps = {
    description: string
    total: string
}

export default function TotalQuote({description, total}: TotalQuoteProps) {
    return (
        <div className='flex justify-between py-3 px-6 bg-gris-claro rounded-lg'>
            <div>
                <p className='text-lg font-medium text-negro-opaco'>{description}</p>
            </div>
            <div >
                <p className='text-xl font-bold text-negro-opaco'>$ {total}</p>
            </div>
        </div>
    );
}
