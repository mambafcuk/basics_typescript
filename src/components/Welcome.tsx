interface IProps{
    name: string;
}



export function Welcome(props: IProps){
         const {name} = props;
         return <>
         {name}
         </>
}