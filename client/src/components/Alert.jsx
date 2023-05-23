import { useAppContext } from "../context/context"

function Alert() {
  const { alertType, alertText } = useAppContext()
  return (
    <div
      className={`
    alert alert-${alertType}
  `}
    >
      {alertText}
    </div>
  )
}
export default Alert
