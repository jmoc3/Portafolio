import { GoEye } from "react-icons/go";
import {Card, Button, CardBody} from "@nextui-org/react";

type CardProps = {
  date:string,
  name:string,
  theme:string,
  description:string,
  repo:string,
  tec:string
}


export function CardComponent({date,name,theme,description,repo,tec}:CardProps):JSX.Element{


  return (
      <Card className="opacity-50 hover:opacity-100 hover:transition hover:duration-1000 hover:ease-out">
      <CardBody className="card 2xl:flex 2xl:flex-col 3xl:flex-row justify-evenly p-8 3xl:py-8 3xl:px-0  " >
        <div className="left text-orange-300 md:text-md 2xl:text-xl flex flex-col items-center gap-[4.8rem]">
          <span className="">{date}</span>
          </div>
        <div className="right 3xl:w-7/12 space-y-8">
          <div className="project_name flex flex-col gap-2 ">
            <div className="title flex items-center justify-between">
              <h2 className="name s8:text-xl md:text-xl 2xl:text-2xl  ">{name}</h2><a href={repo} target="_blank"><GoEye className="text-xl"/></a>
            </div>
            <span className="theme md:text-sm 2xl:text-lg text-blue-300">{theme}</span>
          </div>
          <p className="project_description md:text-xs 2xl:text-sm ">{description}</p>

          <div className="flex flex-wrap gap-3 overflow-hidden z-10">
            {
              tec.split(',').map((e,i)=>(

              <Button key={i} className="text-tiny text-white border-blue-200  p-4 w-fit " variant="bordered" radius="lg">
                {e}
              </Button>
              ))
            }
            
          </div>

        </div>
      </CardBody >
      
    </Card>
  )
}