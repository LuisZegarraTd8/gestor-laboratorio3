import { InfoOutlined } from "@mui/icons-material";

type MyAlertProps ={
  text: string
}

export default function MyAlertInfo({text}: MyAlertProps) {
  return (
    <div className="bg-azul text-white font-light text-sm rounded flex py-3 px-6 items-center gap-4 ">
        <div>
            <InfoOutlined/>
        </div>
        <div>
            <p>{text}</p>
        </div>
    </div>
  )
}
