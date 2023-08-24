interface Props{
  amount:number
}

const FmtPrice = ({amount}:Props) => {
  const FormattedAmount = new Number (amount).toLocaleString("en-BR", {
    style: 'currency',
    currency: "BRA",
    minimumFractionDigits:2
  })
  return 
  <span>{FormattedAmount}</span>
};

export default FmtPrice