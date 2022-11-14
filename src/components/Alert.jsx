
const Alert = ({alert}) => {
  return (
    <div>
        <p className={`${alert.error ? 'bg-red-500' : 'bg-green-500'} text-center  p-3 rounded-lg text-white uppercase text-xl`}>{alert.msg}</p>
    </div>
  )
}

export default Alert