import { FC, FunctionComponent } from "react";

interface ITestProps{
  name:string;
  age?:number;
  children?:string| React.ReactNode
}

const Test:FC<ITestProps> = ({name, age=18, children}) => {
  return (
    <div>hello {name}, your age is {age}</div>
  )
}

export default Test;