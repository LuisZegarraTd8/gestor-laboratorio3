import { InfoOutlined } from "@mui/icons-material";

type MyAlertProps ={
  text: string
}

export default function MyAlertInfo({text}: MyAlertProps) {
  return (
    <div className="bg-[#06A1C0] text-white font-light text-sm rounded flex py-3 pl-6 pr-12 items-center gap-4 ">
        <div>
            <InfoOutlined/>
        </div>
        <div>
            <p>{text}</p>
        </div>
    </div>
  )
}
